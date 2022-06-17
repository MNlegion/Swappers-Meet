async function logoutHandler(event) {
    event.preventDefault();
    console.log('logging out');

    const response = await fetch('/api/user/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
};


document.querySelector('#logout').addEventListener('click', logoutHandler);
// click event handler that calls the logout route