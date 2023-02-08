import { body } from 'express-validator';

export const goodsValidator = [
  body('name', 'Введіть імя').isLength({ min: 3 }).isString(),
  body('price', 'Введіть ціну').isString().isLength({ min: 1 }),
  body('description', 'Введіть опис товару')
    .optional()
    .isString()
    .isLength({ min: 10 }),
  body('image', 'Неправильна силка на зображення').optional().isString(),
];
