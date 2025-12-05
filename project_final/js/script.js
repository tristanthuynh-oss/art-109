// -----------------------------
// 1. Wizard quiz data code
// -----------------------------

// -----------------------------
// This is where I put the questions and the answers, and all the stuff relating to that for like the phase
// one of this website, it's in like batches cause honestly its a fucking headache to do this
// and this how Professor Durie taught how to do it so if it sucks blame him lol
// jk I love Durie he's sick asf
// -----------------------------




// these are the questions, I have no idea how API works so isntead of using that I just made it local-ish version here
// It makes this a little longer but I think it should work all the same yeh?
const questions = [
    {
        text: "Your wizard friends ask you, what is your favorite wizard drink?",
        answers: [
            {
                label: "Flonzeberry Orchard Juice.",
                image: "assets/images/wizard_magic_placeholder_image.jpeg",
                element: "fire",
                style: "bold",
            },
            {
                label: "Darkwhisper Mega Coffee.",
                image: "assets/images/wizard_magic_placeholder_image.jpeg",
                element: "ice",
                style: "wise",
            },
            {
                label: "Coke.",
                image: "assets/images/wizard_magic_placeholder_image.jpeg",
                element: "money",
                style: "lame",
            },
        ],
    },
    {
        text: "If you had a WIZARD PET what would it be?.",
        answers: [
            {
                label: "A gryphon, who's wings would shadow the fields in it's size.",
                image: "assets/images/wizard_magic_placeholder_image.jpeg",
                element: "fire",
                style: "dramatic",
            },
            {
                label: "A cat made out of shadows and magic, because that's sick.",
                image: "assets/images/wizard_magic_placeholder_image.jpeg",
                element: "ice",
                style: "wise",
            },
            {
                label: "Im allergic to pets.",
                image: "assets/images/wizard_magic_placeholder_image.jpeg",
                element: "money",
                style: "lame",
            },
        ],
    },
    {
        text: "How do you prefer to cast your spells?",
        answers: [
            {
                label: "LOUD, SHORT, POWERFUl, DIE!.",
                image: "assets/images/wizard_magic_placeholder_image.jpeg",
                element: "fire",
                style: "bold",
            },
            {
                label: "I would speak in cold magical words, to really give it the weight.",
                image: "assets/images/wizard_magic_placeholder_image.jpeg",
                element: "ice",
                style: "calm",
            },
            {
                label: "A gun.",
                image: "assets/images/wizard_magic_placeholder_image.jpeg",
                element: "money",
                style: "lame",
            },
        ],
    },
    {
        text: "If a WIZARD said you were cute, what would you say?",
        answers: [
            {
                label: "WHO IS THIS, I DEMAND TO KNOW WHO DEEMED ME CUTE.",
                image: "assets/images/wizard_magic_placeholder_image.jpeg",
                element: "fire",
                style: "dramatic",
            },
            {
                label: "Say nothing, stare. Stare until they break from your eyes of judgement.",
                image: "assets/images/wizard_magic_placeholder_image.jpeg",
                element: "ice",
                style: "wise",
            },
            {
                label: "Ummm, I don't knowwwwww :^3.",
                image: "assets/images/wizard_magic_placeholder_image.jpeg",
                element: "money",
                style: "lame",
            },
        ],
    },
    
];

// cool first name 
const firstNameByStyle = {
    bold: ["Arthur", "Angus", "Ignara", "Pyra", "Big Boy"],
    wise: ["Jeff", "Altair", "Serana", "Lunara", "Snoop"],
    mysterious: ["Nyx", "Vesper", "Shade", "Micheal",  "Glimpdo"],
    dramatic: ["Illidan", "Malfurion", "Warcraft", "Metetion", "Lobster"],
    calm: ["Gra'ha", "Mikkela", "Telandris", "Steve", "Biggie"],
    arcane: ["Feloris", "Super Magic", "David", "Gandaf", "Doomboldoore"],
    lame: ["John", "Steve", "Jimothy", "Jim", "Glifdoglompdofic" ],
};

// cool last name
const lastNameByElement = {
    fire: ["Flamestrike", "Fireball", "Ignis", "Redson", "firemandudeguy"],
    ice: ["Frostheart", "Icepants", "Snowgrave", "Brrrson","RAYOFCOLD"],
    money: ["Smith", "Copperbottom", "Glumpdo", "Moneypants"],
};

// Sick power
const powerTitleByElement = {
    fire: "Pyromancy : Flamecaller, Firestarter, Convicted Arsonist, Fireman, William Afton",
    ice: "Frost : Cryomancer, Frostweaver, Frostguy, Frostman",
    money: "Gatcha : Master of the Shadow Wizard Money Gang",
};

const powerDescription = {
    fire: "You are destined to wield the fire, and the flame. Such a power is pretty sick, but also pretty basic. but basic is close to based, which is what you are. My little pogchamp",
    ice: "Wooow, you must be soooo coool, i bet your favorite ice cream is cookies and cream. Nah, the orbs thinks you are super cool in a literal way. So understand the power of the ice and freeze stuff",
    money: "You are really good, at gatcha games.",
};


let currQuestion = 0;
const selections = new Array(questions.length).fill(null);

