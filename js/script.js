// ============================================
// PROFESSIONAL PORTFOLIO - JAVASCRIPT
// ============================================

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');

      // Prevent body scroll when mobile menu is open
      if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });

    // Close menu when a link is clicked
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });
  }
});

// Scroll to Top Button
window.addEventListener('scroll', function() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  if (scrollToTopBtn) {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  }
});

// Scroll to top when button is clicked
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add animation to elements on scroll
window.addEventListener('load', function() {
  animateOnScroll();
});

function animateOnScroll() {
  const cards = document.querySelectorAll('.card, .resume-entry');

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'slideInUp 0.6s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => {
    observer.observe(card);
  });
}

// Image modal functionality for challenge screenshots
function setupImageModals() {
  const screenshots = document.querySelectorAll('.challenge-screenshot');

  screenshots.forEach(screenshot => {
    screenshot.addEventListener('click', function() {
      // Create modal
      const modal = document.createElement('div');
      modal.className = 'image-modal';
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        cursor: zoom-out;
      `;

      const img = document.createElement('img');
      img.src = screenshot.src;
      img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
      `;

      modal.appendChild(img);
      modal.addEventListener('click', function() {
        modal.remove();
      });

      document.body.appendChild(modal);
    });
  });
}

// Call setupImageModals when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupImageModals);
} else {
  setupImageModals();
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Simple validation
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // In production, you would send this to a backend
    console.log('Form submission:', { name, email, message });
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add smooth scroll behavior enhancement
document.documentElement.style.scrollBehavior = 'smooth';

// Navigation active state based on current page
function updateActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.style.color = 'var(--accent-primary)';
    }
  });
}

window.addEventListener('load', updateActiveNav);

// Initialize on page load
window.addEventListener('load', function() {
  // Trigger animations
  animateOnScroll();

  // Update active navigation
  updateActiveNav();

  // Setup image modals
  setupImageModals();
});