import React,{Component} from 'react';
import mapImg from './images/map.png';
import './MapSection.css';

class MapSection extends Component {
    render(){
        return(
            <section className='map-section app-glb-ctnr'>
                <div className="app-glb-ctnt">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 app-clmn-grid">
                        <div className='txt-map-ctnt app-pd-15'>
                            <h2>It is a long established fact that a reader will be distracted by the readable its layout.</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 app-clmn-grid">
                        <div className="img-map-ctnt app-clmn-grid">
                            <img src={mapImg} alt="Map" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </section>
        )
    }
}
export default MapSection;