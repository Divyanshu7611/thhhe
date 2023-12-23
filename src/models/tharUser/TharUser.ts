import mongoose from 'mongoose'

const tharUserSchema = new mongoose.Schema({
  tharID: String,
  name: String,
  image: String,
  email: String,
  gender: String,
  age: String,
  phone: String,
  collegeName: String,
  address: String,
  city: String,
  state: String,
  stream: String,
  yearOfStudy: String,
  graduationYear: String,

  referralCode: String,
})

const TharUser = mongoose.models.tharuser || mongoose.model('tharuser', tharUserSchema)
export default TharUser
