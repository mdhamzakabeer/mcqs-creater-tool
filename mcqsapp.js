// function showMcqs() {
//   let textMcqs = document.getElementById("mcqsBox").value;
//   let breakLine = textMcqs.split("\n"); // ✅ Fixed here
//   let question = breakLine[0];
//   let answers = breakLine.slice(1, 5);
//   let resultDiv = document.getElementById("result");
//   resultDiv.innerHTML = "";

//   let ques = document.createElement("p");
//   ques.innerHTML = "<strong>Q:</strong> " + question;
//   resultDiv.appendChild(ques);

//   for (let ans of answers) {
//     let p = document.createElement("p");
//     if (ans.startsWith("*")) {
//       p.innerHTML = "<b style='color:green'>" + ans.substring(1).trim() + " ✅</b>";
//     } else {
//       p.textContent = ans;
//     }
//     resultDiv.appendChild(p);
//   }
// }

function showMcqs() {
  let textMcqs = document.getElementById("mcqsBox").value;
  let breakLine = textMcqs.split("\n");
  let question = breakLine[0];
  let answers = breakLine.slice(1, 5);

  let options = [];
  let correctAnswer = "";

  for (let ans of answers) {
    if (ans.startsWith("*")) {
      let cleanAns = ans.substring(1).trim();
      options.push(cleanAns);
      correctAnswer = cleanAns;
    } else {
      options.push(ans.trim());
    }
  }

  let mcqsObject = {
    question: question.trim(),
    options: options,
    correctAnswer: correctAnswer
  };

  // Save to localStorage
  let storedMcqs = JSON.parse(localStorage.getItem("mcqsList")) || [];
  storedMcqs.push(mcqsObject);
  localStorage.setItem("mcqsList", JSON.stringify(storedMcqs));

  // Show result
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  let ques = document.createElement("p");
  ques.innerHTML = "<strong>Q:</strong> " + mcqsObject.question;
  resultDiv.appendChild(ques);

  for (let opt of mcqsObject.options) {
    let p = document.createElement("p");
    if (opt === mcqsObject.correctAnswer) {
      p.innerHTML = "<b>" + opt + " ✅</b>";
    } else {
      p.textContent = opt;
    }
    resultDiv.appendChild(p);
  }

  console.log(mcqsObject); // Debug: view in console
}











// function showMcqs() {
//   let textMcqs = document.getElementById("mcqsBox").value;
//   let breakLine = textMcqs.split("\n");
//   let question = breakLine[0];
//   let answers = breakLine.slice(1, 5);

//   let options = [];
//   let correctAnswer = "";

//   for (let ans of answers) {
//     if (ans.startsWith("*")) {
//       let cleanAns = ans.substring(1).trim();
//       options.push(cleanAns);
//       correctAnswer = cleanAns;
//     } else {
//       options.push(ans.trim());
//     }
//   }

//   let mcqsObject = {
//     question: question.trim(),
//     options: options,
//     correctAnswer: correctAnswer
//   };

//   // 🔍 Show in console
//   console.log(mcqsObject);

//   // ✅ Save to localStorage
//   let storedMcqs = JSON.parse(localStorage.getItem("mcqsList")) || [];
//   storedMcqs.push(mcqsObject);
//   localStorage.setItem("mcqsList", JSON.stringify(storedMcqs));

//   // ✅ Show on page
//   let resultDiv = document.getElementById("result");
//   resultDiv.innerHTML = "";
//   let ques = document.createElement("p");
//   ques.innerHTML = "<strong>Q:</strong> " + mcqsObject.question;
//   resultDiv.appendChild(ques);

//   for (let opt of mcqsObject.options) {
//     let p = document.createElement("p");
//     if (opt === mcqsObject.correctAnswer) {
//       p.innerHTML = "<b style='color:green'>" + opt + " ✅</b>";
//     } else {
//       p.textContent = opt;
//     }
//     resultDiv.appendChild(p);
//   }
// }
















