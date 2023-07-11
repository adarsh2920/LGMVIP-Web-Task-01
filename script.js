// Selecting elements
const taskInput = document.getElementById("taskInput"); // Input field to enter new tasks
const addButton = document.getElementById("addButton"); // Button to add new tasks
const taskList = document.getElementById("taskList"); // List to display tasks

// Event listeners
addButton.addEventListener("click", addTask); // Listen for click event on the "Add" button
taskList.addEventListener("click", completeTask); // Listen for click event on the task list

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim(); // Get the trimmed value of the input field

  if (taskText !== "") { // Check if the task text is not empty
    const newTask = document.createElement("li"); // Create a new list item element
    newTask.innerText = taskText; // Set the text of the new task as the entered task text
    taskList.appendChild(newTask); // Add the new task to the task list
    taskInput.value = ""; // Clear the input field for the next task
  }
}

// Function to mark a task as complete
function completeTask(event) {
  const clickedItem = event.target; // Get the clicked element

  if (clickedItem.tagName === "LI") { // Check if the clicked element is a list item
    clickedItem.classList.toggle("done"); // Toggle the "done" class to mark/unmark the task as complete
  }
}
