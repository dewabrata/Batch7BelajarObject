import Component from '../component/component';

class Header extends Component {

   constructor(headerName){
   super();
   this.headerName = headerName;
      console.log("constructor header")
   }

   draw(){
   
   let txtHtml = `<div class="header">
   <a href="#default" class="logo">${this.headerName}</a>
   <div class="header-right">
     <a class="active" href="#home">Home</a>
     <a href="#contact">Contact</a>
     <a href="#about">About</a>
   </div>
 </div>`;
    return txtHtml;
   
   }

}

export default Header;

