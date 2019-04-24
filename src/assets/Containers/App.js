import React,{Component} from 'react';
import Navbar from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import MapSection from '../Components/MapSection/MapSection'
import Testimonals from '../Components/Testimonals/Testimonals';
import ContactSection from '../Components/ContactSection/Contact';
import Footer from '../Components/Footer/Footer';

import './App.css';

class App extends Component {
  state={
    testimonals:[
      {
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      name:'CLIENT NAME',
      position:'OFG',
      altText:'Avatar'
    },
    {
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      name:'CLIENT NAME',
      position:'OFG',
      altText:'Avatar'

    },
    {
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      name:'CLIENT NAME',
      position:'OFG',
      altText:'Avatar'

    }
  ]
  };
  render(){
   const tstItem=this.state.testimonals.map((item,index)=>{
     return( <Testimonals tstContent={item.content} name={item.name} position={item.position} altText={item.altText} />)
   })
    return (
      <div className="App">
        <header className="App-header">
        <Navbar></Navbar>
         </header>
           <Banner></Banner>
           <MapSection></MapSection>
           <section className='tst-ctnr app-glb-ctnr'>
                <div className="app-glb-ctnt">
            <div className="container">
            <div className="app-ttl text-center"><h2>Testimonals</h2></div>
                <div className="row">
                    {tstItem}
                </div>
            </div>
                </div>
            </section>
            <ContactSection></ContactSection>
            <Footer></Footer>
      </div>
    );
  }
  
}
export default App;
