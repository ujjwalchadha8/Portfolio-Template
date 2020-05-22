import React from 'react';
import { Link } from "react-router-dom";

import BIO from '../data'
import './Floating.scss'

class Navbar extends React.Component { 
    render() { 
        return (
            <div className="floating">
             <a href="https://firebasestorage.googleapis.com/v0/b/supreethkumark.appspot.com/o/Resume%2FSupreeth%20Kumar_resume_ref.pdf?alt=media&token=85c42a4a-9ff1-49d6-84f6-33b00a0bf8a2">
                <div className="background-resume">
                <p className="text-white text-center text-small">RESUME</p>
                <img src="https://firebasestorage.googleapis.com/v0/b/supreethkumark.appspot.com/o/Resume%2Fdownload.png?alt=media&token=0a27979d-391c-41fc-b0c8-d0b5416b0080"
                    width="50px"
                    height="50px"
                    >
                </img>
                </div>
             </a>
           </div>
        )
    }
}

export default Navbar;