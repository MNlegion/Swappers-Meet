//query selectors for "titles"
console.log("addProduct.js connected");

async function newProductHandler(event) {
    event.preventDefault();
  
    const product_name = document.querySelector('input[name="product-title"]').value;
    const description = document.querySelector('input[name="description"]').value;
    const file_path = document.querySelector('input[name="image"]').value;
  
    const response = await fetch(`/api/product`, {
      method: 'POST',
      body: JSON.stringify({
        product_name,
        description,
        file_path
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  