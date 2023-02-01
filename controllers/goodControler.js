import goodModel from '../modules/good.js';
import { validationResult } from 'express-validator';

export const getAllGoods = async (req, res) => {
  try {
    const goods = await goodModel.find();

    res.status(200).json(goods);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Не вдалось загрузити весь товар' });
  }
};

export const getGood = async (req, res) => {
  try {
    const good = await goodModel.find({ _id: req.params.id });

    res.status(200).json(good);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Не вдалось загрузити товар' });
  }
};

export const createGood = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  try {
    const { name, price, description } = req.body;
    const good = await goodModel.create({
      name,
      price,
      description,
      image: `http://localhost:4000/assets/${req.file.filename}`,
    });

    res.status(201).json(good);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Не вдалось створити товар' });
  }
};
