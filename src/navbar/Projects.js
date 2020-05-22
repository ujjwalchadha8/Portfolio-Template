import React from 'react';
import './Projects.scss'
import BIO from '../data'
import {Animated} from "react-animated-css";
import ProjectModal from './ProjectModal';

class ProjectsMenu extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
            selectedProject: null
        }
        // this.props.menuHandlers(this.openMenu, this.closeMenu)
        
    }

    generateProjectsHtml(projects) {
        return projects.map((project, index) => {
            return <li className="link" key={index} onClick={() => this.openProjectModal()}>{project.name}</li>
        })
    }

    projectModalHandler(openModal, closeModal) {
        this.openProjectModal = openModal;
        this.closeProjectModal = closeModal;
    }
    
    render() { 
        let categoriesHtml = BIO.projectsDetailed.map((category, index) => {
            return (                
                    <div key={index} className="col-md-3 mb-5">
                        <div className="text-center primaryText">
                            <h3>{category.categoryName}</h3>
                        </div>
                        <div>
                            <ul className="list-group">
                                {this.generateProjectsHtml(category.projects)}
                            </ul>
                        </div>
                    </div>
            )
        })

        return (
            <div>
            <Animated className="nav-menu-big" animationIn="slideInDown" animationOut="slideOutUp" 
                    animationInDuration={500} animationOutDuration={500}
                    isVisible={this.props.isVisible}>
                <div className="container">
                    <div className="row pt-3">
                        {categoriesHtml}
                    </div>
                </div>
            </Animated>
            <ProjectModal project={this.state.selectedProject} modalHandlers={this.projectModalHandler.bind(this)}></ProjectModal>
            </div>
        )
    }
}

export default ProjectsMenu;