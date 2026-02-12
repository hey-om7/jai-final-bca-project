
import React from 'react';
import { Link } from 'react-router-dom';
import './categories_page.css';
import { FaArrowRight } from 'react-icons/fa';
import one from "./one.jpeg";
import two from "./two.jpeg";

const categories = [
    {
        id: 1,
        title: '100% Cotton',
        path: '/type1',
        image: '/category_cotton_1770900530532.png',
        description: 'Experience the pure softness of 100% organic cotton.',
        state: {
            image: '/ruby_cotton_towel_1770901499695.png',
            title: "Ruby Cotton Towel",
            price: 1999,
            description: "Crafted from premium 100% cotton, this towel delivers unmatched softness, high absorbency, and long-lasting durability.",
            image2: '/emerald_cotton_towel_1770901516592.png',
            title2: "Emerald Cotton Towel",
            price: 1899,
            description2: "Experience the perfect blend of softness and durability with our 100% cotton towel, designed to elevate your comfort and absorbency.",
            image3: '/category_cotton_1770900530532.png', // Fallback to category image
            title3: "King Cotton Towel",
            price: 1999,
            description3: "Indulge in the ultimate luxury with our 100% cotton towel, offering unparalleled softness, superior absorbency, and long-lasting durability for a truly indulgent experience.",
        }
    },
    {
        id: 2,
        title: 'Filament',
        path: '/type2',
        image: '/category_filament_1770900548571.png',
        description: 'Advanced technology for superior absorbency and quick drying.',
        state: {
            image: '/category_filament_1770900548571.png', // Fallback
            title: "Obsidian Filament",
            price: 899,
            description: "A luxurious towel with a soft texture and high absorbency.",
            image2: '/category_filament_1770900548571.png', // Fallback
            title2: "Slate Filament",
            price: 799,
            description2: "A premium towel with a smooth texture and excellent absorbency.",
            image3: '/category_filament_1770900548571.png', // Fallback
            title3: "Coal Filament",
            price: 999,
            description3: "A premium towel with a luxurious feel and superior absorbency.",
        }
    },
    {
        id: 4,
        title: 'Carbon Towels',
        path: '/type4',
        image: '/category_carbon_1770900631300.png',
        description: 'Infused with carbon for antibacterial properties and freshness.',
        state: {
            image: '/category_carbon_1770900631300.png', // Fallback
            title: "Millionaire Towel",
            price: 1899,
            description: "Experience the perfect blend of softness and durability with our 100% cotton towel, designed to elevate your comfort and absorbency.",
            image2: '/category_carbon_1770900631300.png', // Fallback
            title2: "Billionaire Towel",
            price: 1999,
            description2: "A luxurious towel with a soft texture and high absorbency.",
            image3: '/category_carbon_1770900631300.png', // Fallback
            title3: "Trillionaire Towel",
            price: 2999,
            description3: "A premium towel with a luxurious feel and superior absorbency.",
        }
    },
    {
        id: 3,
        title: 'Mixed Cotton',
        path: '/type3',
        image: '/category_mixed_1770900596346.png',
        description: 'The perfect blend of durability and comfort.',
        state: {
            image: '/category_mixed_1770900596346.png', // Fallback
            title: "Texture Blend Towel",
            price: 999,
            description: "A premium towel with a soft texture and high absorbency.",
            image2: '/category_mixed_1770900596346.png', // Fallback
            title2: "Waffle Weave Towel",
            price: 899,
            description2: "A luxurious towel with a smooth texture and excellent absorbency.",
            image3: '/category_mixed_1770900596346.png', // Fallback
            title3: "Herringbone Towel",
            price: 1499,
            description3: "A premium towel with a luxurious feel and superior absorbency.",
        }
    }
];

export function CategoriesPage() {
    return (
        <div className="categories-page">
            <header className="categories-header">
                <h1>Our Collections</h1>
                <p>Explore our premium range of towels tailored for your needs.</p>
            </header>

            <div className="categories-grid">
                {categories.map((category) => (
                    <Link
                        to={category.path}
                        key={category.id}
                        className="category-card"
                        state={category.state}
                    >
                        <div className="category-image-wrapper">
                            <img src={category.image} alt={category.title} />
                            <div className="category-overlay">
                                <span>View Collection <FaArrowRight /></span>
                            </div>
                        </div>
                        <div className="category-content">
                            <h2>{category.title}</h2>
                            <p>{category.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
