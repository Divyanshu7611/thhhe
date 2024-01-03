import User from '@/models/tharUser/TharUser'
import { connect } from 'http2'
import { ConnectMongoDB, DisconnectMongoDB } from '@/utils/dbConnect'

export async function GET(req, res) {
  const { referralCode } = req.query
  try {
    await ConnectMongoDB()
    const users = await User.find({ referralCode: referralCode })

    res.status(200).json(users)
    await DisconnectMongoDB()
  } catch (error) {
    console.error('Error Fetching Users:', error)
    res.status(500).json({
      success: false,
      message: 'Internal Error',
      error: 'An error Occurred',
    })
  }
}
