document.addEventListener("DOMContentLoaded", () => {
  // Select the form
  const form = document.getElementById("create-task-form");
  
  // Add event listener to form for submit event
  form.addEventListener("submit", (event) => {
    // Prevent default form submission
    event.preventDefault();
    
    // Get the task description from the input
    const taskDescription = document.getElementById("new-task-description").value;
    
    // Validate input
    if (taskDescription.trim() === "") {
      console.warn("Task description cannot be empty");
      return;
    }
    
    // Call buildToDo function with the task description
    buildToDo(taskDescription);
    
    // Clear the input field
    form.reset();
  });
  
  // Function to build and add a new task to the list
  function buildToDo(task) {
    console.log("Adding task:", task);
    
    // Create a new list item element
    const li = document.createElement("li");
    
    // Set the task as the text content
    li.textContent = task;
    
    // Append the li element to the task list
    const taskList = document.getElementById("tasks");
    taskList.appendChild(li);
  }
});
