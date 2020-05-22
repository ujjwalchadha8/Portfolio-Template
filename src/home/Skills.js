import React from 'react';
// eslint-disable-next-line

import "./Skills.scss"
import BIO from '../data';



class Skills extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hoveredIcon: -1
        }
    }

    handleImageHover(index) {
        this.setState({
            hoveredIcon: index
        })
    }

    handleImageHoverOver(index) {
        this.setState({
            hoveredIcon: -1
        })
    }

    renderSkillDetailsList(index) {
        return BIO.skillsDetailed[index].main.map((skillDetail, index) => {
            return (
                <div key={index}>
                    <p className="skillsTitle">{skillDetail.name}</p>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" 
                                aria-valuemin="0" aria-valuemax="100" 
                                style={{width: (skillDetail.percent + "%")}}></div>
                    </div>
                    <br/>
                </div>
            )
        })
    }

    renderSkillExtrasList(index) {
        return BIO.skillsDetailed[index].others.map((skillDetail, index) => {
            return (
                <li key={index}>{skillDetail.name}</li>
            )
        })
    }

    render() {

        let skillListHtml = BIO.skillsDetailed.map((skill, index) => {
            return (
                <div key={index} className="col-md-4 col-sm 12 mt-5 d-flex justify-content-center">
                    <div className="skills-container" onMouseLeave={() => this.handleImageHoverOver(index)}>
                        <div className="icon-container">
                            <div className="d-flex justify-content-center">
                                <img onMouseEnter={() => this.handleImageHover(index)} 
                                    style={{backgroundColor: this.state.hoveredIcon === index? "#000" : "#fff"}}
                                    className="round-icon mb-3" 
                                    src={ this.state.hoveredIcon === index ? skill.invertedIconUrl : skill.iconUrl }></img>
                            </div>
                            <p className="text-white icon-label text-center">
                                <span className="underline">{skill.name}</span>
                            </p>
                        </div>
                        <div className="relative-position">
                            {this.renderSkillDetailsList(index)}
                            <div className="skills-extra-container" hidden={!(this.state.hoveredIcon === index)}>
                                <div className="scrollable">
                                    <ul>
                                        {this.renderSkillExtrasList(index)}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                  </div>
            )
        })

        return (
            <div id="skills" className="contentSection" >
            <div className="customContainer">
                <h2 className="contentTitle primaryText mb-3 text-center"><span>SKILLS</span></h2>
                <div className="d-flex justify-content-center">
                {/* <img 
                    className="round-icon mb-3 title-icon" 
                    src="https://firebasestorage.googleapis.com/v0/b/supreethkumark.appspot.com/o/skills_icons%2Fothers.png?alt=media&token=0b68d562-aa00-4af2-8dfc-798001c92797"></img> */}
                </div>
                <p className="lightBlackText text-center"><span>{BIO.skillsDetailedDescription}</span></p>   
                <div className="row">
                  {skillListHtml}

                </div>

            </div>
            
          </div>
        )
    }

}

export default Skills;