import mongoose from 'mongoose'

const Schema = mongoose.Schema

const taskSchema = new Schema({
  taskName: String,
  taskDescription : String,
  timeToComplete : Number,
  date : Date,
},{
  timestamps: true,
})

const Task = mongoose.model('Task', profileSchema)

export { Profile }
