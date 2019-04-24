import React,{Component} from 'react';

import './Banner.css';
import iconOne from './images/icon1.png';
import iconTwo from './images/icon2.png';
import iconThree from './images/icon3.png';

class Banner extends Component {
    render(){
        return(
            <section id="banner">
            <div className="banner-container">
               <div className="container max-width-ctnr-hdr">
               <h3 className="app-tttl">It is a long established fact that a reader will be distracted by the readable its layout.</h3>
                   <div className="row">
                       <div className="col-sm-4">
                           <div className='service-box app-clmn-grid'>
                           <img src={iconOne} alt="service one" className="img-fluid"/>
                               <p>Service Name</p>
                           </div>
                       </div>
                       <div className="col-sm-4">
                           <div className='service-box app-clmn-grid'>
                           <img src={iconTwo} alt="service one" className="img-fluid" />
                               <p>Service Name</p>
                           </div>
                       </div>
                       <div className="col-sm-4">
                           <div className='service-box app-clmn-grid'>
                           <img src={iconThree} alt="service one" className="img-fluid" />
                               <p>Service Name</p>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
            </section>
        )
    }
}

export default Banner;