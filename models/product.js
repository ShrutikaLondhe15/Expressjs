const db = require('../util/database');

const Cart = require('./cart')

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
  }

  save() {
   return db.execute(
    'INSERT INTO products (title,price,imageUrl, description) VALUES (?,?,?,?)',
    [this.title,this.price,this.imageUrl,this.description]
   );
  }

  static deleteById(id) {
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id, cb) {
  return db.execute('SELECT * FROM products WHERE products.id = ?',
  [id]);
  }
};
