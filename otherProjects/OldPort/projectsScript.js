let figmaBg = false;
let countryGame = false;
let toGame;
let button = false

function figmaDesign() {
    if(figmaBg === false && button === false){
        document.querySelector(".A").style.backgroundImage ="url('assets/figma.png')";
        document.querySelector(".A").style.backgroundRepeat = 'no-repeat';
        document.querySelector('.A').style.backgroundColor = 'black';
        document.querySelector('.A').style.backgroundPosition = 'center center';

        toGame = document.createElement('button');
        document.body.appendChild(toGame);
        toGame.textContent = 'Go to project';
        toGame.addEventListener('click', goToGame);
        toGame.setAttribute('id', 'projectButton');

        figmaBg = true;
        countryGame = false;
        button = true;

    }else if(figmaBg === false && button === true){

        document.querySelector(".A").style.backgroundImage ="url('assets/figma.png')";
        document.querySelector(".A").style.backgroundRepeat = 'no-repeat';
        document.querySelector('.A').style.backgroundColor = 'black';
        document.querySelector('.A').style.backgroundPosition = 'center center';

        figmaBg = true;
        countryGame = false;

    }else if (figmaBg === true){

        toGame.parentNode.removeChild(toGame);
        document.querySelector(".A").style.background="rgb(0, 0, 0)";

        figmaBg = false;
        button = false;

    }
}

function guessingGame(){
    if(countryGame === false && button === false){
        document.querySelector(".A").style.backgroundImage ="url('assets/country-game.jpg')";
        document.querySelector(".A").style.backgroundRepeat = 'no-repeat';
        document.querySelector('.A').style.backgroundColor = 'black';
        document.querySelector('.A').style.backgroundPosition = 'center center';

        toGame = document.createElement('button');
        document.body.appendChild(toGame);
        toGame.textContent = 'Go to project';
        toGame.addEventListener('click', goToGame);
        toGame.setAttribute('id', 'projectButton');

        countryGame = true;
        figmaBg = false;
        button = true;

    }else if(countryGame === false && button === true){

        document.querySelector(".A").style.backgroundImage ="url('assets/country-game.jpg')";
        document.querySelector(".A").style.backgroundRepeat = 'no-repeat';
        document.querySelector('.A').style.backgroundColor = 'black';
        document.querySelector('.A').style.backgroundPosition = 'center center';

        countryGame = true;
        figmaBg = false;
        button = true;

    }else if(countryGame === true){

        toGame.parentNode.removeChild(toGame);
        document.querySelector(".A").style.background="rgb(0, 0, 0)";

        countryGame = false;
        button = false;
    }
}

function goToGame(){
    if(figmaBg === true){

    window.location.href = "https://www.figma.com/files/project/104518279/Team-project?fuid=1276828747572627479";

    }else if(countryGame === true){

        window.location.href = 'Country game/index.html';

    }else{
        toGame.parentNode.removeChild(toGame);
        document.querySelector(".A").style.background="rgb(0, 0, 0)";

        figmaBg = false;
        countryGame = false ;
    }
}
// nead to style the button later