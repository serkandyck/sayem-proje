const {check, validationResult} = require('express-validator');

exports.validateRequestFind = [
  check('uuid')
    .not()
    .isEmpty()
    .withMessage('Talep numarası boş bırakılamaz!')
    .bail()
    .isLength({min: 3})
    .withMessage('Talep numarası en az 3 karakter olmalıdır!')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];