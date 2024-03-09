document.addEventListener("DOMContentLoaded", function() {
    function updateCount(section) {
        var count = document.getElementById(section + "List").children.length;
        document.getElementById(section + "Count").textContent = count;
    }

    function createCard(task, section) {
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML = task + '<div class="actions"><i class="fas fa-edit edit"></i> <i class="fas fa-trash-alt delete"></i></div>';
        document.getElementById(section + "List").appendChild(card);
    }

    document.getElementById("addNotStartedForm").addEventListener("submit", function(e) {
        e.preventDefault();
        var newTask = document.getElementById("newNotStarted").value;
        createCard(newTask, "notStarted");
        document.getElementById("newNotStarted").value = "";
        updateCount("notStarted");
    });

    document.getElementById("addInProgressForm").addEventListener("submit", function(e) {
        e.preventDefault();
        var newTask = document.getElementById("newInProgress").value;
        createCard(newTask, "inProgress");
        document.getElementById("newInProgress").value = "";
        updateCount("inProgress");
    });
    document.getElementById("addCompletedForm").addEventListener("submit", function(e) {
        e.preventDefault();
        var newTask = document.getElementById("newCompleted").value;
        createCard(newTask, "completed");
        document.getElementById("newCompleted").value = "";
        updateCount("completed");
    });

    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete")) {
            var sectionId = event.target.closest(".status").id;
            event.target.closest(".card").remove();
            updateCount(sectionId);
        }

        if (event.target.classList.contains("edit")) {
            var taskElement = event.target.closest(".card");
            var taskText = taskElement.textContent.trim();
            var newText = prompt("Edit task:", taskText);
            if (newText !== null && newText !== "") {
                taskElement.innerHTML = newText + ' <div class="actions"><i class="fas fa-edit edit"></i> <i class="fas fa-trash-alt delete"></i></div>';
            }
        }
    });
});