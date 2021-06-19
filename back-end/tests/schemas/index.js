const Joi = require('joi');

const products = Joi.array().items(Joi.object({
  'id': Joi.number().required(),
  'price': Joi.number().required(),
  'urlImage': Joi.string(),
  'name': Joi.string().required(),
}));

const clientSaleDetail = Joi.object({
  'id': Joi.number().required(),
  'userId': Joi.number().required(),
  'totalPrice': Joi.string().required(),
  'status': Joi.string().required(),
  'deliveryNumber': Joi.number().required(),
  'deliveryAddress': Joi.string().required(),
  'createdAt': Joi.date().required(),
  'updatedAt': Joi.date().required(),
  'products': Joi.array().items(Joi.object({
    'id': Joi.number().required(),
    'urlImage': Joi.string(),
    'name': Joi.string().required(),
    'price': Joi.string().required(),
    'sale': Joi.object({
      'quantity': Joi.number().required(),
    }).required(),
  })).required(),
});

const adminSaleDetail = Joi.object({
  'id': Joi.number().required(),
  'userId': Joi.number().required(),
  'totalPrice': Joi.string().required(),
  'status': Joi.string().required(),
  'deliveryNumber': Joi.number().required(),
  'deliveryAddress': Joi.string().required(),
  'createdAt': Joi.date().required(),
  'updatedAt': Joi.date().required(),
  'user': Joi.object({
     'name': Joi.string().required(),
    }).required(),
  'products': Joi.array().items(Joi.object({
    'id': Joi.number().required(),
    'urlImage': Joi.string(),
    'name': Joi.string().required(),
    'price': Joi.string().required(),
    'sale': Joi.object({
      'quantity': Joi.number().required(),
    }).required(),
  })).required(),
});

const adminSales = Joi.array().items(Joi.object({
  'id': Joi.number().required(),
  'userId': Joi.number().required(),
  'totalPrice': Joi.string().required(),
  'status': Joi.string().required(),
  'deliveryNumber': Joi.number().required(),
  'deliveryAddress': Joi.string().required(),
  'createdAt': Joi.date().required(),
  'updatedAt': Joi.date().required(),
  }));

module.exports = {
  products,
  clientSaleDetail,
  adminSaleDetail,
  adminSales,
};