import { seed } from '../../../seed';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await seed();
    return NextResponse.json({ success: true, message: 'Seed successful' });
  } catch (error: any) {
    console.error('Seed error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
