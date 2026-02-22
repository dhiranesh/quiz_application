function createquiz() {
  document.getElementById("quizbutton");
  {
    window.location.href = "question1.html";
  }
}
let count = 0;

function buttonsubmit() {
  count++;
}
function submit() {
  window.location.href = "result.html";
}
function clock() {
  let seconds = 30;
  const countdown = setInterval(() => {
    document.getElementById("clock").innerHTML =
      `<p>Time Left: ${seconds} </p>`;
    seconds--;
    if (seconds < 0) {
      clearInterval(countdown);
      window.location.href = "question2.html";
    }
  }, 1000);
}
document.getElementById("result").innerHTML = `<h3>${count}<h3>`;

// timer = 20;
// answer_correct = 0;

// function question1() {
//   window.location.href = "question2.html";
// }
// function question2() {
//   window.location.href = "question3.html";
// }
// function question3() {
//   timer();
//   window.location.href = "question4.html";
// }
// function question4() {
//   timer();
//   window.location.href = "question5.html";
// }
// function question5() {
//   timer();
//   window.location.href = "question6.html";
// }

// function question6() {
//   timer();
//   window.location.href = "index.html";
// }

// function timer() {
//   let seconds = 20;
//   const countdown = setInterval(() => {
//     seconds--;
//     if (seconds < 0) {
//       clearInterval(countdown);
//       window.location.href = "question2.html";
//     }
//   }, 1000);
// }
// const countdown = setInterval(() => {
//   seconds--;
//   if (seconds < 0) {
//     clearInterval(countdown);
//     console.log("Time's up!");
//   }
// }, 1000);

// setTimeout(() => {
// console.log("Executed after 3 seconds");
// }, 3000);
