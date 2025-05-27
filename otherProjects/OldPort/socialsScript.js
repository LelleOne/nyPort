let clicks = 1;

function addDay() {
    const links = document.querySelectorAll('.socialsLinks');
    
if (clicks === 1 && screen.width > 1180){
    for (const bil of links) {
        bil.style.opacity = "1";
        bil.style.transform = "translate(-5%, -225%)"
    }
    clicks += 1;

} else if (clicks >= 2 && screen.width > 1180){
    for (const bil of links){
        bil.style.opacity = "0";
        bil.style.transform = "translate(-50%, -235%)"
    }
    clicks -= 1;
}else if (clicks === 1 && screen.width < 1180){

    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Back';
    document.body.appendChild(backButton);
    resetButton.addEventListener('click', resetGame);

}

  }  
