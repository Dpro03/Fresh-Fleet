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

document.getElementById('start').addEventListener('click', function () {
  window.location.href = 'intro.html';
})

document.getElementById('start1').addEventListener('click', function () {
  window.location.href = 'careers.html';
})