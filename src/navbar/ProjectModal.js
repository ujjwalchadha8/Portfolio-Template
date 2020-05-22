import React from 'react';
import $ from 'jquery';
import BIO from '../data';

class ProjectModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.props.modalHandlers(this.openModal, this.closeModal);

    }

    openModal() {
        $("#projectModal").modal('show');
    }

    closeModal() {
        $("#projectModal").modal('hide')
    }

    render() {

        let project = this.props.project;

        let descriptionHtml = project.description.map((description, index) => {
            return (
                <li key={index}>{description}</li>
            )
        })

        return (
            <div className="modal fade" id="projectModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document" style={{maxWidth: "70%", maxHeight: '80vh'}} width="100%">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold text-dark">ACHIEVEMENTS</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="text-dark">
                                <ul>
                                    {descriptionHtml}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectModal;