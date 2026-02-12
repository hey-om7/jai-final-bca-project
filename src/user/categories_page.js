
import React from 'react';
import { Link } from 'react-router-dom';
import './categories_page.css';
import { FaArrowRight } from 'react-icons/fa';
import { categories } from './data';

export function CategoriesPage() {
    console.log("CategoriesPage Loaded - New Version");
    return (
        <div className="categories-page">
            <header className="categories-header">
                <h1>Our Collections</h1>
                <p>Explore our premium range of towels tailored for your needs.</p>
            </header>

            <div className="categories-grid">
                {categories.map((category) => (
                    <Link
                        to={`/category/${category.id}`}
                        key={category.id}
                        className="category-card"
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
