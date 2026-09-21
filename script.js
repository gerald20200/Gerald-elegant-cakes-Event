const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const yearEl = document.getElementById('year');
const expandBtn = document.querySelector('.expand-btn');
const eventSubservices = document.querySelector('.event-subservices');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (expandBtn && eventSubservices) {
  expandBtn.addEventListener('click', () => {
    const isHidden = eventSubservices.classList.toggle('hidden');
    const label = expandBtn.querySelector('span');

    if (label) {
      label.textContent = isHidden ? 'Show more' : 'Show less';
    }

    expandBtn.setAttribute('aria-expanded', String(!isHidden));
  });
}

const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const name = formData.get('name') || 'Customer';
    const phone = formData.get('phone') || '';
    const eventType = formData.get('eventType') || 'Event';
    const date = formData.get('date') || 'ASAP';
    const message = formData.get('message') || '';

    const whatsappText = encodeURIComponent(
      `Hello Gerald Elegant Cakes & Events, I want to book a ${eventType}.\n\nName: ${name}\nPhone: ${phone}\nEvent Date: ${date}\nMessage: ${message}`
    );

    window.open(`https://wa.me/2347066921937?text=${whatsappText}`, '_blank');
    bookingForm.reset();
  });
}
