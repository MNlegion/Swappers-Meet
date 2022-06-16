const user = document.querySelector('#user-id').getAttribute('data-user'); // capture logged in user id

async function bidHandler(event) {

    const target = event.target.getAttribute('id')

    // make sure we are targeting correct button
    if (target === 'send-bid') {
        console.log('bid sent')

        // then grab product id associated with button
        const product = event.target.getAttribute('data-product'); // capture product associated with bid button
        console.log(product)
        console.log(user + " helloooooo " + product);
    } else {
        console.log('no product')
    }

    // get request for user information
    // post request to send necessary user information to create new bid
};


document.querySelector('#bid-listener').addEventListener('click', bidHandler);