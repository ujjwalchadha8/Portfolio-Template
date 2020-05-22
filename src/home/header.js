import React from 'react';
import './header.scss'

import BIO from '../data'
import {Animated} from "react-animated-css";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            skills: BIO.skillsShort,
            currentSkillIndex: 0,
            currentSkillLetterIndex: 1
        }
        this.updateSkillText = this.updateSkillText.bind(this)
    }

    componentDidMount() {
        // console.log(this.state)
        // setTimeout(this.updateSkillText, BIO.skillsShortLetterUpdateMilis)
        this.updateSkillText()
    }

    updateSkillText() {
        if (this.state.currentSkillLetterIndex < this.state.skills[this.state.currentSkillIndex].length) {
            this.setState({
                currentSkillLetterIndex: this.state.currentSkillLetterIndex + 1
            })
            if (this.state.currentSkillLetterIndex === this.state.skills[this.state.currentSkillIndex].length) {
                setTimeout(this.updateSkillText, BIO.skillsShortWordUpdateMilis)
            } else {
                setTimeout(this.updateSkillText, BIO.skillsShortLetterUpdateMilis)
            }
        } else {
            let currentSkillIndex = this.state.currentSkillIndex >= this.state.skills.length - 1 ? 0 : this.state.currentSkillIndex + 1
            this.setState({
                currentSkillLetterIndex: 1,
                currentSkillIndex: currentSkillIndex
            })
            setTimeout(this.updateSkillText, BIO.skillsShortLetterUpdateMilis)
        }
    }

    render() {
        return (
            <div id="homeHeader" className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2" >
                            <img className="image-profile" src={BIO.profilePhotoUrl} alt=""></img>
                        </div>
                        <div className="col-md-10 text-center inner center-vertical">
                            {/* <h4 className="text-left mb-3"><span className="name-heading">Hi, my name is</span></h4> */}
                            <Animated animationIn="bounceInDown" isVisible={true}>
                                <h1 className="primaryText text-uppercase"><strong>{BIO.name}</strong></h1>
                            </Animated>
                            <h4 className="animated fadeInUp delay-05s white title">{BIO.title}<span style={{color: 'thistle'}}></span></h4>
                            <div className="line"></div>
                            <h5 className="white mt-4">
                                <span className="text-uppercase text-white">{this.state.skills[this.state.currentSkillIndex].substring(0, this.state.currentSkillLetterIndex)}|
                            </span></h5>
                            <Animated animationIn="fadeInUp">
                                <Animated animationIn="flip" isVisible={true} animationInDelay={1200}>
                                    <button className="mt-5 btn bigButton text-uppercase">Get In Touch</button>
                                </Animated>
                            </Animated>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;