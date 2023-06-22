import { Task } from '../models/profile.js'

async function index(req, res) {
  try {
    const tasks = await Task.find({})
    res.json(tasks)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export { index, addPhoto }
