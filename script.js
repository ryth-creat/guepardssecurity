// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Form — envoi par email
const form = document.getElementById('contactForm');
const btn  = document.getElementById('submitBtn');
const msg  = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstname = form.querySelector('input[name="firstname"]').value;
  const lastname  = form.querySelector('input[name="lastname"]').value;
  const email     = form.querySelector('input[name="email"]').value;
  const phone     = form.querySelector('input[name="phone"]').value;
  const message   = form.querySelector('textarea[name="message"]').value;

  const subject = encodeURIComponent('New Security Request — Guepards Security Gate LLC');
  const body = encodeURIComponent(
    `New request received from the website:\n\n` +
    `Name    : ${firstname} ${lastname}\n` +
    `Email   : ${email}\n` +
    `Phone   : ${phone || 'Not provided'}\n\n` +
    `Message :\n${message}`
  );

  // ⬇️ Remplace cette adresse par la tienne
  window.location.href = `mailto:TONEMAIL@gmail.com?subject=${subject}&body=${body}`;
  btn.textContent = '✓ Request Sent!';
  btn.style.background = '#2a7a2a';
  btn.style.color = '#fff';
  msg.style.display = 'block';
  form.reset();

  setTimeout(() => {
    btn.textContent = 'Send My Request →';
    btn.style.background = '';
    btn.style.color = '';
    msg.style.display = 'none';
  }, 4000);
});