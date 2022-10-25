import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsDisplayCard from '../Common/NewsDisplayCard/NewsDisplayCard';

const Home = () => {
    const allNews = useLoaderData()
    console.log(allNews);
    return (
        <div>
            {
                allNews.map(news=><NewsDisplayCard key={news._id} news={news}></NewsDisplayCard>)
            }
        </div>
    );
};

export default Home;