import React from 'react';
import Feedback from './Components/Feedback/Feedback';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Work from './Components/Work/Work';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Work></Work>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;