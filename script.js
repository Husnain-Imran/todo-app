let input = document.getElementById("task-input");
let addBtn = document.getElementById("add-button");
let listContainer = document.getElementById("list-container");

addBtn.addEventListener('click',()=>{
    let task = input.value
    if(task===''){
        alert("Please enter the task to add")
    }
    else{
        console.log(task)
        const li = document.createElement("li")
        li.innerText=task
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerText = "\u00D7";
        li.appendChild(span);
        input.value=""
    }

})

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.style.display = "none";
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
loadData()