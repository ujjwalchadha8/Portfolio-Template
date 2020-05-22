import React from 'react';
// eslint-disable-next-line
import BIO from '../data'
import "./ProjectCarousel.css"

class ProjectCarousel extends React.Component {

    listToParagraphsHtml(list) {
        let html = "";
        list.forEach((item => {
            html += item + "<br/>"
        }))
        return {__html: html};
    }

    render() {

        let projectSlider = BIO.projectsShort.map((project) => {
            return (
                <li key={project.id} data-target="#demo" data-slide-to={project.id} className={(project.id === 0 ? "active"  : "")}></li>
            )
        })

        let projectListHtml = BIO.projectsShort.map((project) => {
            return (
                <div key={project.id} className={"carousel-item list-unstyled " + (project.id === 0 ? "active"  : "")}>
                    <div class="carousel-caption">
                        <h1>{project.title}</h1>
                        <h3 className="mt-3" dangerouslySetInnerHTML={this.listToParagraphsHtml(project.subTitle)}></h3>
                    </div>
                    <div className="d-flex flex-row justify-content-around">                          
                        <img src={project.imageUrl} alt="Chicago" className="image-full"/>
                    </div>
                </div>
            )
        })

        return (
            <div id="demo" className="carousel slide" data-ride="carousel">

                <ul className="carousel-indicators">
                    {projectSlider}
                </ul>

                <div className="carousel-inner">
                
                    {projectListHtml}
                
                    {/* <div className="carousel-item active">
                        <div class="carousel-caption">
                            <h1>Driver Drowsiness Detection</h1>
                            <p className="mt-3">OpenCV &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Python &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp; Linux</p>
                        </div>
                        <div className="d-flex flex-row justify-content-around">                          
                            <img src="https://mycardoeswhat.org/wp-content/uploads/2015/09/RickScout-Drowsiness-Alert-Vlg.jpg" alt="Chicago" className="image-full"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex flex-row justify-content-around">                          
                            <img src="https://source.unsplash.com/pWkk7iiCoDM/" alt="Chicago" className="image-full"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex flex-row justify-content-around">                          
                            <img src="https://source.unsplash.com/pWkk7iiCoDM/" alt="Chicago" className="image-full"/>
                        </div>
                    </div> */}
                    {/* <div className="carousel-item">
                        <img src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="Chicago"/>
                        <img src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="Chicago"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="New York"/>
                        <img src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="Chicago"/>
                    </div> */}
                </div>

                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>

            </div>
        )
    }

}

export default ProjectCarousel;