import React,{Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
        return(
            <footer className="app-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p className="text-left m-txt-center">© 2019 Company. All Rights Reserved.</p>
                    </div>
                    <div className="col-sm-6">
                        <p className="text-right m-txt-center">Follow us on: <span><a href="https://github.com/vaserajakrishna"><i class="fab fa-facebook"></i></a></span><span><a href="https://github.com/vaserajakrishna"><i class="fab fa-linkedin"></i></a> </span><span><a href="https://github.com/vaserajakrishna"><i class="fab fa-twitter"></i></a> </span><span><a href="https://github.com/vaserajakrishna"><i class="far fa-envelope"></i></a></span></p>
                    </div>
                </div>
            </div>
            </footer>
        )
    }
}
export default Footer;