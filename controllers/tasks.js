import { Task } from '../models/task.js'

async function index(req, res) {
  try {
    const tasks = await Task.find({'user' : req.user.profile}).populate("user")
    res.json(tasks)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function create(req, res){
  try {
    req.body.user = req.user.profile
    const task = await Task.create(req.body)
    res.json(task)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export { 
  index,
  create
}
