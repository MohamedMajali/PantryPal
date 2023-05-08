const mongoose = require('mongoose');
const Grocery = require('./models/grocerySchema');
require('dotenv').config()

const data = [
  {
    name: "Bananas",
    category: "Fruits",
    quantity: 5,
    price: 2.99,
    brand: "Chiquita",
    image: "https://www.chiquita.com/wp-content/uploads/2019/12/Chiquita_Banana_Class_Extra_Yellow.jpg",
  },
  {
    name: "Milk",
    category: "Dairy",
    quantity: 1,
    price: 1.99,
    brand: "Organic Valley",
    image: "https://cdn.shopify.com/s/files/1/0074/6907/2466/products/IMG_3255_720x@2x.jpg?v=1571721366",
  },
  {
    name: "Eggs",
    category: "Dairy",
    quantity: 12,
    price: 3.99,
    brand: "Eggland's Best",
    image: "https://i5.walmartimages.com/asr/ecda41cc-6ab2-4cac-bd2f-1d14c41c12c1.77393eca8aa5a91a4c6f8da326ce3541.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  },
  {
    name: "Bread",
    category: "Bakery",
    quantity: 1,
    price: 2.49,
    brand: "Wonder Bread",
    image: "https://assets.wakefern.com/is/image/wakefern/7225001137-008?$Mi9Product_detail$",
  },
  {
    name: "Chicken",
    category: "Meat",
    quantity: 2,
    price: 7.99,
    brand: "Perdue",
    image: "https://images.albertsons-media.com/is/image/ABS/188300166-ECOM?$ng-ecom-pdp-desktop$&defaultImage=Not_Available",
  },
];

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

// Seed the database
Grocery.insertMany(data)
  .then(() => console.log('Data seeded successfully'))
  .catch((err) => console.error(err))
  .finally(() => mongoose.connection.close());
