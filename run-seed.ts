import { seed } from './seed';

async function run() {
  console.log('Running seed script...');
  try {
    await seed();
    console.log('Seed completed successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error);
    process.exit(1);
  }
}

run();
