/* 
   ==========================================================================
   VENTUREOUT TRAVELS - CLIENT-SIDE INTERACTIVITY SCRIPTS
   ========================================================================== 
*/

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initHeroSlider();
  initFaqAccordion();
  initPackageFilter();
  initContactForm();
  initScrollTop();
  initLightbox();
});

/* 1. Header Scroll Effect */
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  const checkScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Run once on load
}

/* 2. Mobile Menu Navigation */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburger || !navMenu) return;

  const toggleMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  };

  const closeMenu = () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  };

  hamburger.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* 3. Hero / Testimonial Slider */
function initHeroSlider() {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.querySelector('.slider-dots');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  
  if (slides.length === 0) return;

  let currentSlide = 0;
  let slideInterval;
  const intervalTime = 6000;

  // Create dot indicators
  if (dotsContainer) {
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.setAttribute('data-index', index);
      dotsContainer.appendChild(dot);
    });
  }

  const dots = document.querySelectorAll('.dot');

  const showSlide = (index) => {
    slides.forEach(slide => slide.classList.remove('active'));
    if (dots) dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    if (dots && dots[index]) dots[index].classList.add('active');
    currentSlide = index;
  };

  const nextSlide = () => {
    let next = currentSlide + 1;
    if (next >= slides.length) next = 0;
    showSlide(next);
  };

  const prevSlide = () => {
    let prev = currentSlide - 1;
    if (prev < 0) prev = slides.length - 1;
    showSlide(prev);
  };

  const startAutoSlide = () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoSlide();
    });
  }

  if (dots) {
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-index'));
        showSlide(index);
        startAutoSlide();
      });
    });
  }

  // Initial call to auto-slide
  startAutoSlide();
}

/* 4. FAQ Accordion Toggle */
function initFaqAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all FAQs in this container
      const allItems = item.parentElement.querySelectorAll('.faq-item');
      allItems.forEach(i => i.classList.remove('active'));
      
      // Open selected one if it wasn't already active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* 5. Destination Packages Category Filter */
function initPackageFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const packageCards = document.querySelectorAll('.package-card');

  if (filterBtns.length === 0 || packageCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      packageCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.9)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* 6. Form Validation & Submissions (Contact/Booking Page) */
function initContactForm() {
  const bookingForm = document.getElementById('bookingForm');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal-close-btn');

  if (!bookingForm) return;

  const inputs = bookingForm.querySelectorAll('.form-input');
  
  const validateField = (input) => {
    const errorMsg = input.nextElementSibling;
    let isValid = true;
    
    if (input.required && !input.value.trim()) {
      isValid = false;
    }
    
    if (isValid && input.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        isValid = false;
      }
    }

    if (isValid && input.id === 'phone' && input.value.trim() !== '') {
      const phoneRegex = /^\+?[0-9\s\-]{8,15}$/;
      if (!phoneRegex.test(input.value)) {
        isValid = false;
      }
    }

    if (isValid) {
      input.classList.remove('invalid');
      input.classList.add('valid');
      if (errorMsg && errorMsg.classList.contains('form-error-msg')) {
        errorMsg.style.display = 'none';
      }
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
      if (errorMsg && errorMsg.classList.contains('form-error-msg')) {
        errorMsg.style.display = 'block';
      }
    }
    return isValid;
  };

  // Real-time listener
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('invalid')) {
        validateField(input);
      }
    });
  });

  // Submit listener
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isFormValid = true;

    inputs.forEach(input => {
      if (!validateField(input)) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      // Gather inputs for success message / console debug
      const name = document.getElementById('name').value;
      const dest = document.getElementById('destination').value;
      
      const successTitle = document.querySelector('.success-modal h3');
      const successText = document.querySelector('.success-modal p');

      if (successTitle && successText) {
        successTitle.textContent = "Booking Requested!";
        successText.innerHTML = `Thank you <strong>${name}</strong>. Your request for the trip to <strong>${dest}</strong> is successfully received. One of our adventure specialists will reach out to you within 24 hours.`;
      }

      // Show success modal
      if (modalOverlay) {
        modalOverlay.classList.add('active');
        document.body.classList.add('no-scroll');
      }

      bookingForm.reset();
      inputs.forEach(input => input.classList.remove('valid'));
    }
  });

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
    
    // Close on click outside
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  }
}

/* 7. Scroll to Top Feature */
function initScrollTop() {
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('active');
    } else {
      scrollTopBtn.classList.remove('active');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* 8. Gallery Lightbox Modal */
function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  
  if (galleryItems.length === 0 || !lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  let activeIndex = 0;
  const itemsArray = Array.from(galleryItems);

  const openLightbox = (index) => {
    activeIndex = index;
    const item = itemsArray[activeIndex];
    const img = item.querySelector('img');
    const title = item.querySelector('h4').textContent;
    const subtitle = item.querySelector('p').textContent;

    if (lightboxImg && img) lightboxImg.src = img.src;
    if (lightboxCaption) lightboxCaption.innerHTML = `<strong>${title}</strong> - ${subtitle}`;
    
    lightbox.classList.add('active');
    document.body.classList.add('no-scroll');
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.classList.remove('no-scroll');
  };

  const nextImage = () => {
    let next = activeIndex + 1;
    if (next >= itemsArray.length) next = 0;
    openLightbox(next);
  };

  const prevImage = () => {
    let prev = activeIndex - 1;
    if (prev < 0) prev = itemsArray.length - 1;
    openLightbox(prev);
  };

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', nextImage);
  if (prevBtn) prevBtn.addEventListener('click', prevImage);

  // Close on backdrop click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });
}
