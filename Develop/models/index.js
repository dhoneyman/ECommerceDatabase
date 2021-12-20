// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: 'Product',
    key: 'category_id'
  }
});

// Categories have many Products

Category.belongsToMany(Product, {
  through: {
    model: 'Product',
    key: 'category_id'
  }
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: {
    model: 'ProductTag',
    key: 'product_id'
  }
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: 'ProductTag',
    key: 'tag_id'
  }
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
