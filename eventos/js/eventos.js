onload=principal;

function principal(){
    let body = document.getElementsByTagName("body");

    const para = document.createElement("p");
    const node = document.createTextNode("This is new");
    para.appendChild(node);
    body.appendChild(para);
}