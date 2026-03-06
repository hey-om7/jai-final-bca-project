const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Product = require('./models/Product');
const User = require('./models/User');
const Order = require('./models/Order');

// Load env vars
dotenv.config();

connectDB();

const products = [
    // 100% Cotton Products (Category 1)
    {
        _id: 101,
        categoryId: 1,
        title: "Ruby Cotton Towel",
        price: 1999,
        description: "Crafted from premium 100% cotton, this towel delivers unmatched softness, high absorbency, and long-lasting durability.",
        image: '/ruby_cotton_towel_1770901499695.png',
        category: '100% Cotton'
    },
    {
        _id: 102,
        categoryId: 1,
        title: "Emerald Cotton Towel",
        price: 1899,
        description: "Experience the perfect blend of softness and durability with our 100% cotton towel, designed to elevate your comfort and absorbency.",
        image: '/emerald_cotton_towel_1770901516592.png',
        category: '100% Cotton'

    },
    {
        _id: 103,
        categoryId: 1,
        title: "King Cotton Towel",
        price: 1999,
        description: "Indulge in the ultimate luxury with our 100% cotton towel, offering unparalleled softness, superior absorbency, and long-lasting durability for a truly indulgent experience.",
        image: '/category_cotton_1770900530532.png',
        category: '100% Cotton'
    },

    // Filament Products (Category 2)
    {
        _id: 201,
        categoryId: 2,
        title: "Obsidian Filament",
        price: 899,
        description: "A luxurious towel with a soft texture and high absorbency.",
        image: '/category_filament_1770900548571.png',
        category: 'Filament'
    },
    {
        _id: 202,
        categoryId: 2,
        title: "Slate Filament",
        price: 799,
        description: "A premium towel with a smooth texture and excellent absorbency.",
        image: '/category_filament_1770900548571.png',
        category: 'Filament'
    },
    {
        _id: 203,
        categoryId: 2,
        title: "Coal Filament",
        price: 999,
        description: "A premium towel with a luxurious feel and superior absorbency.",
        image: '/category_filament_1770900548571.png',
        category: 'Filament'
    },

    // Mixed Cotton Products (Category 3)
    {
        _id: 301,
        categoryId: 3,
        title: "Texture Blend Towel",
        price: 999,
        description: "A premium towel with a soft texture and high absorbency.",
        image: '/category_mixed_1770900596346.png',
        category: 'Mixed Cotton'
    },
    {
        _id: 302,
        categoryId: 3,
        title: "Waffle Weave Towel",
        price: 899,
        description: "A luxurious towel with a smooth texture and excellent absorbency.",
        image: '/category_mixed_1770900596346.png',
        category: 'Mixed Cotton'
    },
    {
        _id: 303,
        categoryId: 3,
        title: "Herringbone Towel",
        price: 1499,
        description: "A premium towel with a luxurious feel and superior absorbency.",
        image: '/category_mixed_1770900596346.png',
        category: 'Mixed Cotton'
    },

    // Carbon Towels Products (Category 4)
    {
        _id: 401,
        categoryId: 4,
        title: "Millionaire Towel",
        price: 1899,
        description: "Experience the perfect blend of softness and durability with our 100% cotton towel, designed to elevate your comfort and absorbency.",
        image: '/category_carbon_1770900631300.png',
        category: 'Carbon Towels'
    },
    {
        _id: 402,
        categoryId: 4,
        title: "Billionaire Towel",
        price: 1999,
        description: "A luxurious towel with a soft texture and high absorbency.",
        image: '/category_carbon_1770900631300.png',
        category: 'Carbon Towels'
    },
    {
        _id: 403,
        categoryId: 4,
        title: "Trillionaire Towel",
        price: 2999,
        description: "A premium towel with a luxurious feel and superior absorbency.",
        image: '/category_carbon_1770900631300.png',
        category: 'Carbon Towels'
    }
];

const importData = async () => {
    try {
        try { await Product.collection.drop(); } catch (e) { }
        await User.deleteMany();
        await Order.deleteMany();

        await User.create({
            name: 'Admin User',
            email: 'admin@example.com',
            password: '123devpassword', // This will be hashed by pre-save hook
            isAdmin: true
        });

        await Product.insertMany(products);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        try { await Product.collection.drop(); } catch (e) { }
        await User.deleteMany();
        await Order.deleteMany();

        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
