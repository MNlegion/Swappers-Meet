async function marketplaceButtonHandler(event) {
  event.preventDefault();  
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
    document.location.replace('/marketplace/');
  } else {
    alert(response.statusText);
  } 
  
}
  
async function myproductsButtonHandler(event) {
  event.preventDefault();
  const response = await fetch('/api/user/product', {
    method: 'post',
    body: JSON.stringify({
      username,
      email,
      password
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/myproducts/');
  } else {
    alert(response.statusText);
  } 
  
}

  
async function bidsButtonHandler(event) {
  event.preventDefault();
  const response = await fetch('/api/bid/signup', {
    method: 'post',
    body: JSON.stringify({
      username,
      email,
      password
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/marketplace/');
  } else {
    alert(response.statusText);
  } 
}
  
async function addproductsButtonHandler(event) {
  event.preventDefault();
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
    document.location.replace('/marketplace/');
  } else {
    alert(response.statusText);
  } 
}
  
document.querySelector('#button-marketplace').addEventListener('click', marketplaceButtonHandler);

document.querySelector('#button-myproducts').addEventListener('click', myproductsButtonHandler);

document.querySelector('#button-marketplace').addEventListener('click', bidsButtonHandler);

document.querySelector('#button-myproducts').addEventListener('click', addproductsButtonHandler);
