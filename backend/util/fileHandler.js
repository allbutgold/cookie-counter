import fs from 'fs'

const DB_PATH = './db.json'

export function save(item) {
  return new Promise((resolve, reject) => {
    load()
    .then(data => {
      data.prisoners++
      console.log(data)
      fs.writeFile(DB_PATH, JSON.stringify(data), (err) => {
        if (err) reject(err)
        else {
          resolve(data)
        }
    })
  })
})
}

export function reset() {
  return new Promise((resolve, reject) => {
    const data = { prisoners: 0}
    fs.writeFile(DB_PATH, JSON.stringify(data), (err) => {
      if (err) reject(err)
      else {
        resolve(data)
      }
    })
})
}

export function load() {
  return new Promise((resolve, reject) => {
    fs.readFile(DB_PATH, 'utf8', (err, data) => {
      if (err) reject(err)
      else resolve(JSON.parse(data))
    })
  })
}