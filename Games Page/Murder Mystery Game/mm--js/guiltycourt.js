"use strict";

const guiltyCourtForm = document.querySelector(".quiz--guilty-court");
const guiltyCourtResult = document.querySelector(".quiz--result03El");
const guiltyCourtP = document.querySelector(".p--answer03El");
const btn03El = document.querySelector(".btn--3");
const guiltyCourtA03El = document.querySelector(".gc01--killed");
const guiltyCourtB03El = document.querySelector(".gc02--mistress");
const guiltyCourtC03El = document.querySelector(".gc03--guilty");
const guiltyCourtD03El = document.querySelector(".gc04--suicide");
const story03El = document.querySelector(".story--3");
const btnNextStory03El = document.querySelector(".btn--next03El");
const containerNextStory03El = document.querySelector(
  ".container-btn--next03El"
);
const containerBtn03El = document.querySelector(".container-btn--3");

function guiltyCourt_Win() {
  guiltyCourtP.innerHTML = quiz_guiltyCourt.correct;
  guiltyCourtP.classList.remove("choice--incorrect");
  guiltyCourtP.classList.add("choice--correct");
  disableCheckedBoxes_greenHouse();
  containerBtn03El.classList.toggle("hidden");
  containerNextStory03El.classList.toggle("hidden");
}

function guiltyCourt_Wrong() {
  guiltyCourtP.innerHTML = quiz_guiltyCourt.incorrect;
  guiltyCourtP.classList.remove("choice--correct");
  guiltyCourtP.classList.add("choice--incorrect");
}

function btn_level_03() {
  if (guiltyCourtA03El.checked === true && scoreBoard.attempt === 1) {
    scoreBoard.potentialPoints = scoreBoard.rounds.one;
    scoreBoard.score += scoreBoard.potentialPoints;
    totalScoreEl.textContent = scoreBoard.score;
    guiltyCourt_Win();
    console.log(scoreBoard);
  } else if (guiltyCourtA03El.checked === true && scoreBoard.attempt === 2) {
    scoreBoard.potentialPoints = scoreBoard.rounds.two;
    scoreBoard.score += scoreBoard.potentialPoints;
    totalScoreEl.textContent = scoreBoard.score;
    guiltyCourt_Win();
    console.log(scoreBoard);
  } else if (guiltyCourtA03El.checked === true && scoreBoard.attempt === 3) {
    scoreBoard.potentialPoints = scoreBoard.rounds.three;
    scoreBoard.score += scoreBoard.potentialPoints;
    totalScoreEl.textContent = scoreBoard.score;
    guiltyCourt_Win();
    console.log(scoreBoard);
  } else if (
    guiltyCourtB03El.checked === true ||
    guiltyCourtC03El.checked === true ||
    guiltyCourtD03El.checked === true
  ) {
    scoreBoard.attempt++;
    scoreBoard.potentialPoints--;
    scoreBoard.potentialPoints--;
    potentialPoints.textContent = scoreBoard.potentialPoints;
    attemptTurnEl.textContent = scoreBoard.attempt;
    guiltyCourt_Wrong();
    console.log(scoreBoard);
  }
  if (scoreBoard.attempt > 3) {
    guiltyCourtP.innerHTML = quiz_guiltyCourt.failed;
    scoreBoard.attempt = 3;
    scoreBoard.potentialPoints = 0;
    disabledCheckedBoxes_guiltyCourt();
    attemptTurnEl.textContent = scoreBoard.attempt;
    potentialPoints.textContent = scoreBoard.potentialPoints;
    containerNextStory03El.classList.toggle("hidden");
    containerBtn03El.classList.toggle("hidden");
    console.log(scoreBoard);
  }
}

function next_level_03El() {
  resetChoiceResults();

  story03El.classList.toggle("hidden");
  story04El.classList.toggle("hidden");
  scoreBoard.level++;
  // turn01El++;
  // storyTurnEl.textContent = turn01El;
  storyTurnEl.textContent = scoreBoard.level;
  init();
}

btn03El.addEventListener("click", btn_level_03);
btnNextStory03El.addEventListener("click", next_level_03El);

