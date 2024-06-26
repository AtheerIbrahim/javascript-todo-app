// initialize a counter
let counter = 0;

// create a function to count total tasks
function counterUpdate() {
      document.getElementById("taskCount").textContent = "Total of Tasks = " + counter;
    }

// create function to add, delete and edit task
function taskOperations() {
    let input = document.getElementById("taskInput");
    let task = input.value;
    if (task.trim() !== "") {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = function() {
          li.style.textDecoration = checkbox.checked ? "line-through" : "none";
        };
        li.appendChild(checkbox);
        let span = document.createElement("span");
        span.textContent = task;
        li.appendChild(span);
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function() {
          li.parentNode.removeChild(li);
          counter--;
          counterUpdate();
        };
        li.appendChild(deleteBtn);

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = function() {
          let newText = prompt("Edit task:", span.textContent);
          if (newText !== null) {
            span.textContent = newText;
          }
        };
        li.appendChild(editBtn);

        document.getElementById("taskList").appendChild(li);
        input.value = "";
        counter++;
        counterUpdate();
      } else {
        alert("Please enter a task!");
      }
    }