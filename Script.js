// Custom cursor
const cursor = document.getElementById('cursor');
if (cursor) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });
  document.addEventListener('mousedown', () => {
    cursor.style.width  = '32px';
    cursor.style.height = '32px';
    cursor.style.background = 'rgba(196,112,90,0.15)';
  });
  document.addEventListener('mouseup', () => {
    cursor.style.width  = '20px';
    cursor.style.height = '20px';
    cursor.style.background = 'transparent';
  });
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width  = '36px';
      cursor.style.height = '36px';
      cursor.style.background = 'rgba(196,112,90,0.12)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width  = '20px';
      cursor.style.height = '20px';
      cursor.style.background = 'transparent';
    });
  });
}

// Scroll-triggered animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));