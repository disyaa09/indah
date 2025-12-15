function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Username & password contoh
    if (username === "admin" && password === "12345") {
        localStorage.setItem("login", "true");
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerText = "Username atau Password salah!";
    }
}

function cekLogin() {
    if (localStorage.getItem("login") !== "true") {
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("login");
    window.location.href = "login.html";
}
