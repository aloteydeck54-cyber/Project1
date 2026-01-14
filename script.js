// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  // simple icon swap
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Gallery interactivity
const thumbs = document.querySelectorAll('.thumb');
const currentImage = document.getElementById('current-image');
thumbs.forEach(t=>{
  t.addEventListener('click', ()=>{
    thumbs.forEach(x=>x.classList.remove('selected'));
    t.classList.add('selected');
    const src = t.getAttribute('data-large');
    currentImage.setAttribute('src', src);
  });
});

// Modal data for cars (placeholder details)
const carData = {
  'car1': {
    title: 'Car 1 — Bugatti Tourbillon',
    img: 'images/car1.jpg',
    desc: 'A luxury hybrid hypercar built for ultimate speed and elegance.',
    specs: ['Engine: 8.3L V16 hybrid', 'Power: 1,800 hp', 'Top Speed: 445 km/h', 'Price: GHS 61 million']
  },
  'car2': {
    title: 'Car 2 — Lamborghini Aventador',
    img: 'images/car2.jpg',
    desc: 'A powerful Italian supercar combining speed, style and precision.',
    specs: ['Engine: 6.5L V12', 'Power: 769 hp', 'Top Speed: 350 km/h', 'Price: GHS 8 million']
  },
  'car3': {
    title: 'Car 3 — Porsche 911 992',
    img: 'images/car3.webp',
    desc: 'An iconic sports car offering precision handling and timeless design.',
    specs: ['Engine: 3.0L twin-turbo flat-six', 'Power: 443 hp', 'Top Speed: 308 km/h', 'Price: GHS 2.3 million']

  },
  'car4': {
    title: 'Car 4 — McLaren 720S Spider',
    img: 'images/car4.webp',
    desc: 'A sleek convertible supercar built for speed and exhilaration.',
    specs: ['Engine: 4.0L twin-turbo V8', 'Power: 710 hp', 'Top Speed: 341 km/h', 'Price: GHS 5.1 million']
  }
};

// Modal elements
const modal = document.getElementById('car-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDesc = document.getElementById('modal-desc');
const modalSpecs = document.getElementById('modal-specs');
const modalClose = document.querySelector('.modal-close');

// Open modal when Read More clicked
document.querySelectorAll('.read-more').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const id = btn.getAttribute('data-car');
    const data = carData[id];
    if(data){
      modalTitle.textContent = data.title;
      modalImage.setAttribute('src', data.img);
      modalDesc.textContent = data.desc;
      modalSpecs.innerHTML = '';
      data.specs.forEach(s=>{
        const li = document.createElement('li');
        li.textContent = s;
        modalSpecs.appendChild(li);
      });
      modal.classList.add('show');
      modal.setAttribute('aria-hidden','false');
    }
  });
});

// Close modal
modalClose.addEventListener('click', ()=>{
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
});
modal.addEventListener('click', (e)=>{
  if(e.target === modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
  }
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  let valid = true;
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  // reset
  document.getElementById('name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('message-error').textContent = '';

  if(name.value.trim() === ''){
    document.getElementById('name-error').textContent = 'Please enter your name.';
    valid = false;
  }
  if(!/^\S+@\S+\.\S+$/.test(email.value.trim())){
    document.getElementById('email-error').textContent = 'Please enter a valid email.';
    valid = false;
  }
  if(message.value.trim() === ''){
    document.getElementById('message-error').textContent = 'Please enter a message.';
    valid = false;
  }

  if(valid){
    // Simulate success
    alert('Thanks! Your message has been sent to Cindy Motors.');
    this.reset();
  }
});
