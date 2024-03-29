"use strict";

const murderSchoolForm = document.querySelector(".quiz--murder-school");
const murderSchoolResult = document.querySelector(".quiz--result04El");
const murderSchoolP = document.querySelector(".p--answer04El");
const btn04El = document.querySelector(".btn--4");
const murderSchoolA04El = document.querySelector(".ms01--landscaper");
const murderSchoolB04El = document.querySelector(".ms02--coach");
const murderSchoolC04El = document.querySelector(".ms03--principal");
const murderSchoolD04El = document.querySelector(".ms04--math");
const story04El = document.querySelector(".story--4");
const btnNextStory04El = document.querySelector(".btn--next04El");
const containerNextStory04El = document.querySelector(
  ".container-btn--next04El"
);
const containerBtn04El = document.querySelector(".container-btn--4");

function murderSchool_Win() {
  murderSchoolP.innerHTML = quiz_murderSchool.correct;
  murderSchoolP.classList.remove("choice--incorrect");
  murderSchoolP.classList.add("choice--correct");
  disableCheckedBoxes_greenHouse();
  containerBtn04El.classList.toggle("hidden");
  containerNextStory04El.classList.toggle("hidden");
}

function murderSchool_Wrong() {
  murderSchoolP.innerHTML = quiz_murderSchool.incorrect;
  murderSchoolP.classList.remove("choice--correct");
  murderSchoolP.classList.add("choice--incorrect");
}

function btn_level_04() {
  if (murderSchoolD04El.checked === true && scoreBoard.attempt === 1) {
    scoreBoard.potentialPoints = scoreBoard.rounds.one;
    scoreBoard.score += scoreBoard.potentialPoints;
    totalScoreEl.textContent = scoreBoard.score;
    murderSchool_Win();
    console.log(scoreBoard);
  } else if (murderSchoolD04El.checked === true && scoreBoard.attempt === 2) {
    scoreBoard.potentialPoints = scoreBoard.rounds.two;
    scoreBoard.score += scoreBoard.potentialPoints;
    totalScoreEl.textContent = scoreBoard.score;
    murderSchool_Win();
    console.log(scoreBoard);
  } else if (murderSchoolD04El.checked === true && scoreBoard.attempt === 3) {
    scoreBoard.potentialPoints = scoreBoard.rounds.three;
    scoreBoard.score += scoreBoard.potentialPoints;
    totalScoreEl.textContent = scoreBoard.score;
    murderSchool_Win();
    console.log(scoreBoard);
  } else if (
    murderSchoolA04El.checked === true ||
    murderSchoolB04El.checked === true ||
    murderSchoolC04El.checked === true
  ) {
    scoreBoard.attempt++;
    scoreBoard.potentialPoints--;
    scoreBoard.potentialPoints--;
    potentialPoints.textContent = scoreBoard.potentialPoints;
    attemptTurnEl.textContent = scoreBoard.attempt;
    murderSchool_Wrong();
    console.log(scoreBoard);
  }
  if (scoreBoard.attempt > 3) {
    murderSchoolP.innerHTML = quiz_murderSchool.failed;
    scoreBoard.attempt = 3;
    scoreBoard.potentialPoints = 0;
    disabledCheckedBoxes_murderSchool();
    attemptTurnEl.textContent = scoreBoard.attempt;
    potentialPoints.textContent = scoreBoard.potentialPoints;
    containerNextStory04El.classList.toggle("hidden");
    containerBtn04El.classList.toggle("hidden");
    console.log(scoreBoard);
  }
}

function next_level_04El() {
  resetChoiceResults();
  story04El.classList.toggle("hidden");
  story05El.classList.toggle("hidden");
  scoreBoard.level++;
  // turn01El++;
  // storyTurnEl.textContent = turn01El;
  storyTurnEl.textContent = scoreBoard.level;
  init();
}

btn04El.addEventListener("click", btn_level_04);
btnNextStory04El.addEventListener("click", next_level_04El);

