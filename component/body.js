import Component from '../component/component';

class Body extends Component {

  constructor(){
  super();
  }

 draw(){
 
    let txtHtml = `<p> Ini body html</p>`;
    
    return txtHtml;
 
 }

}

export default Body;