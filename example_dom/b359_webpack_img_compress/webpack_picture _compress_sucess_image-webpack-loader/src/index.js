// import './1.jpg';  //运行成功
 require("./1.jpg");  //运行成功

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());