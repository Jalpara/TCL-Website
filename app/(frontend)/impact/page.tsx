import { getPayload } from 'payload';
import configPromise from '@/payload.config';
import ImpactClient from './ImpactClient';

export default async function ImpactPage() {
  const payload = await getPayload({ config: configPromise });
  const { docs: fetchedMetrics } = await payload.find({
    collection: 'metrics',
    where: { page: { equals: 'impact' } },
    sort: 'order',
  });

  const metrics = fetchedMetrics.map((m: any) => ({
    value: m.value,
    label: m.label,
    icon: m.icon,
    color: m.color,
  }));

  return <ImpactClient metrics={metrics} />;
}
