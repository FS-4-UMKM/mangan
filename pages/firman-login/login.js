function login(e) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;


    const user = localStorage.getItem(email);
    const data = JSON.parse(user);
    console.log(data);

    if (user == null) {
        alert("Data Tidak Benar");
    } else if (email == data.email && pass == data.password) {
        alert("Selamat Kamu Berhasil login");
        window.location.href = "../galang-list-produk/list-produk.html";
    } else {
        alert("Password Salah");
    }


}