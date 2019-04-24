import React, {Component} from 'react';
import Avatar from './images/avatar.png';
import './Testimonals.css';

class Testimonals extends Component {
    render() {
        return (
            <div className="col-sm-4 app-clmn-grid">
                <div className='tmb app-pd-15'>
                    <p>{this.props.tstContent}</p>
                </div>
                <div class="media tst-media">
                    <img src={Avatar} className="align-self-start mr-3" alt={this.props.altText} />
                    <div className="media-body">
                        <p className="client-name">{this.props.name}</p>
                        <p className="client-position">Position:&nbsp;{this.props.position}</p> 
                    </div>
                </div>
            </div>
        )
    }
}
export default Testimonals;