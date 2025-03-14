import React, { useState, useEffect } from 'react';
import './allCourse.css';
import Image1 from './image/image (1).png';
import Image2 from './image/image (2).png';
import Image3 from './image/image (3).png';
import Image4 from './image/image (4).png';
import Image5 from './image/image (5).png';
import Image6 from './image/image (6).png';
import Image7 from './image/image (7).png';
import Image8 from './image/image (8).png';
import Image9 from './image/image (1).png';

const AllCourses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
    const [selectedCategory, setSelectedCategory] = useState('All Courses');

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300); 

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    const courses = [
        {
            title: 'The Complete Guide to Disney Castle Pics Made Easy',
            lessons: 27,
            price: '$39.00',
            categories: 'All Courses',
            image: Image1
        },
        {
            title: 'Ordinary to Extraordinary: Photography 201',
            lessons: 35,
            price: '$197.00',
            categories: 'All Courses, Workshops',
            image: Image2
        },
        {
            title: 'The Quick + Easy Beginner’s Course to Using Your DSLR Camera',
            lessons: 14,
            price: 'Free',
            categories: 'All Courses, Free',
            image: Image3
        },
        {
            title: 'Key to Photography 101: The Workshop',
            lessons: 11,
            price: '$97.00',
            categories: 'All Courses, Workshops',
            image: Image4
        },
        {
            title: 'Snap to Success : The Business of Photography 101',
            lessons: 17,
            price: '$197.00',
            categories: 'All Courses, Workshops',
            image: Image5
        },
        {
            title: 'Key To Taking Pictures Like A Professional Photographer - eBook',
            lessons: 1,
            price: '$19.99',
            categories: 'All Courses, Books',
            image: Image6
        },
        {
            title: 'The Key To Natural Posing - eBook',
            lessons: 1,
            price: '$19.99',
            categories: 'All Courses, Books',
            image: Image7
        },
        {
            title: 'Affiliate Program',
            lessons: 17,
            price: '$197.00',
            categories: 'All Courses, Workshops',
            image: Image8
        },
        {
            title: 'The Cheat Sheet to Disney Castle Pics Made Easy',
            lessons: 17,
            price: '$197.00',
            categories: 'All Courses, Workshops',
            image: Image9
        },
    ];

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        course.lessons.toString().includes(debouncedSearchTerm) ||
        course.categories.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );

    const handleFilterClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
        <div id="all">
            <div className="allcourse-Container">
                <h1 className="course-title">Courses</h1>
                <div className="filters">
                    <button onClick={() => handleFilterClick('All Courses')} className="filter-link">All Courses</button>
                    <button onClick={() => handleFilterClick('Books')} className="filter-link">Books</button>
                    <button onClick={() => handleFilterClick('Free')} className="filter-link">Free</button>
                    <button onClick={() => handleFilterClick('Workshops')} className="filter-link">Workshops</button>
                </div>
                <input
                    type="text"
                    placeholder="Search by title, lessons, or category"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-bar"
                />
                <div className="course-list">
                    {filteredCourses
                        .filter(course => 
                            selectedCategory === 'All Courses' || course.categories.includes(selectedCategory)
                        )
                        .map((course, index) => (
                            <div key={index} className="course-card">
                                <div className="card-content">
                                    <h4 className="categories">{course.categories}</h4>
                                    <h2 className="title">{course.title}</h2>
                                    <div className="details">
                                        <span>{course.lessons} Lessons</span>
                                        <span className="separator">|</span>
                                        <span>{course.price}</span>
                                    </div>
                                </div>
                                <img src={course.image} alt={course.title} className="course-image" />
                            </div>
                        ))}
                    {filteredCourses.length === 0 && (
                        <p>No courses found. Try adjusting your search or filter.</p>
                    )}
                </div>
            </div>
            </div>
            <footer className="footer">
                <p className="copyright">© Copyright Key to Pictures 2024</p>
            </footer>
        </div>
    );
};

export default AllCourses;
