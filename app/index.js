import Header from '../component/header';
import Body from '../component/body';


let header = new Header("Juaracoding");
let body = new Body();

document.getElementById("header").innerHTML = header.draw();
document.getElementById("body").innerHTML = body.draw();