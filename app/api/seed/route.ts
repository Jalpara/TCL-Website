import { getPayload } from 'payload';
import configPromise from '@/payload.config';
import { NextResponse } from 'next/server';

export async function GET() {
  const payload = await getPayload({ config: configPromise });

  try {
    // Proceed with seed

    payload.logger.info('Starting database seed...');

    // Clean up existing data to avoid unique constraint errors during dev seeding
    await payload.delete({ collection: 'pages', where: { id: { exists: true } } });
    await payload.delete({ collection: 'initiatives', where: { id: { exists: true } } });
    await payload.delete({ collection: 'stories', where: { id: { exists: true } } });
    await payload.delete({ collection: 'events', where: { id: { exists: true } } });
    await payload.delete({ collection: 'metrics', where: { id: { exists: true } } });

    // Create Metrics
    const metrics = [
      { label: 'Meals Shared', value: '18,450+', icon: 'Utensils' },
      { label: 'People Helped', value: '3,250+', icon: 'HeartHandshake' },
      { label: 'Volunteer Hours', value: '1,10,000+', icon: 'Handshake' },
      { label: 'Trees Planted', value: '2,150+', icon: 'Leaf' },
    ];

    const createdMetrics = [];
    for (const metric of metrics) {
      const created = await payload.create({
        collection: 'metrics',
        data: metric,
      });
      createdMetrics.push(created);
    }

    // Create Initiatives
    const initiativesData = [
      { title: 'The Shared Plate', slug: 'the-shared-plate', shortDescription: 'Sharing food. Strengthening communities.', icon: 'Utensils', themeColor: 'orange' },
      { title: 'The Better Choice', slug: 'the-better-choice', shortDescription: 'Supporting healthier choices, stronger futures.', icon: 'Shield', themeColor: 'purple' },
      { title: 'The Common Ground', slug: 'the-common-ground', shortDescription: "This planet is our common ground, We're taking care of it", icon: 'Leaf', themeColor: 'green' },
      { title: 'The Learning Circle', slug: 'the-learning-circle', shortDescription: 'Creating pathways through knowledge.', icon: 'BookOpen', themeColor: 'blue' },
    ];

    const createdInitiatives = [];
    for (const init of initiativesData) {
      const created = await payload.create({
        collection: 'initiatives',
        data: init,
      });
      createdInitiatives.push(created);
    }

    // Create Stories
    const storiesData = [
      { title: 'A warm meal, a brighter day', slug: 'warm-meal', summary: 'How a simple meal brought smiles to a community.', initiative: createdInitiatives[0].id },
      { title: 'From silence to strength', slug: 'silence-to-strength', summary: 'A story of healing, hope and fighting addiction.', initiative: createdInitiatives[1].id },
      { title: 'Planting a greener future', slug: 'greener-future', summary: 'Students came together to revive their local forest patch.', initiative: createdInitiatives[2].id },
      { title: 'Education changes everything', slug: 'education-changes', summary: 'Supporting a child today to build a better tomorrow.', initiative: createdInitiatives[3].id },
    ];

    for (const story of storiesData) {
      await payload.create({
        collection: 'stories',
        data: story as any,
      });
    }

    // Create Dummy Location
    const location = await payload.create({
      collection: 'locations',
      data: {
        name: 'TCL Main Center',
        addressLine1: '123 Impact Way',
        city: 'Mumbai',
        state: 'Maharashtra',
      },
    });

    // Create Events
    const eventsData = [
      { title: 'Food Drive', slug: 'food-drive', startDate: new Date('2026-05-25T10:00:00Z').toISOString(), initiative: createdInitiatives[0].id, location: location.id },
      { title: 'Addiction Awareness', slug: 'addiction-awareness', startDate: new Date('2026-06-08T18:00:00Z').toISOString(), initiative: createdInitiatives[1].id, location: location.id },
      { title: 'Beach Cleanup Drive', slug: 'beach-cleanup', startDate: new Date('2026-06-15T07:00:00Z').toISOString(), initiative: createdInitiatives[2].id, location: location.id },
      { title: 'Literacy Camp', slug: 'literacy-camp', startDate: new Date('2026-06-22T09:00:00Z').toISOString(), initiative: createdInitiatives[3].id, location: location.id },
    ];

    for (const event of eventsData) {
      await payload.create({
        collection: 'events',
        // Skipping location for now since it's required in schema but let's see if we can get away with it, or maybe it fails.
        // I will just create a dummy location first.
        data: event as any,
      });
    }

    // Update SiteConfig
    await payload.updateGlobal({
      slug: 'site-config',
      data: {
        organizationName: 'The Connecting Link',
        contactEmail: 'info@theconnectinglink.org',
        contactPhone: '+91 98765 43210',
        socialLinks: {
          instagram: '#',
          facebook: '#',
          linkedin: '#',
          youtube: '#',
        },
      },
    });

    // Create Home Page
    await payload.create({
      collection: 'pages',
      data: {
        title: 'Home',
        slug: 'home',
        layout: [
          {
            blockType: 'hero',
            headline: 'Connecting People.\\nCreating Impact.',
            subheadline: 'We connect individuals, communities, volunteers, organisations and changemakers to create meaningful social impact.',
            primaryCta: { label: 'Explore Initiatives', url: '/initiatives' },
            secondaryCta: { label: 'Become a Connecting Link', url: '/get-involved' },
          },
          {
            blockType: 'process',
            title: 'How It Works',
            steps: [
              { title: 'A Need Exists', description: 'A community or individual faces a challenge.', icon: 'Users' },
              { title: 'We Connect', description: 'We find the right people and resources.', icon: 'Search' },
              { title: 'Together We Act', description: 'Volunteers and partners come together to help.', icon: 'Handshake' },
              { title: 'Lives Improve', description: 'Real impact. Stronger communities.', icon: 'Heart' },
            ],
          },
          {
            blockType: 'entityShowcase',
            title: 'Our Initiatives',
            entityType: 'initiatives',
            displayMode: 'latest',
            limit: 4,
          },
          {
            blockType: 'impactOverview',
            title: 'Our Impact So Far',
            metrics: createdMetrics.map((m) => m.id),
            cta: { label: 'View detailed report', url: '/impact' },
          },
          {
            blockType: 'entityShowcase',
            title: 'Stories That Inspire',
            entityType: 'stories',
            displayMode: 'latest',
            limit: 4,
          },
          {
            blockType: 'entityShowcase',
            title: 'Upcoming Events',
            entityType: 'events',
            displayMode: 'latest',
            limit: 4,
          },
        ],
      },
    });

    return NextResponse.json({ message: 'Seed complete!' });
  } catch (error: any) {
    console.error('Seed error:', error);
    if (error.data) console.error('Error data:', JSON.stringify(error.data, null, 2));
    return NextResponse.json({ error: error.message, data: error.data }, { status: 500 });
  }
}
