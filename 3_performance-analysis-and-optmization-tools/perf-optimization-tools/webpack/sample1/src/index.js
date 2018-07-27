// 라이브러리
// 모듈 1번
var _ = require('lodash');

// 앱 로직
// 모듈 0번
function component () {
    var element = document.createElement('div');
  
    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello','webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());