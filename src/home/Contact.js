import React from 'react';
// eslint-disable-next-line
import BIO from '../data'
import "./ProjectCarousel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            socialText: ""
        }
    }

    setSocialText(text) {
        this.setState({
            socialText: text
        })
    }

    render() {

        let socialHtml = BIO.contact.social.map((social, index) => {
            return (
                    <div>
                        <span key={index} onMouseLeave={() => this.setSocialText('')}>
                            <a href={social.profileUrl} target="_blank" onMouseEnter={() => this.setSocialText(social.name)}>
                                <img src={social.logoUrl} width="30" height="30"/>
                            </a>
                        </span>
                        {/* <div className="col-md-12">
                            <div className="text-center">
                                <small>{social.name}</small>
                            </div>
                        </div> */}
                    </div>
                    
                )
        });

        return (
            <div className="container pb-5">
                {/* <h2 className="primaryText">Contact</h2> */}
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 ><FontAwesomeIcon className="primaryText" icon="envelope"/> {BIO.contact.email}</h3>
                    </div>
                    <div className="col-md-12 text-center">
                        <h3><FontAwesomeIcon className="primaryText" icon="phone"/> {BIO.contact.phone}</h3>
                    </div>
                    <div className="offset-md-3 col-md-6 d-flex justify-content-around mt-3 mb-3">
                        {socialHtml}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <small>{this.state.socialText}</small>
                    </div>
                </div>
            </div>
        )
    }

}

export default Contact;