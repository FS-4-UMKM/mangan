function login(e) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const result = document.getElementById("result");

    const user = localStorage.getItem(email);
    const data = JSON.parse(user);
    console.log(data);

    if (user == null) {
        result.innerHTML = "1";
    } else if (email == data.email && pass == data.password) {
        result.innerHTML = "2"
    } else {
        result.innerHTML = "3"
    }


}