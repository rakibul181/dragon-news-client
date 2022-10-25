import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategories(data)
            })

    }, [])
    return (
        <div>
             {
                categories.map(category=><Link to={`category/${category.id}`} key={category.id}><p >{category.name}</p></Link>)
             }
        </div>
    );
};

export default LeftNav;