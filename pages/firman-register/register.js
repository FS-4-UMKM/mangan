function signup(e) {
    event.preventDefault();

    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var pw = document.getElementById('password').value;
    var nohp = document.getElementById('nohp').value;

    var user = {
        nama: nama,
        email: email,
        password: pw,
        nohp: nohp,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(email, json);
    // Menampilkan pesan alert
    alert("Berhasil Mendaftar");

    // Berpindah halaman setelah pengguna menekan OK pada pesan alert
    window.location.href = "../firman-login/login.html";

}