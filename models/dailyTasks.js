import mongoose from 'mongoose'

const Schema = mongoose.Schema

const dailyTasksSchema = new Schema({
  dailyTasks : [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  dailyDescription: String,
  numCompleted : Number,
})

const DailyTasks = mongoose.model('DailyTasks', profileSchema)

export { Profile }
