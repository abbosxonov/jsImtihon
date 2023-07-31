// Ro'yxatdan o'tish sahifasidagi formni qabul qilish
var registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Saqlanishni to'xtatish

    // Foydalanuvchidan ma'lumotlarni olish
    var name = document.getElementById("firstname").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var lastname = document.getElementById("lastname").value;
    var login = document.getElementById("kirish");

    // Foydalanuvchi ma'lumotlarini LocalStoragega saqlash
    var user = {
      name: name,
      username: username,
      lastname: lastname,
      password: password,
    };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Ro'yxatdan o'tinganiz uchun tashakkur!");
    login.classList.add("active");
    login.classList.remove("kirish");
    registerForm.reset(); // Formani tozalash
  });
}

// Kirish sahifasidagi formni qabul qilish
var loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Saqlanishni to'xtatish

    // Foydalanuvchidan ma'lumotlarni olish
    var username = document.getElementById("name").value;
    var password = document.getElementById("passWord").value;
    const login = document.getElementById("kirish");

    // LocalStorage'dan foydalanuvchi ma'lumotlarini olish
    var user = JSON.parse(localStorage.getItem("user"));

    // Foydalanuvchi ma'lumotlarini tekshirish
    if ((user && user.username === username) || user.password === password) {
      alert("Kirish muvaffaqiyatli!");
      login.classList.add("active");
      login.classList.remove("kirish");
      loginForm.reset(); // Formani tozalash
    } else {
      alert("Email yoki parol noto'g'ri!");
    }
  });
}