// function btnStory04() {
//   murderSchoolP.innerHTML = "";
//   guiltyCourtP.innerHTML = "";
//   grnHouseP.innerHTML = "";
//   fVisitP.innerHTML = "";
//   // let p = document.createElement("p");
//   if (murderSchoolD04El.checked === true && currentAttempt === 1) {
//     murderSchoolP.innerHTML += `Correct Answer! It was the Math teacher. Click below to begin the next story!`;
//     murderSchoolP.classList.remove("choice--incorrect");
//     murderSchoolP.classList.add("choice--correct");
//     murderSchoolResult.appendChild(murderSchoolP);
//     currentScore += pointGiven05;
//     totalScoreEl.textContent = currentScore;
//     murderSchoolA04El.disabled = true;
//     murderSchoolB04El.disabled = true;
//     murderSchoolC04El.disabled = true;
//     murderSchoolD04El.disabled = true;
//     containerBtn04El.classList.toggle("hidden");
//     containerNextStory04El.classList.toggle("hidden");
//     // story02El.classList.toggle("hidden");
//     storyTurnEl.textContent = turn01El;
//     // story04El.classList.toggle("hidden");
//   } else if (murderSchoolD04El.checked === true && currentAttempt === 2) {
//     murderSchoolP.innerHTML += `Correct Answer! It was the Math teacher. Click below to begin the next story!`;
//     murderSchoolP.classList.remove("choice--incorrect");
//     murderSchoolP.classList.add("choice--correct");
//     murderSchoolResult.appendChild(murderSchoolP);
//     currentScore += pointGiven03;
//     totalScoreEl.textContent = currentScore;
//     murderSchoolA04El.disabled = true;
//     murderSchoolB04El.disabled = true;
//     murderSchoolC04El.disabled = true;
//     murderSchoolD04El.disabled = true;
//     containerBtn04El.classList.toggle("hidden");
//     containerNextStory04El.classList.toggle("hidden");
//     // story02El.classList.toggle("hidden");
//     storyTurnEl.textContent = turn01El;
//     // story04El.classList.toggle("hidden");
//   } else if (murderSchoolD04El.checked === true && currentAttempt === 3) {
//     murderSchoolP.innerHTML += `Correct Answer! It was the Math teacher. Click below to begin the next story!`;
//     murderSchoolP.classList.remove("choice--incorrect");
//     murderSchoolP.classList.add("choice--correct");
//     murderSchoolResult.appendChild(murderSchoolP);
//     currentScore += pointGiven01;
//     totalScoreEl.textContent = currentScore;
//     murderSchoolA04El.disabled = true;
//     murderSchoolB04El.disabled = true;
//     murderSchoolC04El.disabled = true;
//     murderSchoolD04El.disabled = true;
//     containerBtn04El.classList.toggle("hidden");
//     containerNextStory04El.classList.toggle("hidden");
//     // story02El.classList.toggle("hidden");
//     storyTurnEl.textContent = turn01El;
//     // story04El.classList.toggle("hidden");
//   } else if (
//     murderSchoolA04El.checked === true ||
//     murderSchoolB04El.checked === true ||
//     murderSchoolC04El.checked === true
//   ) {
//     murderSchoolP.innerHTML += `Wrong Answer! Please try again!`;
//     murderSchoolP.classList.remove("choice--correct");
//     murderSchoolP.classList.add("choice--incorrect");
//     murderSchoolResult.appendChild(murderSchoolP);
//     currentAttempt++;
//     currentPotentialPoints -= pointTaken02;
//     attemptTurnEl.textContent = currentAttempt;
//     potentialPoints.textContent = currentPotentialPoints;

//     console.log(`Wrong answer try again`);
//   }
//   if (currentAttempt > 3) {
//     murderSchoolP.innerHTML = "";
//     murderSchoolP.innerHTML += `Good try. It looks like you couldn't solve this mystery. Click below to begin the next story!`;
//     currentAttempt--;
//     murderSchoolA04El.disabled = true;
//     murderSchoolB04El.disabled = true;
//     murderSchoolC04El.disabled = true;
//     murderSchoolD04El.disabled = true;
//     attemptTurnEl.textContent = 3;
//     potentialPoints.textContent = 0;
//     containerNextStory04El.classList.toggle("hidden");
//     containerBtn04El.classList.toggle("hidden");
//   }
// }
// function nextStory04El() {
//   story04El.classList.toggle("hidden");
//   story05El.classList.toggle("hidden");
//   turn01El++;
//   storyTurnEl.textContent = turn01El;
//   init();
// }

// btn04El.addEventListener("click", btnStory04);
// btnNextStory04El.addEventListener("click", nextStory04El);
