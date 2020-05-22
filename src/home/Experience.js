import React from 'react';
import $ from 'jquery';
import BIO from '../data';

class Experience extends React.Component {
    
    constructor(props) {
        super(props);
        this.props.modalHandlers(this.openModal, this.closeModal);
    }

    openModal() {
        $("#modalExperience").modal('show');
    }

    closeModal() {
        $("#modalExperience").modal('hide')
    }

    render() {

        let experienceListHtml = BIO.experience.map((experience, index) => {
            return (
                <li key={index}>{experience.description}</li>
            )
        })

        return (
            <div className="modal fade" id="modalExperience" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document" style={{maxWidth: "70%", maxHeight: '80vh'}} width="100%">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold text-dark">EXPERIENCE</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="text-dark">
                                <ul>
                                    {experienceListHtml}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;