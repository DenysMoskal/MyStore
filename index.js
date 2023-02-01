import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import {
  getAllGoods,
  createGood,
  getGood,
} from './controllers/goodControler.js';
import { goodsValidator } from './validation.js';

const app = express();
const port = 4000;

const storage = multer.diskStorage({
  destination: './assets/',
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use('/assets', express.static('assets'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('work');
});

app.get('/goods', getAllGoods);
app.get('/goods/:id', getGood);
app.post('/goods', upload.single('image'), goodsValidator, createGood);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`app listen ${port}`);
});

mongoose.set('strictQuery', true);

mongoose
  .connect(
    'mongodb+srv://admin:1234@cluster0.pf8tznn.mongodb.net/blog?retryWrites=true&w=majority',
  )
  .then(() => console.log(`Server ok`))
  .catch((error) => console.log('Server error', error));
