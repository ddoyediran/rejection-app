const questionAsked = document.getElementById("what-field");
const whoYouAsked = document.getElementById("who-field");

const acceptedBtn = document.getElementById("accepted-btn");
const rejectedBtn = document.getElementById("rejected-btn");

acceptedBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const score = 10;
  //   console.log(questionAsked.value);
  //   console.log(whoYouAsked.value);

  // let dataToStore = {}

  let dataObject = {};
  //   let id = 0;
  let id = generateUniqueId();
  dataObject["question_asked"] = questionAsked.value;
  dataObject["person_asked"] = whoYouAsked.value;
  dataObject["isAccepted"] = true;
  dataObject["isRejected"] = false;

  if (questionAsked.value && whoYouAsked.value) {
    // if no data in the localStorage
    if (localStorage.length === 0) {
      // store the score and data in localStorage
      dataObject["id"] = id;
      dataObject["totalScore"] = score;
      localStorage.setItem("data", JSON.stringify([dataObject]));
      //   console.log(localStorage);
      questionAsked.value = "";
      whoYouAsked.value = "";
      return;
    }

    // if data in the localStorage
    if (localStorage.length > 0) {
      let localStorageData = JSON.parse(localStorage.getItem("data"));
      let currentTotalScore = localStorageData[localStorageData.length - 1];
      let newTotalScore = currentTotalScore.totalScore + score;
      dataObject["id"] = id;
      dataObject["totalScore"] = newTotalScore;
      localStorageData.push(dataObject);
      localStorage.setItem("data", JSON.stringify(localStorageData));
      questionAsked.value = "";
      whoYouAsked.value = "";
      return;
    }
    // display the total score
  }

  // Reset the value to empty string
  //   questionAsked.value = "";
  //   whoYouAsked.value = "";
});

rejectedBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const score = 100;

  let dataObject = {};
  //   let id = 0;
  let id = generateUniqueId();
  dataObject["question_asked"] = questionAsked.value;
  dataObject["person_asked"] = whoYouAsked.value;
  dataObject["isAccepted"] = false;
  dataObject["isRejected"] = true;

  if (questionAsked.value && whoYouAsked.value) {
    // if no data in the localStorage
    if (localStorage.length === 0) {
      // store the score and data in localStorage
      dataObject["id"] = id;
      dataObject["totalScore"] = score;
      localStorage.setItem("data", JSON.stringify([dataObject]));
      //   console.log(localStorage);
      questionAsked.value = "";
      whoYouAsked.value = "";
      return;
    }

    // if data in the localStorage
    if (localStorage.length > 0) {
      let localStorageData = JSON.parse(localStorage.getItem("data"));
      let currentTotalScore = localStorageData[localStorageData.length - 1];
      let newTotalScore = currentTotalScore.totalScore + score;
      dataObject["id"] = id;
      dataObject["totalScore"] = newTotalScore;
      localStorageData.push(dataObject);
      localStorage.setItem("data", JSON.stringify(localStorageData));
      questionAsked.value = "";
      whoYouAsked.value = "";
      return;
    }
    // display the total score
  }

  // Reset the value to empty string
  //   questionAsked.value = "";
  //   whoYouAsked.value = "";
});

// to save all the questions on localStorage
// data to pass to LS: question number, questions "who and what",
//    id, score/ totalScore, isRejected: true/ false, isAccepted: true/ false
// Display total score to user
// add a button to display all questions asked.

/// Generate unique ID ///

function generateUniqueId() {
  let a = new Uint32Array(3);
  window.crypto.getRandomValues(a);
  return (
    performance.now().toString(36) +
    Array.from(a)
      .map((A) => A.toString(36))
      .join("")
  ).replace(/\./g, "");
}
