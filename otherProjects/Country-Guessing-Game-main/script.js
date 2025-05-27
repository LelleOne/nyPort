
document.addEventListener('DOMContentLoaded', function () {
const guessSubmit = document.querySelector('.guessSubmit');
const yeh = document.querySelector('.Erm');
const hintText = document.querySelector('.hints');
const guessField = document.querySelector('.guessField');
let hints = 1;
let resetButton;
let guessCount = 0;
let winAudio = new Audio('sounds/yay.mp3');
let skillIssue = new Audio('sounds/noo.mp3');


const Countries = [
    "albania",
    "andorra",
    "austria",
    "belarus",
    "belgium",
    "bosnia",
    "bulgaria",
    "croatia",
    "cyprus",
    "czech republic",
    "denmark",
    "estonia",
    "finland",
    "france",
    "germany",
    "greece",
    "hungary",
    "iceland",
    "ireland",
    "italy",
    "kosovo",
    "latvia",
    "liechtenstein",
    "lithuania",
    "luxembourg",
    "malta",
    "moldova",
    "monaco",
    "montenegro",
    "netherlands",
    "north macedonia",
    "norway",
    "poland",
    "portugal",
    "romania",
    "russia",
    "san marino",
    "serbia",
    "slovakia",
    "slovenia",
    "spain",
    "sweden",
    "switzerland",
    "ukraine",
    "united kingdom",
    "vatican city"
  ];

  const countryFacts = [
    // Albania
    "Located in Southeastern Europe with a diverse culture and beautiful landscapes.",

    // Andorra
    "A small landlocked country in the Pyrenees mountains, known for its ski resorts and natural beauty.",

    // Austria
    "Famous for its classical music heritage and stunning Alpine landscapes.",

    // Belarus
    "A landlocked country in Eastern Europe, known for its rich history and culture.",

    // Belgium
    "Known for its delicious chocolates, waffles, and a variety of beers.",

    // Bosnia and Herzegovina
    "Has a rich cultural heritage and is known for its historic towns and natural attractions.",

    // Bulgaria
    "Famous for its picturesque landscapes, including beautiful monasteries and a Black Sea coast.",

    // Croatia
    "Known for its stunning Adriatic coastline, historic cities, and vibrant culture.",

    // Cyprus
    "An island nation in the Mediterranean, famous for its historical sites and beautiful beaches.",

    // Czech Republic
    "Located in Central Europe and known for its charming cities and historic architecture.",

    // Denmark
    "A Nordic country known for its progressive social policies and high standard of living.",

    // Estonia
    "One of the Baltic states with a strong emphasis on education and technology.",

    // Finland
    "Famous for its lakes, forests, and the Northern Lights in the north.",

    // France
    "Known for its world-class cuisine, fashion, and art.",

    // Germany
    "A major European powerhouse with a rich history and diverse culture.",

    // Greece
    "Famous for its ancient history, including the birthplace of democracy in Athens.",

    // Hungary
    "Located in Central Europe and known for its unique language and cuisine.",

    // Iceland
    "A Nordic island country known for its stunning landscapes and geothermal activity.",

    // Ireland
    "Known for its lush green landscapes, friendly people, and rich folklore.",

    // Italy
    "Famous for its natural beauty, rich history, and distinctive culture.",

    // Kosovo
    "A partially recognized state in the Balkans with a complex political status.",

    // Latvia
    "One of the Baltic states with beautiful forests and a stunning coastline.",

    // Liechtenstein
    "A small landlocked principality in the Alps known for its financial services.",

    // Lithuania
    "Famous for its strong basketball tradition and vibrant festivals.",

    // Luxembourg
    "A small Baltic state with a rich cultural heritage and beautiful seaside resorts.",

    // Malta
    "One of the smallest countries in Europe, known for its banking and finance industry.",

    // Moldova
    "An island nation with a Mediterranean culture and historical sites.",

    // Monaco
    "A landlocked country in Eastern Europe with a diverse culture and scenic landscapes.",

    // Montenegro
    "A glamorous city-state known for its luxury and casinos.",

    // Netherlands
    "This country is known for its flat landscape, extensive canal systems, and iconic windmills.",

    // North Macedonia
    "Known for its picturesque canals, tulip fields, and cycling culture.",

    // Norway
    "Located in the Balkans with beautiful landscapes and historic cities.",

    // Poland
    "A Northern European country with breathtaking fjords and natural beauty.",

    // Portugal
    "Famous for its hearty cuisine, including pierogi and kielbasa.",

    // Romania
    "Known for its maritime history, port wine, and scenic coastline.",

    // Russia
    "A Southern European country with a rich history and diverse landscapes.",

    // San Marino
    "Located in Eastern Europe and known for its thermal baths and paprika dishes.",

    // Serbia
    "A Nordic island country known for its innovative technology and renewable energy.",

    // Slovakia
    "A landlocked country in the Alps known for its stunning landscapes and financial sector.",

    // Slovenia
    "A vast country in Eastern Europe with diverse cultures and landscapes.",

    // Spain
    "A country consisting of four nations, each with its own unique identity and culture.",

    // Sweden
    "The world's smallest independent state, known for its religious and historical significance.",

     // Switzerland
     "Known for its stunning Alpine landscapes, precision watchmaking, and chocolate.",

     // Ukraine
     "The largest country in Europe by land area, known for its diverse culture and history.",
 
     // United Kingdom
     "Comprising four nations, each with its own identity and culture, and famous for its royal heritage.",
 
     // Vatican City
     "The world's smallest independent state, the spiritual and administrative center of the Catholic Church."
];
  
  const random = Math.floor(Math.random() * Countries.length);
  const randomCountry = (random, Countries[random]);
  const randomFact = (random, countryFacts[random]);

  console.log(randomCountry);
  console.log(randomFact);
  hintText.textContent = randomFact;
  hintText.style.color = 'rgb(219, 219, 219)';


function checkGuess(){
    const userGuess = String(guessField.value);
    const submitedGuess = userGuess.toLowerCase();

    if(guessCount === 0){
        yeh.textContent = 'Ermmm'
    }
    
    if(submitedGuess === randomCountry){
        winAudio.play();
        yeh.style.backgroundColor = 'green';
        yeh.textContent = 'Well done you got it right'
        setGameOver();
    }else if(guessCount === 9){
        skillIssue.play();
        yeh.style.backgroundColor = 'red';
        yeh.textContent = '!!!SKILL ISSUE!!!'
        setGameOver();
    }else{
        yeh.textContent = 'Wrong!';
        yeh.style.backgroundColor = 'red';
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();

}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    yeh.style.backgroundColor = '#292929';
    randomNumber = Math.floor(Math.random() * 100) + 1;
    yeh.textContent = '';
  }
});
