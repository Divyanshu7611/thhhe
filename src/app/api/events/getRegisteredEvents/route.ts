import { ConnectMongoDB, DisconnectMongoDB } from '@/utils/dbConnect'
import { NextResponse } from 'next/server'
import User from '@/models/user/user'
import TharUser from '@/models/tharUser/TharUser'
import TeamRegistration from '@/models/events/teamEventModel'

export async function POST(request: Request) {
  const { id, tharID } = await request.json()

  try {
    await ConnectMongoDB()
    const user = await User.findOne({ _id: id })

    if (user) {
      const tharUser = await TharUser.findOne({ tharID: tharID })

      if (tharUser) {
        const registeredEvents = tharUser.registeredEvents
        if (registeredEvents) {
          const events = await TeamRegistration.find({ teamMembersTharID: { $in: [tharID] } })

          return NextResponse.json(
            {
              data: events,
            },
            {
              status: 202,
            },
          )
        }
      }
      await DisconnectMongoDB()
    } else {
      return NextResponse.json(
        {
          message: 'Yaha bhi Gali sunega kya, BKL',
        },
        {
          status: 403,
        },
      )
    }
  } catch (error) {
    return NextResponse.error()
  }
}
