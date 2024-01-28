const express = require('express');
const multer = require('multer')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Path = require('path')
const imageModel = require('./module/image')

const app = express()
const PORT = 8080;
//-----------------------------medialware----------------------------------
app.use(express.json())
app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json())

//-------------------------------database----------------------------------
try {
  mongoose.connect('mongodb://127.0.0.1:27017/instagramClone')
  console.log('mongodb connected successfully');
} catch (error) {
  console.log(`mongoose connect error: ${error}`);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/Images')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + Path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage })

// -----------------------------upload image-----------------------------

app.post('/upload', upload.single('file'), async (req, res) => {
  console.log(req.file);
  console.log(req.body.tital);
  await imageModel.create({
    image: req.file.filename,
    tital: req.body.tital,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

// -----------------------------get image from display------------------------------
app.get('/getImage', async (req, res) => {
  await imageModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})


//  -----------------------------delete----------------------------------------------
app.delete('/delete/:id', async (req, res) => {
  const { id } = req.params
  console.log(req.body);
  await imageModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err))

})

// -----------------------------------User Profile SetUp------------------------------------- 



// -----------------------------------Server------------------------------------- 
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT)
})