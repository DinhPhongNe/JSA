const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const city = document.getElementById("city");
const country = document.getElementById("country");

let RegisterInformation = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const UserInform = input.value;
    console.log(UserInform);
    if (UserInform) {
        RegisterInformation.push({
            text: UserInform,
            complete: false
        });
        localStorage.setItem("Informs", JSON.stringify(RegisterInformation));
        document.getElementById("fname").value = null;
        document.getElementById("lname").value = null;
        document.getElementById("email").value = null;
        document.getElementById("password").value = null;
        document.getElementById("city").value = null;
        document.getElementById("country").value = null;
    } else {
        alert("Chưa nhập đủ thông tin !!!");
    }

    render();
});