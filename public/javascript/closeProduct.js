// when user clicks close listing button
// router.put to product with updated info

async function closeProductHandler(event) {
    event.preventDefault();

    const target = event.target.getAttribute('id')

    // make sure we are targeting correct button
    if (target === 'close-listing') {
        console.log('listing closed')

        // then grab product id associated with button
        const product = event.target.getAttribute('data-product'); // capture product associated with close button
        console.log(product);
        const apiurl = `/api/product/${product}`

        // post request to send necessary user information to create new bid
        const response = await fetch(apiurl, {
            method: 'put',
            // body: JSON.stringify({
            //     product
            // }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log('listing now closed');
        } else {
            console.log('no product')
        }
    }

    // find product id associated with button
    // if product with id exists
    // const response = await fetch('/api/product/:id', {
    //     method: 'put',
    //     body: JSON.stringify({

    //     })
    // })
};

document.querySelector("#close-listing-listener").addEventListener("click", closeProductHandler);