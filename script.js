const ddSteps = document.querySelectorAll('.dd-step');
const ddDim = document.getElementById('dd-dim');

const ddObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const ringClass = entry.target.dataset.ring;
      const dimNumber = ringClass.replace('ring-', 'dim-');
      ddDim.className = 'dd-dim-overlay active ' + dimNumber;
      if (ringClass === 'ring-0') {
        ddDim.classList.remove('active');
      }
    }
  });
}, { threshold: 0.5 });

ddSteps.forEach(step => ddObserver.observe(step));