// function btnStory03() {
//   grnHouseP.innerHTML = "";
//   fVisitP.innerHTML = "";
//   guiltyCourtP.innerHTML = "";
//   // let p = document.createElement("p");
//   if (guiltyCourtA03El.checked === true && currentAttempt === 1) {
//     guiltyCourtP.innerHTML += `Correct Answer! She knew that her husband wouldn’t walk through
//     them because she had killed him. Click below to begin the next story!`;
//     guiltyCourtP.classList.remove("choice--incorrect");
//     guiltyCourtP.classList.add("choice--correct");
//     guiltyCourtResult.appendChild(guiltyCourtP);
//     currentScore += pointGiven05;
//     totalScoreEl.textContent = currentScore;
//     guiltyCourtA03El.disabled = true;
//     guiltyCourtB03El.disabled = true;
//     guiltyCourtC03El.disabled = true;
//     guiltyCourtD03El.disabled = true;
//     containerBtn03El.classList.toggle("hidden");
//     containerNextStory03El.classList.toggle("hidden");
//     // story02El.classList.toggle("hidden");
//     storyTurnEl.textContent = turn01El;
//     // story03El.classList.toggle("hidden");
//   } else if (guiltyCourtA03El.checked === true && currentAttempt === 2) {
//     guiltyCourtP.innerHTML += `Correct Answer! She knew that her husband wouldn’t walk through
//     them because she had killed him. Click below to begin the next story!`;
//     guiltyCourtP.classList.remove("choice--incorrect");
//     guiltyCourtP.classList.add("choice--correct");
//     guiltyCourtResult.appendChild(guiltyCourtP);
//     currentScore += pointGiven03;
//     totalScoreEl.textContent = currentScore;
//     guiltyCourtA03El.disabled = true;
//     guiltyCourtB03El.disabled = true;
//     guiltyCourtC03El.disabled = true;
//     guiltyCourtD03El.disabled = true;
//     containerBtn03El.classList.toggle("hidden");
//     containerNextStory03El.classList.toggle("hidden");
//     // story02El.classList.toggle("hidden");
//     storyTurnEl.textContent = turn01El;
//     // story03El.classList.toggle("hidden");
//   } else if (guiltyCourtA03El.checked === true && currentAttempt === 3) {
//     guiltyCourtP.innerHTML += `Correct Answer! She knew that her husband wouldn’t walk through
//     them because she had killed him. Click below to begin the next story!`;
//     guiltyCourtP.classList.remove("choice--incorrect");
//     guiltyCourtP.classList.add("choice--correct");
//     guiltyCourtResult.appendChild(guiltyCourtP);
//     currentScore += pointGiven01;
//     totalScoreEl.textContent = currentScore;
//     guiltyCourtA03El.disabled = true;
//     guiltyCourtB03El.disabled = true;
//     guiltyCourtC03El.disabled = true;
//     guiltyCourtD03El.disabled = true;
//     containerBtn03El.classList.toggle("hidden");
//     containerNextStory03El.classList.toggle("hidden");
//     // story02El.classList.toggle("hidden");
//     storyTurnEl.textContent = turn01El;
//     // story03El.classList.toggle("hidden");
//   } else if (
//     guiltyCourtB03El.checked === true ||
//     guiltyCourtC03El.checked === true ||
//     guiltyCourtD03El.checked === true
//   ) {
//     guiltyCourtP.innerHTML += `Wrong Answer! Please try again!`;
//     guiltyCourtP.classList.remove("choice--correct");
//     guiltyCourtP.classList.add("choice--incorrect");
//     guiltyCourtResult.appendChild(guiltyCourtP);
//     currentAttempt++;
//     currentPotentialPoints -= pointTaken02;
//     attemptTurnEl.textContent = currentAttempt;
//     potentialPoints.textContent = currentPotentialPoints;

//     console.log(`Wrong answer try again`);
//   }
//   if (currentAttempt > 3) {
//     guiltyCourtP.innerHTML = "";
//     guiltyCourtP.innerHTML += `Good try. It looks like you couldn't solve this mystery. Click below to begin the next story!`;
//     currentAttempt--;
//     guiltyCourtA03El.disabled = true;
//     guiltyCourtB03El.disabled = true;
//     guiltyCourtC03El.disabled = true;
//     guiltyCourtD03El.disabled = true;
//     attemptTurnEl.textContent = 3;
//     potentialPoints.textContent = 0;
//     containerNextStory03El.classList.toggle("hidden");
//     containerBtn03El.classList.toggle("hidden");
//   }
// }
// function nextStory03El() {
//   story03El.classList.toggle("hidden");
//   story04El.classList.toggle("hidden");
//   turn01El++;
//   storyTurnEl.textContent = turn01El;
//   init();
// }

// btn03El.addEventListener("click", btnStory03);
// btnNextStory03El.addEventListener("click", nextStory03El);
