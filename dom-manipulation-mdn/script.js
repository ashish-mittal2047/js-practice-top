const link = document.querySelector('a');
link.textContent = "Mozilla Developer Network";
link.setAttribute('href', "https://developer.mozilla.org");

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

const para2 = document.createElement('p');
const text = document.createTextNode('— the premier source for web development knowledge.');
para2.appendChild(text);
sect.appendChild(para2);
/*const linkPara = document.querySelector('')*/