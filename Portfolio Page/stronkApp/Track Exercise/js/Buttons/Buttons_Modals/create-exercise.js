"use strict";

// Arrays

const exerciseWordBank = [];
let exercises_Barbell = [];
let exercises_Body = [];
let exercises_Dumbbell = [];
let exercises_Rope = [];

// Input variables
const exerciseWordBank_Input = document.querySelector(
  ".input--exerciseStorage"
);
const exerciseStorage_Title = document.querySelector(".title--exerciseStorage");

// Options
const option_Barbell = document.querySelector(".barbell");
const option_Body = document.querySelector(".body");
const option_Rope = document.querySelector(".rope");
const option_Dumbbell = document.querySelector(".dumbbell");
const select_Equipment = document.querySelector(".select--equipment");
// Container
const containerExerciseStorage = document.querySelector(
  ".container--exerciseStorage"
);
const buttons_AddExerciseModal = document.getElementsByClassName("btn");
// Push to Exercise Name Storage
const btn_PushToWordBank = document.querySelector(
  ".btn--add-to-exercise-storage"
);

// const createDumbbellExercise = function (name) {
//   window.localStorage.setItem("Dumbbell Exercise", name);

//   exercises_Dumbbell.push(localStorage.getItem("Dumbbell Exercise"));
//   localStorage.setItem(
//     "exercises_Dumbbell",
//     JSON.stringify(exercises_Dumbbell)
//   );
// };

// localStorage.setItem("exercises_Dumbbell", JSON.stringify(exercises_Dumbbell));
// localStorage.setItem("exercises_Barbell", JSON.stringify(exercises_Barbell));
// localStorage.setItem("exercises_Rope", JSON.stringify(exercises_Rope));
// localStorage.setItem("exercises_Body", JSON.stringify(exercises_Body));

// parsed_Exercises();

let temp_Barbell, temp_Dumbbell, temp_Body, temp_Rope;

btn_PushToWordBank.addEventListener("click", function () {
  const createOption = document.createElement("option");
  // exerciseWordBank.push(exerciseWordBank_Input.value);
  if (option_Barbell.selected) {
    exercises_Barbell.push(exerciseWordBank_Input.value);
    localStorage.setItem(
      "exercises_Barbell",
      JSON.stringify(exercises_Barbell)
    );
    temp_Barbell = localStorage.getItem("exercises_Barbell");
    userExercises.barbell = JSON.parse(temp_Barbell);
    // localStorage.barbellExercises = JSON.(exercises_Barbell);
    console.log(localStorage);
    for (let i = 0; i < userExercises.barbell.length; i++) {
      createOption.innerHTML = `${userExercises.barbell[i]}`;
      select_Barbell_Exercises.appendChild(createOption);
    }
  } else if (option_Dumbbell.selected) {
    exercises_Dumbbell.push(exerciseWordBank_Input.value);
    // localStorage.dumbbellExercises = JSON.stringify(exercises_Dumbbell);
    localStorage.setItem(
      "exercises_Dumbbell",
      JSON.stringify(exercises_Dumbbell)
    );
    temp_Dumbbell = localStorage.getItem("exercises_Dumbbell");
    userExercises.dumbbell = JSON.parse(temp_Dumbbell);

    for (let i = 0; i < userExercises.dumbbell.length; i++) {
      // const createOption = document.createElement("option");
      createOption.innerHTML = `${userExercises.dumbbell[i]}`;
      select_Dumbbell_Exercises.appendChild(createOption);
    }
    console.log(localStorage);
  } else if (option_Body.selected) {
    exercises_Body.push(exerciseWordBank_Input.value);
    localStorage.setItem("exercises_Body", JSON.stringify(exercises_Body));
    temp_Body = localStorage.getItem("exercises_Body");
    userExercises.body = JSON.parse(temp_Body);
    // localStorage.bodyExercises = JSON.stringify(exercises_Body);
    for (let i = 0; i < userExercises.body.length; i++) {
      // const createOption = document.createElement("option");
      createOption.innerHTML = `${userExercises.body[i]}`;
      select_Body_Exercises.appendChild(createOption);
    }
    console.log(localStorage);
  } else if (option_Rope.selected) {
    exercises_Rope.push(exerciseWordBank_Input.value);
    localStorage.setItem("exercises_Rope", JSON.stringify(exercises_Rope));
    temp_Rope = localStorage.getItem("exercises_Rope");
    userExercises.rope = JSON.parse(temp_Rope);
    // localStorage.ropeExercises = JSON.stringify(exercises_Rope);
    for (let i = 0; i < userExercises.rope.length; i++) {
      // const createOption = document.createElement("option");
      createOption.innerHTML = `${userExercises.rope[i]}`;
      select_Rope_Exercises.appendChild(createOption);
    }
    console.log(localStorage);
  }

  // localStorage.wordBank = JSON.stringify(exerciseWordBank);
  exerciseWordBank_Input.value = "";
  // parsed_Exercises();
});

const exerciseListActiveState = [0, 0];
// let activeState, exercising;

// const init = function () {
//   activeState = 0;
//   exercising = true;
//   activeModal
// };

const userExercises = {
  barbell: "",
  dumbbell: "",
  rope: "",
  body: "",
};
