import Apis from "./components/apis/apis";

let host = window.location.href;
var domainHost = '';
if(host === 'http://localhost:3000/'){
  domainHost = 'http://dev.api.proejct.com/';
} else if(host === 'uat.flipkart.com') {
  domainHost = 'http://uat.api.proejct.com/';
}else if(host === 'flipkart.com') {
  domainHost = 'http://api.proejct.com/';
} else{
  domainHost = 'http://api.proejct.com/';
}

export default domainHost;

