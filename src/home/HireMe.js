import React from 'react';
import './HireMe.scss'

class HireMe extends React.Component {
    render() {
        return (
        <div>
            <div id="hire">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="contentTitle text-white mb-3 text-center" style={{'marginLeft': '0dp', width: 'auto'}}>
                        CONTACT <strong><span className="font-italic">ME</span></strong></h2>
                </div>
                <div className="col-md-7 entry yellow">
    
                    <p style={{'textAlign': 'justify'}}>I am a Robotics professional who enjoys what I do. To add to my good academics, I also have research experience in Self-driving cars and construction based autonomous robotics applications. I have encountered a variety of challenges while I was working as a Research and Development Intern, and Research Assistant, that has shaped me into a flexible and analytical thinker.<br/><br/> I am seeking a challenging work environment where I can utilize my skills to deliver maximum performance. I offer my dedication and hard work to be an asset to your company.</p>
    
                   
                </div>
                <div className="col-md-4 col-md-offset-1">
    
                    <div className="contact-opnemen">
                        
                    <div className='gf_browser_chrome gform_wrapper gplaceholder_wrapper' id='gform_wrapper_1' ><form method='post' enctype='multipart/form-data' target='gform_ajax_frame_1' id='gform_1' className='gplaceholder' action='/'>
                            <div className='gform_heading'>
                                <h3 className='gform_title text-center mb-3'>APPROACH ME</h3>
                            </div>
                            <div className='gform_body'>
                            <div class="form-group">
                                    <label for="exampleFormControlInput1">Name *</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Smith"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Email *</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>

                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect2">Phone</label>
                                    <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="+1 xxx-xxx-xxxx"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>    
                            </div>
                            <div className='gform_footer top_label'> 
                                <input type='submit' id='gform_submit_button_1' className='gform_button button btn-primary btn' value='Send' tabindex='204' onclick='if(window["gf_submitting_1"]){return false;}  window["gf_submitting_1"]=true;  ' /> <input type='hidden' name='gform_ajax' value='form_id=1&amp;title=1&amp;description=&amp;tabindex=200' />
                                
                                
                            </div>
                            </form>
                            </div>
                    {/* <iframe style='display:none;width:0px;height:0px;' src='about:blank' name='gform_ajax_frame_1' id='gform_ajax_frame_1'></iframe> */}
                    </div>
    
                    
                </div>
    
            </div>
        </div>
    </div>
    
    {/* <div id="contact">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="main line">
                        <strong>Contact</strong>
                    </h2>
                </div>
                <div className="col-md-4">
                    <h3><strong>Bel</strong> Simon</h3>
                    <p>
                        +31 (0) 6 2908 7311				</p>
                </div>
                <div className="col-md-4">
                    <h3><strong>Email</strong> Simon</h3>
                    <p>
                        <a href="mailto:info@simontimmerman.nl">info@simontimmerman.nl</a>				</p>
                </div>
                <div className="col-md-4">
                    <h3><strong>Social</strong> Simon</h3>
                    <p>
                        <a href="http://nl.linkedin.com/in/simontimmerman/nl" rel="external">LinkedIn</a>				</p>
                </div>
            </div>
        </div>
    
    </div> */}
    
    
        </div>
        )
    }
}

export default HireMe;