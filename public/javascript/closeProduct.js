// when user clicks close listing button
// router.put to product with updated info

async function closeProductHandler(event) {
    event.preventDefault();

    // find product id associated with button
    // if product with id exists
    const response = await fetch('/api/product/:id', {
        method: 'put',
        body: JSON.stringify({

        })
    })
};

document.querySelector("#close-listing").addEventListener("click", closeProductHandler);