const quesEl = document.getElementById("ques");
const optEl = document.getElementById("opt");
const scoreEl = document.getElementById("score");
const mainBtn = document.getElementById("btn");

const endButtons = document.getElementById("end-buttons");
const retryBtn = document.getElementById("retry-btn");
const continueBtn = document.getElementById("continue-btn");

// -----------------------------
// loads the questions and switches them out
// -----------------------------

function loadQues() {
    const current = questions[currQuestion];

   
    quesEl.textContent = current.text;

    optEl.innerHTML = "";

    current.answers.forEach((answer, index) => {
        const optionWrapper = document.createElement("label");
        optionWrapper.className = "option-card";

        const img = document.createElement("img");
        img.src = answer.image;
        img.alt = answer.label;
        img.className = "option-image";

        const bottom = document.createElement("div");
        bottom.className = "option-bottom";

        const choice = document.createElement("input");
        choice.type = "radio";
        choice.name = "answer";
        choice.value = String(index);

        if (selections[currQuestion] === index) {
            choice.checked = true;
        }

        const choiceLabel = document.createElement("span");
        choiceLabel.className = "option-label";
        choiceLabel.textContent = answer.label;

        bottom.appendChild(choice);
        bottom.appendChild(choiceLabel);

        optionWrapper.appendChild(img);
        optionWrapper.appendChild(bottom);

        optEl.appendChild(optionWrapper);
    });

   
    scoreEl.textContent = `Question ${currQuestion + 1} of ${questions.length}`;


    mainBtn.textContent =
        currQuestion === questions.length - 1 ? "WHAT DOES THE ORB REVEAL" : "I HAVE SPOKEN";
}

// -----------------------------
// this determiines the question results 
// -----------------------------

function computeResult() {
    const elementScores = {};
    const styleScores = {};

    selections.forEach((answerIndex, qIndex) => {
        if (answerIndex == null) return;
        const answer = questions[qIndex].answers[answerIndex];

        if (answer.element) {
            elementScores[answer.element] =
                (elementScores[answer.element] || 0) + 1;
        }

        if (answer.style) {
            styleScores[answer.style] =
                (styleScores[answer.style] || 0) + 1;
        }
    });

    const topElement = getTopKey(elementScores, "fire");
    const topStyle = getTopKey(styleScores, "bold");

    const wizardName = buildWizardName(topStyle, topElement);
    const powerTitle =
        powerTitleByElement[topElement] || "MAGIC MAN : DOER OF THE THINGS";
    const description = powerDescription[topElement] || "";

    return { topElement, topStyle, wizardName, powerTitle, description };
}

function getTopKey(scoreObj, fallbackKey) {
    let bestKey = fallbackKey;
    let bestScore = -Infinity;

    for (const [key, value] of Object.entries(scoreObj)) {
        if (value > bestScore) {
            bestScore = value;
            bestKey = key;
        }
    }
    return bestKey;
}

function buildWizardName(style, element) {
    const firstOptions = firstNameByStyle[style] || ["Steve", "Jobs"];
    const lastOptions = lastNameByElement[element] || ["Stevejobs"];

    const first =
        firstOptions[Math.floor(Math.random() * firstOptions.length)];
    const last =
        lastOptions[Math.floor(Math.random() * lastOptions.length)];

    return `${first} ${last}`;
}

// -----------------------------
// What kind of wizard are you my guy/gal/other/neither/whatever/?
// -----------------------------

function showResults() {
    const { topElement, topStyle, wizardName, powerTitle, description } =
        computeResult();


    const resultData = { name: wizardName, element: topElement, style: topStyle };
    try {
        localStorage.setItem("wizardQuizResult", JSON.stringify(resultData));
    } catch (e) {}


    quesEl.innerHTML = `
        <h2>YOUR WIZARD NAME:</h2>
        <h3>${wizardName}</h3>
    `;

    optEl.innerHTML = `
        <p><strong>YOUR WIZARD POWER:</strong> ${powerTitle}</p>
        <p>${description}</p>
        <p><em>(AFFFINITY: ${topElement}, PERSONALITY TYPE: ${topStyle})</em></p>
    `;

    scoreEl.textContent = "";


    mainBtn.classList.add("hidden");
    endButtons.classList.remove("hidden");
}

// -----------------------------
// 6. Loads the next thing and makes sure you answer the stupdi question
// -----------------------------

function nextQuestion() {
    if (currQuestion < questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        showResults();
    }
}

function checkAns() {
    const selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("YOU DARE NOT GIVE ANSWER!?!?! ANSWER THE QUESTION.");
        return;
    }

    const selectedIndex = Number(selected.value);
    selections[currQuestion] = selectedIndex;

    nextQuestion();
}

// -----------------------------
// the end of the questions thing
// -----------------------------

function resetQuiz() {
    currQuestion = 0;
    for (let i = 0; i < selections.length; i++) {
        selections[i] = null;
    }

    mainBtn.classList.remove("hidden");
    endButtons.classList.add("hidden");

    loadQues();
}

retryBtn.addEventListener("click", resetQuiz);

continueBtn.addEventListener("click", () => {

    alert("Shh, dont tell lark this isnt done yet");
});



loadQues();
