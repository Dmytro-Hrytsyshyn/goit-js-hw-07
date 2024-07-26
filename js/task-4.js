document.querySelector('.login-form').addEventListener('submit', event => {
    event.preventDefault(); 

    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();

    if (email === '' || password === '') {
        return alert('All form fields must be filled in');
    }

    const userInfo = {
      email: email,
      password: password
    };
    event.target.reset(); 

    console.log(userInfo);

  });
