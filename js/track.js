const questionAsked = document.getElementById("what-field");
const whoYouAsked = document.getElementById("who-field");

const acceptedBtn = document.getElementById("accepted-btn");
const rejectedBtn = document.getElementById("rejected-btn");

acceptedBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const score = 10;
  console.log(questionAsked.value);
  console.log(whoYouAsked.value);
  if (questionAsked.value && whoYouAsked.value) {
    // check if total in the storage
    const totalScoreValue = localStorage.getItem("totalScore");
    // const totalScoreKey = localStorage.key("totalScore");
    // console.log(totalScoreValue);
    if (!totalScoreValue) {
      //console.log("Local storage is empty");
      localStorage.setItem("totalScore", score);
      //   console.log(localStorage);
    }

    if (totalScoreValue) {
      let value = parseInt(totalScoreValue) + score;
      localStorage.setItem("totalScore", value);
      console.log(localStorage);
    }
    // display the total score
  }

  // Reset the value to empty string
  questionAsked.value = "";
  whoYouAsked.value = "";
});

rejectedBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const score = 100;
  if (questionAsked.value && whoYouAsked.value) {
    // check if total in the storage
    const totalScoreValue = localStorage.getItem("totalScore");
    // const totalScoreKey = localStorage.key("totalScore");
    if (!totalScoreValue) {
      localStorage.setItem("totalScore", score);
    }

    if (totalScoreValue) {
      let value = parseInt(totalScoreValue) + score;
      localStorage.setItem("totalScore", value);
      console.log(localStorage);
    }
    // display the total score
  }

  // Reset the value to empty string
  questionAsked.value = "";
  whoYouAsked.value = "";
});
