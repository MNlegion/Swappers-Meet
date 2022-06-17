async function loginButtonHandler(event) {
    event.preventDefault();
    console.log("logging in");
  
    const email = document.querySelector('#formEmailLogin').value.trim();
    //const username = document.querySelector('#formName').value.trim();
    const password = document.querySelector('#formPasswordLogin').value.trim();
    
    
    if (email && password) {//need to make sure email and password are not null, otherwise takes to dashboard
        console.log("check passed");
      const response = await fetch('/api/user/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function signupButtonHandler(event) {
    event.preventDefault();
    console.log("signing up");
    
    const email = document.querySelector('#formEmail').value.trim();
    const username = document.querySelector('#formName').value.trim();
    const password = document.querySelector('#formPassword').value.trim();
    
  
    if (email && password && username) {
      const response = await fetch('/api/user/signup', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('#button-login').addEventListener('click', loginButtonHandler);
  
  document.querySelector('#button-sign-up').addEventListener('click', signupButtonHandler);
  