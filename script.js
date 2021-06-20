var questioncount = 0;
var totalScore = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");
var result = document.getElementById("result");

q1a1.addEventListener("click", add4);
q1a2.addEventListener("click", add5);
q1a3.addEventListener("click", add3);
q1a4.addEventListener("click", add2);
q2a1.addEventListener("click", add2);
q2a2.addEventListener("click", add4);
q2a3.addEventListener("click", add5);
q2a4.addEventListener("click", add3);
q3a1.addEventListener("click", add3);
q3a2.addEventListener("click", add4);
q3a3.addEventListener("click", add2);
q3a4.addEventListener("click", add5);
q4a1.addEventListener("click", add4);
q4a2.addEventListener("click", add3);
q4a3.addEventListener("click", add5);
q4a4.addEventListener("click", add2);
q5a1.addEventListener("click", add5);
q5a2.addEventListener("click", add3);
q5a3.addEventListener("click", add4);
q5a4.addEventListener("click", add2);
q6a1.addEventListener("click", add2);
q6a2.addEventListener("click", add5);
q6a3.addEventListener("click", add3);
q6a4.addEventListener("click", add4);

function add5() {
  totalScore += 5;
  questioncount += 1;
  if (questioncount >= 6) {
    updateResult();
  }
}

function add4() {
  totalScore += 4;
  questioncount += 1;
  if (questioncount >= 6) {
    updateResult();
  }
}

function add3() {
  totalScore += 3;
  questioncount += 1;
  if (questioncount >= 6) {
    updateResult();
  }
}

function add2() {
  totalScore += 2;
  questioncount += 1;
  if (questioncount >= 6) {
    updateResult();
  }
}

function updateResult() {
  if (totalScore <= 12) {
    result.innerHTML =
      "EEEK, you need to go back <br> and review our website <br> information... Are you sure you weren't dozing off :D";
  } else if (totalScore > 12 && totalScore <= 18) {
    result.innerHTML = "You bagged a few points,<br> but you can do better!";
  } else if (totalScore > 18 && totalScore <= 24) {
    result.innerHTML =
      "Nice! You got a good <br>amount of points, but some<br> places need work. Go back<br> to read more!";
  } else if (totalScore > 24 && totalScore <=30) {
    result.innerHTML =
      "Great Job!!! You are <br>on your way to having a<br> beautiful, healthy garden!";
  }
}

// (24 < totalScore <= 30)
