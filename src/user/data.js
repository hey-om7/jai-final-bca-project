import one from "./one.jpeg";
import two from "./two.jpeg";

export const categories = [
    {
        id: 1,
        title: '100% Cotton',
        image: '/category_cotton_1770900530532.png',
        description: 'Experience the pure softness of 100% organic cotton.'
    },
    {
        id: 2,
        title: 'Filament',
        image: '/category_filament_1770900548571.png',
        description: 'Advanced technology for superior absorbency and quick drying.'
    },
    {
        id: 3,
        title: 'Mixed Cotton',
        image: '/category_mixed_1770900596346.png',
        description: 'The perfect blend of durability and comfort.'
    },
    {
        id: 4,
        title: 'Carbon Towels',
        image: '/category_carbon_1770900631300.png',
        description: 'Infused with carbon for antibacterial properties and freshness.'
    }
];

export const products = [
    // 100% Cotton Products (Category 1)
    {
        id: 101,
        categoryId: 1,
        title: "Ruby Cotton Towel",
        price: 1999,
        description: "Crafted from premium 100% cotton, this towel delivers unmatched softness, high absorbency, and long-lasting durability.",
        image: '/ruby_cotton_towel_1770901499695.png'
    },
    {
        id: 102,
        categoryId: 1,
        title: "Emerald Cotton Towel",
        price: 1899,
        description: "Experience the perfect blend of softness and durability with our 100% cotton towel, designed to elevate your comfort and absorbency.",
        image: '/emerald_cotton_towel_1770901516592.png'
    },
    {
        id: 103,
        categoryId: 1,
        title: "King Cotton Towel",
        price: 1999,
        description: "Indulge in the ultimate luxury with our 100% cotton towel, offering unparalleled softness, superior absorbency, and long-lasting durability for a truly indulgent experience.",
        image: '/category_cotton_1770900530532.png'
    },

    // Filament Products (Category 2)
    {
        id: 201,
        categoryId: 2,
        title: "Obsidian Filament",
        price: 899,
        description: "A luxurious towel with a soft texture and high absorbency.",
        image: '/category_filament_1770900548571.png'
    },
    {
        id: 202,
        categoryId: 2,
        title: "Slate Filament",
        price: 799,
        description: "A premium towel with a smooth texture and excellent absorbency.",
        image: '/category_filament_1770900548571.png'
    },
    {
        id: 203,
        categoryId: 2,
        title: "Coal Filament",
        price: 999,
        description: "A premium towel with a luxurious feel and superior absorbency.",
        image: '/category_filament_1770900548571.png'
    },

    // Mixed Cotton Products (Category 3)
    {
        id: 301,
        categoryId: 3,
        title: "Texture Blend Towel",
        price: 999,
        description: "A premium towel with a soft texture and high absorbency.",
        image: '/category_mixed_1770900596346.png'
    },
    {
        id: 302,
        categoryId: 3,
        title: "Waffle Weave Towel",
        price: 899,
        description: "A luxurious towel with a smooth texture and excellent absorbency.",
        image: '/category_mixed_1770900596346.png'
    },
    {
        id: 303,
        categoryId: 3,
        title: "Herringbone Towel",
        price: 1499,
        description: "A premium towel with a luxurious feel and superior absorbency.",
        image: '/category_mixed_1770900596346.png'
    },

    // Carbon Towels Products (Category 4)
    {
        id: 401,
        categoryId: 4,
        title: "Millionaire Towel",
        price: 1899,
        description: "Experience the perfect blend of softness and durability with our 100% cotton towel, designed to elevate your comfort and absorbency.",
        image: '/category_carbon_1770900631300.png'
    },
    {
        id: 402,
        categoryId: 4,
        title: "Billionaire Towel",
        price: 1999,
        description: "A luxurious towel with a soft texture and high absorbency.",
        image: '/category_carbon_1770900631300.png'
    },
    {
        id: 403,
        categoryId: 4,
        title: "Trillionaire Towel",
        price: 2999,
        description: "A premium towel with a luxurious feel and superior absorbency.",
        image: '/category_carbon_1770900631300.png'
    }
];
