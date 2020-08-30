let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'bilder/sif-nettside.JPEG') {
        myImage.setAttribute('src','bilder/sif-nettside-2.JPEG');
    } else {
        myImage.setAttribute('src','bilder/sif-nettside.JPEG');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Sif er kul, ' + myName;
    }
    
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Sif er kul, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}