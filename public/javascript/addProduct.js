//query selectors for "titles"
console.log("addProduct.js connected");

async function newProductHandler(event) {
    event.preventDefault();

    const formdata = new FormData(event.target.form);
//passed form data instead of json data to allow images
// Accept */* instead of just json
    const response = await fetch(`/api/product`, {
        method: 'POST',
        body: formdata,
        headers: {
            'Accept': '*/*'
        }
    });


    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#button-addProduct').addEventListener('click', newProductHandler);
