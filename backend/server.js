import express from "express";
import cors from "cors";
import './config/config.js'
import { save, load, reset } from "./util/fileHandler.js"



const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors('/*'))
app.use('/db.json', express.static('/db.json'))
app.use(express.json())


app.get('/api/v1/capacity', (req, res) => {
  load()
  .then(data => {
    res.json(data)
  })
  .catch(err => console.log('Get Error', err))
    
})

app.post('/api/v1/prisoners', (req, res) => {
  const data = req.body
  console.log(data)
  save(data)
  .then(newData => {
    console.log(newData)
    res.json(newData)
  })
  .catch(err => console.log('Post Error: ' + err))
  
})

app.post('/api/v1/reset', (req, res) => {
  const data = req.body
  reset(data)
  .then(newData => {
    res.json(newData)
  })
  .catch(err => console.log('reset error' + err))
})

app.listen(PORT, () => console.log('listening on port ' + PORT))