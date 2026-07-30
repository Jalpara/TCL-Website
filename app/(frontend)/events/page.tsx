import React from 'react';
import Link from 'next/link';
import { CalendarIcon, MapPin, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { getPayload } from 'payload';
import configPromise from '@/payload.config';
import EventsClient from './EventsClient';

export default async function EventsPage() {
  const payload = await getPayload({ config: configPromise });
  const { docs: fetchedEvents } = await payload.find({ collection: 'events' });

  const events = fetchedEvents.map((event: any) => {
    const d = new Date(event.startDate);
    return {
      id: event.id,
      date: d.toISOString(),
      title: event.title,
      loc: event.location?.name || event.locationName || 'Location TBD',
      time: d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      slug: event.slug,
    };
  });

  return <EventsClient events={events} />;
}
