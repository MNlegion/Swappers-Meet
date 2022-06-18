const user = document.querySelector('#user-id').getAttribute('data-user'); // capture logged in user id

async function bidHandler(event) {

    const target = event.target.getAttribute('id')

    // make sure we are targeting correct button
    if (target === 'send-bid') {
        console.log('bid sent')

        // then grab product id associated with button
        const product = event.target.getAttribute('data-product'); // capture product associated with bid button

        // post request to send necessary user information to create new bid
        const response = await fetch('/api/bid', {
            method: 'post',
            body: JSON.stringify({
                user,
                product
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log('bid submitted');
        } else {
            alert("You can't bid on the same product twice");
        }
    }
};

document.querySelector('#bid-listener').addEventListener('click', bidHandler);