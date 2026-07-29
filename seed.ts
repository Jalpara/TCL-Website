import { getPayload } from 'payload';
import configPromise from './payload.config';

export const seed = async () => {
  const payload = await getPayload({ config: configPromise });

  payload.logger.info('Starting database seed...');

  // CLEANUP EXISTING DATA TO PREVENT UNIQUE CONSTRAINT ERRORS
  await payload.delete({ collection: 'metrics', where: { id: { exists: true } } });
  await payload.delete({ collection: 'faqs', where: { id: { exists: true } } });
  await payload.delete({ collection: 'events', where: { id: { exists: true } } });
  await payload.delete({ collection: 'stories', where: { id: { exists: true } } });
  await payload.delete({ collection: 'initiatives', where: { id: { exists: true } } });

  // ============================================
  // 1. INITIATIVES
  // ============================================
  const initiativesData = [
    {
      title: 'The Shared Plate',
      slug: 'the-shared-plate',
      shortDescription: 'Sharing food. Strengthening communities.',
      subtitle: 'Food Donation Drives',
      longDescription: 'Combating hunger by rescuing surplus food and distributing freshly cooked meals to underserved communities. We believe no one should go to bed hungry.',
      icon: 'Utensils',
      themeColor: 'orange',
      imageUrl: 'https://picsum.photos/seed/food1/600/400',
      challenge: 'Every day, tons of perfectly good food go to waste while millions face food insecurity. This disconnect between surplus and scarcity is a logistical and social challenge that demands a community-driven response.',
      activities: [
        { title: 'Food Rescue Drives', description: 'Partnering with restaurants and event organizers to collect surplus food daily.' },
        { title: 'Community Pantries', description: 'Setting up accessible food distribution points in underserved neighborhoods.' },
        { title: 'Awareness Workshops', description: 'Educating the community about food waste reduction and sustainable habits.' }
      ],
      methodology: [
        { stepNumber: '01', title: 'Need', description: 'Identifying areas and groups facing acute shortages.' },
        { stepNumber: '02', title: 'Connect', description: 'Linking resources from donors to our distribution hubs.' },
        { stepNumber: '03', title: 'Act', description: 'Mobilizing volunteers for rapid, efficient delivery.' },
        { stepNumber: '04', title: 'Impact', description: 'Sustained relief and stronger, resilient communities.' }
      ],
      impactNumbers: [
        { value: '50K+', label: 'Meals Served' },
        { value: '1,200+', label: 'Volunteers' },
        { value: '25 Tons', label: 'Food Rescued' }
      ]
    },
    {
      title: 'The Better Choice',
      slug: 'the-better-choice',
      shortDescription: 'Supporting healthier choices, stronger futures.',
      subtitle: 'Anti Addiction',
      longDescription: 'Providing awareness, counseling, and rehabilitation support to individuals struggling with addiction, helping them rebuild their lives and reintegrate into society.',
      icon: 'Shield',
      themeColor: 'purple',
      imageUrl: 'https://picsum.photos/seed/addict1/600/400',
      challenge: 'Addiction destroys families and communities, but recovery is possible with the right support system.',
      activities: [
        { title: 'Support Groups', description: 'Weekly confidential meetings for individuals on their recovery journey.' },
        { title: 'Counseling', description: 'Professional psychological support and rehabilitation guidance.' },
        { title: 'Awareness Camps', description: 'Educating youth about the dangers of substance abuse.' }
      ],
      methodology: [
        { stepNumber: '01', title: 'Identify', description: 'Reaching out to those who need help the most.' },
        { stepNumber: '02', title: 'Support', description: 'Providing a safe space and medical assistance.' },
        { stepNumber: '03', title: 'Rehab', description: 'Structured recovery and counseling programs.' },
        { stepNumber: '04', title: 'Thrive', description: 'Helping individuals reintegrate into society.' }
      ],
      impactNumbers: [
        { value: '5K+', label: 'Lives Changed' },
        { value: '200+', label: 'Support Groups' },
        { value: '15+', label: 'Rehab Centers' }
      ]
    },
    {
      title: 'The Common Ground',
      slug: 'the-common-ground',
      shortDescription: "This planet is our common ground, We're taking care of it",
      subtitle: 'Mother Earth',
      longDescription: 'Taking active steps towards environmental conservation through tree plantation drives, beach cleanups, and sustainability workshops to protect our planet for future generations.',
      icon: 'Leaf',
      themeColor: 'green',
      imageUrl: 'https://picsum.photos/seed/earth1/600/400',
      challenge: 'Climate change and environmental degradation are accelerating, threatening biodiversity and our future.',
      activities: [
        { title: 'Tree Plantations', description: 'Organizing massive tree planting events across the city.' },
        { title: 'Beach Cleanups', description: 'Weekly coastal cleanup drives to remove plastic waste.' },
        { title: 'Eco Workshops', description: 'Teaching sustainable living practices to school children.' }
      ],
      methodology: [
        { stepNumber: '01', title: 'Educate', description: 'Raising awareness about environmental issues.' },
        { stepNumber: '02', title: 'Act', description: 'Organizing community-driven conservation drives.' },
        { stepNumber: '03', title: 'Nurture', description: 'Ensuring the survival of planted trees.' },
        { stepNumber: '04', title: 'Protect', description: 'Advocating for better environmental policies.' }
      ],
      impactNumbers: [
        { value: '10K+', label: 'Trees Planted' },
        { value: '50+', label: 'Cleanup Drives' },
        { value: '5 Tons', label: 'Plastic Removed' }
      ]
    },
    {
      title: 'The Learning Circle',
      slug: 'the-learning-circle',
      shortDescription: 'Creating pathways through knowledge.',
      subtitle: 'Education & Literacy',
      longDescription: 'Empowering children and adults through foundational literacy programs, after-school mentoring, and digital education centers in remote areas.',
      icon: 'BookOpen',
      themeColor: 'blue',
      imageUrl: 'https://picsum.photos/seed/edu2/600/400',
      challenge: 'Millions of children lack access to quality education, trapping them in a cycle of poverty.',
      activities: [
        { title: 'After-School Programs', description: 'Tutoring and mentoring for underprivileged students.' },
        { title: 'Library Setup', description: 'Building community libraries in remote villages.' },
        { title: 'Digital Literacy', description: 'Teaching basic computer skills to young adults.' }
      ],
      methodology: [
        { stepNumber: '01', title: 'Assess', description: 'Identifying educational gaps in communities.' },
        { stepNumber: '02', title: 'Equip', description: 'Providing books, supplies, and digital tools.' },
        { stepNumber: '03', title: 'Teach', description: 'Deploying volunteer teachers and mentors.' },
        { stepNumber: '04', title: 'Empower', description: 'Enabling self-reliance through knowledge.' }
      ],
      impactNumbers: [
        { value: '2K+', label: 'Students Reached' },
        { value: '10+', label: 'Libraries Built' },
        { value: '500+', label: 'Mentors' }
      ]
    },
  ];

  const createdInitiatives = [];
  for (const init of initiativesData) {
    const created = await payload.create({
      collection: 'initiatives',
      data: init,
    });
    createdInitiatives.push(created);
  }

  // ============================================
  // 2. METRICS (Home Page)
  // ============================================
  const homeMetrics = [
    { label: 'Meals Shared', value: '18,450+', icon: 'Utensils', page: 'home' as const, order: 1 },
    { label: 'People Helped', value: '3,250+', icon: 'HeartHandshake', page: 'home' as const, order: 2 },
    { label: 'Volunteer Hours', value: '1,10,000+', icon: 'Handshake', page: 'home' as const, order: 3 },
    { label: 'Trees Planted', value: '2,150+', icon: 'Leaf', page: 'home' as const, order: 4 },
  ];

  for (const metric of homeMetrics) {
    await payload.create({ collection: 'metrics', data: metric });
  }

  // ============================================
  // 3. METRICS (Impact Page)
  // ============================================
  const impactMetrics = [
    { label: 'Meals Shared', value: '18,450+', icon: 'Apple', page: 'impact' as const, order: 1, color: 'text-orange-500' },
    { label: 'People Helped', value: '3,250+', icon: 'HeartHandshake', page: 'impact' as const, order: 2, color: 'text-purple-500' },
    { label: 'Volunteer Hours', value: '1,10,000+', icon: 'Handshake', page: 'impact' as const, order: 3, color: 'text-blue-500' },
    { label: 'Trees Planted', value: '2,150+', icon: 'TreePine', page: 'impact' as const, order: 4, color: 'text-green-500' },
  ];

  for (const metric of impactMetrics) {
    await payload.create({ collection: 'metrics', data: metric });
  }

  // ============================================
  // 4. STORIES
  // ============================================
  const storiesData = [
    {
      title: 'A warm meal, a brighter day',
      slug: 'warm-meal',
      summary: 'How a simple meal brought smiles to a community.',
      initiative: createdInitiatives[0].id,
      imageUrl: 'https://picsum.photos/seed/meal1/600/400',
    },
    {
      title: 'From silence to strength',
      slug: 'silence-to-strength',
      summary: 'A story of healing, hope and fighting addiction.',
      initiative: createdInitiatives[1].id,
      imageUrl: 'https://picsum.photos/seed/quiet1/600/400',
    },
    {
      title: 'Planting a greener future',
      slug: 'greener-future',
      summary: 'Students came together to revive their local forest patch.',
      initiative: createdInitiatives[2].id,
      imageUrl: 'https://picsum.photos/seed/earth1/600/400',
    },
    {
      title: 'Education changes everything',
      slug: 'education-changes',
      summary: 'Supporting a child today to build a better tomorrow.',
      initiative: createdInitiatives[3].id,
      imageUrl: 'https://picsum.photos/seed/edu1/600/400',
    },
    {
      title: 'Festival of giving',
      slug: 'festival-of-giving',
      summary: 'Sharing festive joy through massive food drives in the city.',
      initiative: createdInitiatives[0].id,
      imageUrl: 'https://picsum.photos/seed/meal2/600/400',
    },
    {
      title: 'A new library for the village',
      slug: 'new-library',
      summary: 'How 500 books transformed the weekends for rural children.',
      initiative: createdInitiatives[3].id,
      imageUrl: 'https://picsum.photos/seed/edu3/600/400',
    },
  ];

  for (const story of storiesData) {
    await payload.create({ collection: 'stories', data: story });
  }

  // ============================================
  // 5. EVENTS
  // ============================================
  const eventsData = [
    {
      title: 'Weekend Food Drive',
      slug: 'weekend-food-drive-1',
      startDate: new Date('2026-05-25T10:00:00Z').toISOString(),
      initiative: createdInitiatives[0].id,
      locationName: 'Navi Mumbai',
    },
    {
      title: 'Weekend Food Drive',
      slug: 'weekend-food-drive-2',
      startDate: new Date('2026-05-25T10:00:00Z').toISOString(),
      initiative: createdInitiatives[0].id,
      locationName: 'Navi Mumbai',
    },
    {
      title: 'Weekend Food Drive',
      slug: 'weekend-food-drive-3',
      startDate: new Date('2026-05-25T10:00:00Z').toISOString(),
      initiative: createdInitiatives[0].id,
      locationName: 'Navi Mumbai',
    },
    {
      title: 'Addiction Awareness',
      slug: 'addiction-awareness',
      startDate: new Date('2026-06-08T18:00:00Z').toISOString(),
      initiative: createdInitiatives[1].id,
      locationName: 'Navi Mumbai',
    },
    {
      title: 'Beach Cleanup Drive',
      slug: 'beach-cleanup',
      startDate: new Date('2026-06-15T07:00:00Z').toISOString(),
      initiative: createdInitiatives[2].id,
      locationName: 'Juhu Beach',
    },
    {
      title: 'Literacy Camp',
      slug: 'literacy-camp',
      startDate: new Date('2026-06-22T09:00:00Z').toISOString(),
      initiative: createdInitiatives[3].id,
      locationName: 'Nerul, Navi Mumbai',
    },
  ];

  for (const event of eventsData) {
    await payload.create({ collection: 'events', data: event as any });
  }

  // ============================================
  // 6. FAQs
  // ============================================
  const faqsData = [
    {
      question: 'How can I volunteer?',
      answer: 'You can volunteer by navigating to the Become A Link page and filling out our simple application form. We will match your skills with our current initiatives.',
      order: 1,
    },
    {
      question: 'Where do you operate?',
      answer: 'We currently operate across Navi Mumbai, with various events regularly held in different localities. Our environmental and education initiatives span the entire Mumbai Metropolitan Region.',
      order: 2,
    },
    {
      question: 'How are donations used?',
      answer: 'Every donation goes directly to the initiatives. We maintain full transparency and publish regular impact reports detailing how funds are allocated across our four key pillars.',
      order: 3,
    },
    {
      question: 'Can organizations partner with you?',
      answer: 'Absolutely! We welcome corporate partners, NGOs, and community organizations. Visit our Get Involved page and select the Partner tab to submit a proposal.',
      order: 4,
    },
  ];

  for (const faq of faqsData) {
    await payload.create({ collection: 'faqs', data: faq });
  }

  // ============================================
  // 7. SITE CONFIG GLOBAL
  // ============================================
  await payload.updateGlobal({
    slug: 'site-config',
    data: {
      organizationName: 'The Connecting Link',
      tagline: 'Connecting people. Creating impact.',
      footerSubtext: 'Building a better tomorrow, together.',
      contactEmail: 'info@theconnectinglink.org',
      contactPhone: '+91 98765 43210',
      copyrightText: '© 2026 The Connecting Link. All rights reserved.',
      newsletterText: 'Subscribe to our newsletter and never miss an update.',
      socialLinks: {
        instagram: '#',
        facebook: '#',
        linkedin: '#',
        youtube: '#',
      },
      quickLinks: [
        { label: 'About Us', url: '/about' },
        { label: 'Initiatives', url: '/initiatives' },
        { label: 'Impact', url: '/impact' },
        { label: 'Events', url: '/events' },
        { label: 'Get Involved', url: '/get-involved' },
      ],
      resourceLinks: [
        { label: 'Stories', url: '/stories' },
        { label: 'Become A Link', url: '/get-involved' },
        { label: 'About Us', url: '/about' },
      ],
    },
  });

  // ============================================
  // 8. HOME PAGE GLOBAL
  // ============================================
  await payload.updateGlobal({
    slug: 'home-page',
    data: {
      hero: {
        headline: 'Connecting People.\nCreating Impact.',
        subheadline: 'We connect individuals, communities, volunteers, organisations and changemakers to create meaningful social impact.',
        primaryCta: { label: 'Explore Initiatives', url: '/initiatives' },
        secondaryCta: { label: 'Become a Connecting Link', url: '/get-involved' },
        bottomText: 'Join a movement that believes no one is alone in doing good.',
      },
      whatIs: {
        title: 'What is The Connecting Link?',
        description: "We don't just run initiatives. We connect hearts, resources and opportunities to create lasting change.",
        linkText: 'Know more about us',
        pillars: [
          { title: 'People in Need', description: 'Every day, someone needs support.', icon: 'Leaf', bgColor: 'bg-orange-50', iconColor: 'text-orange-500', borderColor: 'border-orange-100' },
          { title: 'The Connecting Link', description: 'We bridge the gap and bring people together.', icon: 'Handshake', bgColor: 'bg-indigo-50', iconColor: 'text-indigo-500', borderColor: 'border-indigo-100' },
          { title: 'People Who Can Help', description: 'Volunteers, donors, partners step in.', icon: 'Users', bgColor: 'bg-green-50', iconColor: 'text-green-500', borderColor: 'border-green-100' },
        ],
      },
      howItWorks: {
        title: 'How It Works',
        steps: [
          { step: '01', title: 'A Need Exists', description: 'A community or individual faces a challenge.', icon: 'Users' },
          { step: '02', title: 'We Connect', description: 'We find the right people and resources.', icon: 'Search' },
          { step: '03', title: 'Together We Act', description: 'Volunteers and partners come together to help.', icon: 'Handshake' },
          { step: '04', title: 'Lives Improve', description: 'Real impact. Stronger communities.', icon: 'Heart' },
        ],
      },
      initiativesSectionTitle: 'Our Initiatives',
      impactSection: {
        title: 'Our Impact So Far',
        ctaLabel: 'View detailed report',
        ctaUrl: '/impact',
      },
      storiesSectionTitle: 'Stories That Inspire',
      eventsSectionTitle: 'Upcoming Events',
      faqSection: {
        title: 'Frequently Asked Questions',
        subtitle: 'Everything you need to know about getting involved.',
      },
      ctaSection: {
        headline: 'You can be the link.',
        subtext: 'Every act of kindness creates a connection that changes lives.',
        card1: {
          title: 'I Want To Help',
          subtitle: 'Volunteer your time',
          url: '/get-involved',
        },
        card2: {
          title: 'I Want To Partner',
          subtitle: "Let's collaborate",
          url: '/get-involved',
        },
      },
    },
  });

  // ============================================
  // 9. ABOUT PAGE GLOBAL
  // ============================================
  await payload.updateGlobal({
    slug: 'about-page',
    data: {
      pageTitle: 'About Us',
      pageSubtitle: 'We are The Connecting Link — bridging the gap between those who need help and those who can provide it.',
      heroImageUrl: 'https://picsum.photos/seed/ngoabout/1200/800',
      mission: {
        title: 'Our Mission',
        text: 'To create an ecosystem of compassion and action by empowering individuals and organizations to collaborate effectively, ensuring that essential resources, support, and opportunities reach the most vulnerable sections of society.',
      },
      vision: {
        title: 'Our Vision',
        text: 'We envision a world where no one stands alone in times of need. A society built on the strong foundations of empathy, sustainability, and collective action, creating a better tomorrow for all living beings and our planet.',
      },
      story: {
        title: 'Our Story',
        paragraphs: [
          { text: 'The Connecting Link started with a simple observation: there are millions of people wanting to do good, and millions who desperately need that goodness. The problem was never a lack of resources or empathy, but a lack of connection.' },
          { text: 'In 2026, a small group of volunteers decided to act as that bridge. Today, we are a growing movement of individuals, local communities, and corporate partners working seamlessly across various initiatives—from fighting hunger to saving our environment. We believe that when the right links are formed, miracles happen.' },
        ],
      },
      teamSection: {
        title: 'People Behind Connecting Link',
        subtitle: 'Meet the dedicated individuals and organizations working together to create a lasting impact.',
        tabs: [
          { tabId: 'executive', tabLabel: 'Executive Members' },
          { tabId: 'board', tabLabel: 'Board Members' },
          { tabId: 'advisors', tabLabel: 'Advisors' },
          { tabId: 'partners', tabLabel: 'Partners' },
          { tabId: 'volunteers', tabLabel: 'Volunteers' },
        ],
        members: [
          // Executive
          { name: 'Sarah Jenkins', role: 'Executive Director', imageUrl: 'https://picsum.photos/seed/sarah/400/400', tabId: 'executive' },
          { name: 'David Chen', role: 'Operations Head', imageUrl: 'https://picsum.photos/seed/david/400/400', tabId: 'executive' },
          { name: 'Maya Patel', role: 'Program Director', imageUrl: 'https://picsum.photos/seed/maya/400/400', tabId: 'executive' },
          { name: 'James Wilson', role: 'Finance Director', imageUrl: 'https://picsum.photos/seed/james/400/400', tabId: 'executive' },
          // Board
          { name: 'Robert Kiyosaki', role: 'Board Chair', imageUrl: 'https://picsum.photos/seed/robert/400/400', tabId: 'board' },
          { name: 'Elena Rodriguez', role: 'Vice Chair', imageUrl: 'https://picsum.photos/seed/elena/400/400', tabId: 'board' },
          { name: 'Michael Chang', role: 'Board Member', imageUrl: 'https://picsum.photos/seed/michael/400/400', tabId: 'board' },
          // Advisors
          { name: 'Dr. Anita Desai', role: 'Public Health Advisor', imageUrl: 'https://picsum.photos/seed/anita/400/400', tabId: 'advisors' },
          { name: 'John Smith', role: 'Legal Advisor', imageUrl: 'https://picsum.photos/seed/john/400/400', tabId: 'advisors' },
          // Partners
          { name: 'Global Tech Corp', role: 'Technology Partner', imageUrl: 'https://picsum.photos/seed/tech/400/400', tabId: 'partners' },
          { name: 'Green Earth Foundation', role: 'Sustainability Partner', imageUrl: 'https://picsum.photos/seed/green/400/400', tabId: 'partners' },
          { name: 'Community Health Net', role: 'Healthcare Partner', imageUrl: 'https://picsum.photos/seed/health/400/400', tabId: 'partners' },
          { name: 'EduCare International', role: 'Education Partner', imageUrl: 'https://picsum.photos/seed/edu/400/400', tabId: 'partners' },
          // Volunteers
          { name: 'Alex Johnson', role: 'Lead Volunteer', imageUrl: 'https://picsum.photos/seed/alex/400/400', tabId: 'volunteers' },
          { name: 'Sam Taylor', role: 'Community Organizer', imageUrl: 'https://picsum.photos/seed/sam/400/400', tabId: 'volunteers' },
          { name: 'Chris Lee', role: 'Event Coordinator', imageUrl: 'https://picsum.photos/seed/chris/400/400', tabId: 'volunteers' },
          { name: 'Jordan Kim', role: 'Volunteer', imageUrl: 'https://picsum.photos/seed/jordan/400/400', tabId: 'volunteers' },
        ],
      },
    },
  });

  // ============================================
  // 10. PRIVACY POLICY GLOBAL
  // ============================================
  await payload.updateGlobal({
    slug: 'privacy-policy',
    data: {
      title: 'Privacy Policy',
      lastUpdated: new Date().toLocaleDateString(),
      sections: [
        {
          heading: '1. Introduction',
          content: 'Welcome to The Connecting Link. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.',
        },
        {
          heading: '2. The Data We Collect About You',
          content: 'Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you, including:',
          bulletPoints: [
            { text: 'Identity Data includes first name, last name, username or similar identifier.' },
            { text: 'Contact Data includes email address and telephone numbers.' },
            { text: 'Usage Data includes information about how you use our website, products and services.' },
          ],
        },
        {
          heading: '3. How We Use Your Personal Data',
          content: 'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:',
          bulletPoints: [
            { text: 'To process your volunteer or partner application.' },
            { text: 'To manage our relationship with you.' },
            { text: 'To improve our website, services, marketing, and user experiences.' },
          ],
        },
        {
          heading: '4. Data Security',
          content: 'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.',
        },
      ],
    },
  });

  // ============================================
  // 11. TERMS & CONDITIONS GLOBAL
  // ============================================
  await payload.updateGlobal({
    slug: 'terms-conditions',
    data: {
      title: 'Terms & Conditions',
      lastUpdated: new Date().toLocaleDateString(),
      sections: [
        {
          heading: '1. Agreement to Terms',
          content: 'By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.',
        },
        {
          heading: '2. Volunteer and Partner Conduct',
          content: 'As a volunteer or partner of The Connecting Link, you agree to conduct yourself in a manner that is respectful, ethical, and aligned with our core values. Any form of harassment, discrimination, or harmful behavior will result in immediate termination of your involvement with our initiatives.',
        },
        {
          heading: '3. Intellectual Property',
          content: 'The website and its original content, features, and functionality are owned by The Connecting Link and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.',
        },
        {
          heading: '4. Limitation of Liability',
          content: 'In no event shall The Connecting Link, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website.',
        },
        {
          heading: '5. Changes to Terms',
          content: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days notice prior to any new terms taking effect.',
        },
      ],
    },
  });

  payload.logger.info('Seed complete!');
};
