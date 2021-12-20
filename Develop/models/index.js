// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: 'product',
    key: 'category_id'
  }
});

// Categories have many Products

Category.belongsToMany(Product, {
  through: {
    model: 'product',
    key: 'category_id'
  }
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: {
    model: 'product_tag',
    key: 'product_id'
  }
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: 'product_tag',
    key: 'tag_id'
  }
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
