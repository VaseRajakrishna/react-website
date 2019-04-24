import React, { Component } from 'react';

import './Contact.css';

class ContactSection extends Component {
    render() {
        return (
            <section className='contact-section app-glb-ctnr'>
                <div className="app-glb-ctnt">
                    <div className="container max-width-ctnr">

                        <div className="row">
                            <div className="col-sm-12 app-clmn-grid">
                                <div className='form-ctnr app-pd-15 text-center'>
                                    <h2>Convinced To Work With Us?</h2>
                                    <p>Company has helped agencies keep their promises to clients since 2005.</p>
                                </div>
                            </div>
                        </div>
                        <form className="form-group row">
                            <div className="col-sm-4 app-clmn-grid">
                            <input type="text" className="form-control app-frm-ctrl" placeholder="Full Name" />
                            </div>
                            <div className="col-sm-4 app-clmn-grid">
                            <input type="mail" className="form-control app-frm-ctrl" placeholder="Email Address" />
                            </div>
                            <div className="col-sm-4 app-clmn-grid">
                            <input type="text" className="form-control app-frm-ctrl" placeholder="Phone Number" />
                            </div>
                            <div className="col-sm-12 app-clmn-grid">
                            <textarea className="form-control app-frm-ctrl" placeholder="Messge in brief"></textarea>
                            </div>
                            <div className="col-sm-12 app-clmn-grid text-center">
                            <input type="button" value="Submit" className="btn app-glb-btn" />
                            </div>
                        </form>
                        
                    </div>
                </div>
            </section>
        )
    }
}
export default ContactSection;