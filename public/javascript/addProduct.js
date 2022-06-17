//query selectors for "titles"
console.log("addProduct.js connected");

async function newProductHandler(event) {
    event.preventDefault();
  
    const product_name = document.querySelector('input[name="product-title"]').value;
    const category_id = document.querySelector('input[name="product-category"]').value;
    const description = document.querySelector('input[name="description"]').value;
    const file_path = document.querySelector('input[name="image"]').value;
    console.log("Here")
  
    const response = await fetch(`/api/product`, {
      method: 'POST',
      body: JSON.stringify({
        product_name,
        category_id,
        description,
        file_path
      }),
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#button-addProduct').addEventListener('click', newProductHandler);
  