import mongoose from 'mongoose'

const Schema = mongoose.Schema

const taskSchema = new Schema({
  taskName: String,
  user: { type: Schema.Types.ObjectId, ref: 'Profile' },
  taskDescription : String,
  timeToComplete : Number,
  unitOfTime : String,
},{
  timestamps: true,
})

const Task = mongoose.model('Task', taskSchema)

export { Task }
