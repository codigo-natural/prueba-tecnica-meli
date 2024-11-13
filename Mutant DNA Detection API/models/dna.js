import mongoose from 'mongoose'

const dnaSchema = new mongoose.Schema({
  sequence: {
    type: [String],
    required: true,
  },
  isMutant: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('DNA', dnaSchema)
// const DNA = mongoose.model('DNA', dnaSchema)
// export default DNA
