const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const city = document.getElementById("city");
const country = document.getElementById("country");

let RegisterInformation = [];
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const RegisterInformation = input.value;
    if (RegisterInformation) {
        todoList.push({
            text: RegisterInformation,
            complete: false
        });
        localStorage.setItem("todos", JSON.stringify(RegisterInformation));
        document.getElementById("input").value = null;
    } else {
        alert("chưa nhập đầy đủ thông tin");
    }

    render();
});

todo.innerHTML = null;
todoList = JSON.parse(localStorage.getItem("todos")) || [];

for (let i = 0; i < todoList.length; i++) {
    let li = document.createElement("li");
    todo.appendChild(li);
    li.innerText = todoList[i].text;
}