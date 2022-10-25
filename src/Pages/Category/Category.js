import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsDisplayCard from '../Common/NewsDisplayCard/NewsDisplayCard';

const Category = () => {
    const categoryNews = useLoaderData()
     
    return (
        <div>
            {
                categoryNews.map(news=><NewsDisplayCard
                key={news._id}
                news={news}
                ></NewsDisplayCard>)
            }

        </div>
    );
};

export default Category;