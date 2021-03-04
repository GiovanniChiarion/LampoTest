// select all elements by id
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const form = document.getElementById("form");
const submit = document.getElementById("submit");
const loader = document.getElementById("loader");
const container = document.getElementById("container");


// create questions
let questions = [
  {
    question: "Il panino ludro è ripieno di ...",
    imgSrc: "Stuffs/img/panin.jpeg",
    choiceA: "Mortadella",
    choiceB: "Tutto",
    choiceC: "Amore",
    choiceD: "Patatine",
    correct: "B",
    after: {
      embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/PvUwLibQt28?start=59" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
  },
  {
    question: "Strent o ...",
    imgSrc: "Stuffs/img/strenght.gif",
    choiceA: "Zucch'n",
    choiceB: "Attaccaspeed",
    choiceC: "Intelligenia",
    choiceD: "Resistency",
    correct: "B",
  },
  {
    question: "Sento il rumore degli specchi ...",
    imgSrc: "Stuffs/img/mirror.gif",
    choiceA: "... e tu che ti ci arrampichi",
    choiceB: "... e la vita che se ne va",
    choiceC: "... e il riflesso delle tue stronzate",
    choiceD: "... e le tue dita su di essi",
    correct: "D",
  },
  {
    question: "I'm pretty sure that ...",
    imgSrc: "Stuffs/img/bridge.gif",
    choiceA: "... it's not meant to be like that",
    choiceB: "... you're an asshole, BITCH!",
    choiceC: "... you're drunk brah",
    choiceD: "... you can drink it and die instantly",
    correct: "A",
  },
  {
    question: "Qual è la probabilità di ottenere 4 croci in 4 lanci consecutivi di una moneta?",
    imgSrc: "Stuffs/img/coin.gif",
    choiceA: "Circa il 16%",
    choiceB: "Circa il 6%",
    choiceC: "Circa il 18%",
    choiceD: "CIrca il 3%",
    correct: "B",
  },
  {
    question: "Il cibo che odio di più:",
    imgSrc: "Stuffs/img/hate.gif",
    choiceA: "Broccoli",
    choiceB: "Sedano",
    choiceC: "Formaggio",
    choiceD: "Pesce",
    correct: "C",
  },
  {
    question: "Dove ho trovato il mio signore?",
    imgSrc: "Stuffs/img/jesus.gif",
    choiceA: "Nella strada del mio cuore",
    choiceB: "Nella pizza al salamino",
    choiceC: "Nella uva del destino",
    choiceD: "Nei sentieri dell'amore",
    correct: "D",
    after: {
      embed: '<video width="320" height="240" controls autoplay><source src="Stuffs/vid/sentieri.mp4" type="video/mp4">Your browser does not support the video tag.</video>'
    }
  },
  {
    question: "Qual è il nome del Maestro?",
    imgSrc: "Stuffs/img/master.gif",
    choiceA: "Andrea",
    choiceB: "Sommo",
    choiceC: "Domenico",
    choiceD: "Luke",
    correct: "A",
    after: {
      embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gfMqGtsZiLk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
  },
  {
    question: "Il mio animale preferito?",
    imgSrc: "Stuffs/img/animal.gif",
    choiceA: "Gatto",
    choiceB: "Echidna",
    choiceC: "Elefante",
    choiceD: "Cane",
    correct: "D",
  },
  {
    question: "La mia classica apertura a scacchi con il bianco?",
    imgSrc: "Stuffs/img/chess.gif",
    choiceA: "e4",
    choiceB: "e3",
    choiceC: "Cavallo in f3",
    choiceD: "Cavallo in c3",
    correct: "A",
  },
  {
    question: "Dove si trova il più celebre Gonzo?",
    imgSrc: "Stuffs/img/gonzo.jpg",
    choiceA: "Mastro Lolita",
    choiceB: "Masterchef Italia Stagione 2",
    choiceC: "The Pink Guy",
    choiceD: "Welcome to the NHK",
    correct: "D",
    after: {
      embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/i1G7p-N7MmU?start=13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }

  },
  {
    question: "Cos'è l'Astronave Madre?",
    imgSrc: "Stuffs/img/space.gif",
    choiceA: "Una teoria complottara dei terrapiattisti",
    choiceB: "Una vecchia canzone romantica degli anni '50",
    choiceC: "Me Medesimo",
    choiceD: "Un'importantissimo achievement di Startdew Valley",
    correct: "C",
    after: {
      embed: '<img src="Stuffs/img/astronave.png" alt="La vera Astronave Madre" width="350" height="400">'
    }
  },
  {
    question: "Chi dice: 'Give me the pussy, boss'?",
    imgSrc: "Stuffs/img/pussy.gif",
    choiceA: "La signora in giallo",
    choiceB: "Filthy Frank",
    choiceC: "Sam di Colorado Cafè",
    choiceD: "Buco, durante una crisi depressiva",
    correct: "B",
  },
  {
    question: "Chi ha fatto l'ancient yodel of wisdom, peace and justice?",
    imgSrc: "Stuffs/img/franz.gif",
    choiceA: "Takeo Ischi",
    choiceB: "Franzl Lang ",
    choiceC: "SpeedWagone quando ha assaggiato l'olio extravergine d'oliva CONAD",
    choiceD: "Sans di Undertale",
    correct: "A",
    after: {
      embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/miomuSGoPzI?start=162" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
  },
  {
    question: "Come si intitola la musica di sottofondo?",
    imgSrc: "Stuffs/img/8bit.gif",
    choiceA: "8-Bit Joky Joke",
    choiceB: "Walkin' the Happy Snakes",
    choiceC: "Lancer's Theme",
    choiceD: "T for Troll",
    correct: "C",
  }
];

let username; let password;

submit.addEventListener('click',()=>{
  username = form.username.value;
  password = form.password.value;
  if (username==="Lampo" && password === "miao"){
    loader.style.display = "block";
    container.style.display = "block";
    document.getElementsByClassName("login-box")[0].style.display="none"
    myLoader();
  }
});

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

questions = shuffle(questions); // Shuffling of the questions

// Extra variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 20; // 20s

let TIMER;
let score = 0;

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

let music = new Audio();
start.addEventListener("click", startQuiz, music);

// start quiz
function startQuiz() {
  // let music = new Audio();
  music.src = "Stuffs/music/Lancer.m4a";
  music.play();
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
  // window.addEventListener("blur", cheaterBehaviour);
  window.addEventListener("blur", cheaterBehaviour);
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// counter render

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = questionTime - count; // Count down implementation. 

    count++;
  } else {
    count = 0;
    // change progress color to red
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  count = 0;

  // AGGIUNTA PER L'AFTER
  if (questions[runningQuestion].after != undefined) {
    clearPage()
    document.getElementById("after").innerHTML = questions[runningQuestion].after.embed + document.getElementById("after").innerHTML;
  }

  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
  var music = new Audio();
  music.src = "Stuffs/music/yeah.mp3";
  music.play();
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
  var music = new Audio();
  music.src = "Stuffs/music/Huh.mp3";
  music.play();
}

// score render
function scoreRender() {
  scoreDiv.style.display = "block";
  var music = new Audio();
  music.src = "Stuffs/music/GameOver.mp3";
  music.play();

  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);

  // choose the image based on the scorePerCent
  let img =
    scorePerCent >= 80
      ? "Stuffs/img/5.png"
      : scorePerCent >= 60
        ? "Stuffs/img/4.png"
        : scorePerCent >= 40
          ? "Stuffs/img/3.png"
          : scorePerCent >= 20
            ? "Stuffs/img/2.png"
            : "Stuffs/img/1.png";

  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}

//////////////////////////////////////////////////////
var myVar;

function myLoader() {
  myVar = setTimeout(function () {
    let el = document.getElementById('starter');
    el.style.display = "block";//opacity:0; animation: fadeIn 3s ease-in forwards;
    el.style.opacity = 0;
    el.style.animation = "fadeIn 3s ease-in forwards";
  }, 20000)
};


function showPage() {
  document.getElementById("loader").style.display = "none";
}

function clearPage() {
  music.pause();
  clearInterval(TIMER);
  window.removeEventListener('blur', cheaterBehaviour);
  document.getElementById("container").style.display = "none";
  document.getElementById("after").style.display = "block";
}

function nextPage() {
  music.play();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
  window.addEventListener("blur", cheaterBehaviour);
  let a = document.getElementById("after");
  a.firstElementChild.remove()
  a.style.display = "none";
  document.getElementById("container").style.display = "block";
}
let end = new Audio();

function cheaterBehaviour() {
  window.removeEventListener("blur", cheaterBehaviour);
  window.addEventListener("focus", function fucked() {
    window.removeEventListener("focus",fucked)
    console.log('YOU CHEATED, BITCH!');
    music.pause();
    clearPage()
    document.getElementById("after").style.display = "none";
    end.src = "Stuffs/music/END.m4a";
    end.play();
    document.querySelector("body").innerHTML+=
    `
    <p class="fade-in" id="sameloader">
    <b>Peccato!</b><br /><br />
    Da un lato sono molto divertito, dall'altro un po' deluso.<br />
    Ti avevo avvertito di non barare o anche solo di <br />
    non cliccare da qualche altra parte in questo caso, <br />
    la tua curiosità è stata la tua rovina.<br /><br />
    <b>Addio per sempre.</b> <br />
    </p>
    `;
  })
}
