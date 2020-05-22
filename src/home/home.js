import React from 'react';
// eslint-disable-next-line
import BIO from '../data'
import Header from './header'

import Navbar from '../navbar/navbar'
import HireMe from './HireMe';
import Contact from './Contact'
import Floating from '../navbar/Floating'
import './home.scss'

import ProjectCarousel from './ProjectCarousel';
import Skills from './Skills';

import scrollToComponent from 'react-scroll-to-component';

class Home extends React.Component {

    componentDidMount() {
        // scrollToComponent(this.skillsRef, { offset: -400, align: 'middle', duration: 500, ease:'inCirc'});
    }

    render() {
        return (
            <div className="Home" style={{backgroundImage: "url(" + BIO.homeBackgroundImage + ")"}}>
                <div className="container"> 
                    <div className="row">
                        <Navbar skillsRef={this.skillsRef}></Navbar>
                    </div>
                </div>
                <div className="space"></div>
                <Header></Header>
                
                <Skills ref={(section) => this.skillsRef = section}></Skills>
                
                <div className="space"></div>
                <ProjectCarousel></ProjectCarousel>

                <div className="space"></div>
                <HireMe></HireMe>
                
                <div className="space"></div>
                <Contact></Contact>
                <Floating></Floating>
            </div>
        )
    }

}

export default Home;