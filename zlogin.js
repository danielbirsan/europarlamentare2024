const Users = [
    { email: 'test1@example.com', password: '1' },
    { email: 'test2@example.com', password: 'password2' },
    { email: 'test3@example.com', password: 'password3' }
];

localStorage.setItem('users', JSON.stringify(Users));

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('message').textContent = 'Adresa de email nu este validă.';
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        document.getElementById('message').textContent = 'Login reușit!';
        document.getElementById('main').style.display = 'none';
        document.getElementById('imp').style.display = 'block';
        document.getElementById('imp').textContent = 'Felicitări! Te-ai autentificat cu succes.';
    } else {
        document.getElementById('message').textContent = 'Email sau parolă incorecte.';
    }
});

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(user => user.email === email)) {
        document.getElementById('message').textContent = 'Email deja utilizat.';
        return;
    }

    users.push({ email: email, password: password });
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('message').textContent = 'Înregistrare reușită!';
    document.getElementById('main').style.display = 'none';
    document.getElementById('imp').style.display = 'block';
    document.getElementById('imp').textContent = 'Înregistrare reușită! Bine ai venit!';
});
