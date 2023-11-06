let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');

        document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
      });
    };
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode')
}
ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img ', { origin: 'left' });
ScrollReveal().reveal('.home-content h3,.home-content p, .about-content ', { origin: 'right' });

// send masseg
function SendMail() {
  var params = {
    full_name: document.getElementById("full_name").value,
    mail_address: document.getElementById("mail_address").value,
    mobile_number: document.getElementById("mobile_number").value,
    email_subject: document.getElementById("email_subject").value,
    message: document.getElementById("message").value,
  }
  emailjs.send("service_od7cya4", "template_vx5e9jm", params, "qExeYcru3nOSuO9Go").then(function (res) {
    alert("success!" + res.status);
  },)
}
console.log(Math.floor(5))