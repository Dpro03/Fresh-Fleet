console.log('Hello World!');
const btn = document.querySelector('#menu-btn');
const nav = document.querySelector('#menu');
btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
})
const addEventListener = () => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
  });
};

document.getElementById('price').addEventListener('click', function () {
  window.location.href = 'price.html';
});
document.getElementById('price1').addEventListener('click', function () {
  window.location.href = 'price.html';
});

document.getElementById('about').addEventListener('click', function () {
  window.location.href = 'about.html';
});

document.getElementById('about1').addEventListener('click', function () {
  window.location.href = 'about.html';
});

document.getElementById('contact').addEventListener('click', function () {
  window.location.href = 'contact.html';
});
document.getElementById('home').addEventListener('click', function () {
  window.location.href = 'index.html';
});

// document.addEventListener('DOMContentLoaded', function() {
//     const addToCartButtons = document.querySelectorAll('.add-to-cart');
//     const cart = document.getElementById('cart');

//     addToCartButtons.forEach(function(button) {
//       button.addEventListener('click', addToCartClicked);
//     });

//     function addToCartClicked(event) {
//       console.log('Button clicked');
//       const item = event.target.dataset.item;
//       addItemToCart(item);
//     }

//     function addItemToCart(item) {
//       console.log('Adding item to cart:', item);
//       const cartItem = document.createElement('li');
//       cartItem.innerText = item;

//       const removeButton = document.createElement('button');
//       removeButton.innerText = 'Remove';
//       removeButton.className = 'remove-button';
//       removeButton.addEventListener('click', removeCartItem);
//       cartItem.appendChild(removeButton);

//       cart.appendChild(cartItem);
//     }

//     function removeCartItem(event) {
//       const buttonClicked = event.target;
//       buttonClicked.parentElement.remove();
//     }
//   });

const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add a click event listener to each button
addToCartButtons.forEach((button) => {
  button.addEventListener('click', addToCart);
});

// Function to handle the click event and add the item to the cart
function addToCart(event) {
  const button = event.target;
  const item = button.dataset.item;
  const cart = document.getElementById('cart');

  const li = document.createElement('li');
  li.innerText = item;

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.innerText = 'Remove';
  removeButton.addEventListener('click', removeFromCart);

  li.appendChild(removeButton);
  cart.appendChild(li);
}

// Function to handle the click event and remove the item from the cart
function removeFromCart(event) {
  const button = event.target;
  const li = button.parentElement;
  const cart = li.parentElement;
  cart.removeChild(li);
}
