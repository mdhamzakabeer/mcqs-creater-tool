
function showMcqs() {
  let textMcqs = document.getElementById("mcqsBox").value.trim();
  let breakLine = textMcqs.split("\n").filter(line => line.trim() !== ""); 
  let question = breakLine[0];
  let answers = breakLine.slice(1);

  let options = [];
  let correctAnswer = "";

  for (let ans of answers) {
    ans = ans.trim();
    if (ans.startsWith("*")) {
      let cleanAns = ans.substring(1).trim();
      options.push(cleanAns);
      correctAnswer = cleanAns;
    } else {
      options.push(ans);
    }
  }

  if (!correctAnswer) {
    alert("Error: Please mark one correct answer with '*'.");
    return;
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
      p.innerHTML = "<b>" + opt + " correct </b>";
    } else {
      p.textContent = opt;
    }
    resultDiv.appendChild(p);
  }

  console.log(mcqsObject); 
}

















