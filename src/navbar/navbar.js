import React from 'react';
import { Link } from "react-router-dom";
import Achievements from "../home/Achievements"
import './navbar.scss'
import BIO from '../data'
import ProjectsMenu from './Projects';
import { Animated } from 'react-animated-css';
import Experience from '../home/Experience';

class Navbar extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
            scrollCrossedHeader: false,
            isProjectMenuVisible: false,
        }
        // this.projectMenuHandlers = this.projectMenuHandlers.bind(this);
        // this.closeProjectMenu = this.closeProjectMenu.bind(this);
    }

    achievementsModalHandlers(openModal, closeModal) {
        console.log(this.props.skillsRef);
        this.openAchievementsModal = openModal;
        this.closeAchievementsModal = closeModal;
    }

    experienceModalhandlers(openModal, closeModal) {
        this.openExperienceModal = openModal;
        this.closeExperienceModal = closeModal;
    }

    openProjectMenu() {
        this.setState({
            isProjectMenuVisible: true
        })
    }

    closeProjectMenu() {
        this.setState({
            isProjectMenuVisible: false
        })
    }

    toggleProjectMenu() {
        this.setState({
            isProjectMenuVisible: !this.state.isProjectMenuVisible
        })
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
          const crossedHeader = window.pageYOffset > document.getElementById('homeHeader').clientHeight;
          if (crossedHeader != this.state.scrollCrossedHeader) {
              this.setState({
                  scrollCrossedHeader: crossedHeader
              })
          }
        });
      }


    render() { 
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top background-primary">
                <Link className="navbar-brand" to="/home">
                    <img height="40px" src={BIO.logoUrl} alt={BIO.logoName}/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <button className="nav-link color-white background-transparent" 
                            onClick={() => this.openExperienceModal()}>Experience</button>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link color-white" to="/link">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link color-white background-transparent" 
                            onClick={() => this.openAchievementsModal()}>Achievements</button>
                    </li>
                    <li className={"nav-item " + (this.state.isProjectMenuVisible ? "dropup" : "dropdown")}>
                        <a onClick={() => this.toggleProjectMenu()} className="nav-link dropdown-toggle cursor-pointer" 
                                // id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" 
                                aria-expanded="false">
                        Projects
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Something else here</a>
                        </div>
                    </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
                <Achievements modalHandlers={this.achievementsModalHandlers.bind(this)}/>
                <Experience modalHandlers={this.experienceModalhandlers.bind(this)}/>
                <ProjectsMenu isVisible={this.state.isProjectMenuVisible} hidden={true}></ProjectsMenu>
            </div>
        )
    }
}

export default Navbar;