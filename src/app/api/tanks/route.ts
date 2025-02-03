import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET() {
  try {
    const tanks = await prisma.tanks.findMany({
      include: {
        tank_extras: true,
        tank_variations: true
      }
    })
    return NextResponse.json(tanks)
  } catch (error) {
    console.error('Error fetching tanks:', error)
    return NextResponse.json({ error: 'Failed to fetch tanks' }, { status: 500 })
  }
}