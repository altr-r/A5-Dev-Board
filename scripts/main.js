const assignedTasks = document.getElementById("assigned");
const completedTasks = document.getElementById("completed");

let assignedCounter = Number(assignedTasks.innerText);
let completedCounter = Number(completedTasks.innerText);

const completeButtons = document.getElementsByClassName("complete");

const clearHistory = document.getElementById("clearHistory");
const history = document.getElementById("history");

for (let i = 0; i < completeButtons.length; i++) {
  completeButtons[i].addEventListener("click", () => {
    alert("Task has been completed");

    completeButtons[i].classList.add("opacity-50");
    completeButtons[i].disabled = true;

    assignedCounter--;
    completedCounter++;

    assignedTasks.innerText = `0${assignedCounter}`;
    completedTasks.innerText = completedCounter;

    const DATE = new Date();
    history.classList.remove("hidden");
    history.innerHTML += `<p>Task Completed at ${DATE.toLocaleString()}</p>`;
  });
}

clearHistory.addEventListener("click", () => {
  history.classList.add("hidden");
  history.innerHTML = "";
});
