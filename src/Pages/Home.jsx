import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services/Services';
import TeamPreview from './Team/TeamPreview';
import PopularProducts from './Popular/PopularProducts';
import Over from './Over/Over';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <PopularProducts></PopularProducts>
           <TeamPreview></TeamPreview>
           <Over></Over>
        </div>
    );
};

export default Home;