import Header from '../component/header';
import Body from '../component/body';
import GenerateUI from './generateui';


let header = new Header("Juaracoding");
let body = new Body();
let ui = new GenerateUI(document.getElementById("header"));


ui.addComponents(header,body,header,header,body);
ui.generateUI();


