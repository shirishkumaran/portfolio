document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Navigation Toggle ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinksContainer = document.getElementById('nav-links');
  
  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navLinksContainer.classList.toggle('active');
    });
    
    // Close mobile menu when any navigation link is clicked
    const links = navLinksContainer.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
      });
    });
  }

  // --- Active Navigation Link Tracking on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120; // offset for sticky navbar
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavOnScroll);
  
  // --- Interactive Stack Filtering ---
  const filterChips = document.querySelectorAll('.filter-chip');
  const stackCards = document.querySelectorAll('.stack-card');
  
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      // Remove active class from all chips
      filterChips.forEach(c => c.classList.remove('active'));
      // Add active to current
      chip.classList.add('active');
      
      const filterValue = chip.getAttribute('data-filter');
      
      stackCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          // Force reflow and add opacity animation
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300); // match transition duration
        }
      });
    });
  });

  // --- Modal Dialog Toggle Logic (Schedule a Call) ---
  const modalOverlay = document.getElementById('schedule-modal');
  const scheduleTriggers = document.querySelectorAll('.trigger-schedule');
  const modalCloseBtn = document.querySelector('.modal-close');
  
  if (modalOverlay && modalCloseBtn) {
    scheduleTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent body scroll
      });
    });
    
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = ''; // Re-enable scroll
    });
    
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // --- Live SVG Data Pipeline Animation Controller ---
  const svg = document.querySelector('.pipeline-svg');
  if (svg) {
    // Generate animated pulse particles flowing along paths
    const paths = svg.querySelectorAll('path.pipeline-path');
    
    paths.forEach((path, index) => {
      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = pathLength;
      
      // Let's spawn moving circles along the path
      setInterval(() => {
        createDataPacket(svg, path, index);
      }, 1500 + (index * 600)); // offset timing per path
    });
  }

  function createDataPacket(svgContainer, path, index) {
    const packet = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    packet.setAttribute('r', '4');
    packet.setAttribute('fill', index % 2 === 0 ? 'var(--primary)' : 'var(--secondary)');
    
    // Add soft glow
    packet.setAttribute('filter', 'drop-shadow(0 0 4px ' + (index % 2 === 0 ? 'var(--primary)' : 'var(--secondary)') + ')');
    
    svgContainer.appendChild(packet);
    
    const duration = 4000 + (Math.random() * 2000); // 4-6s travel time
    const startTime = performance.now();
    
    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = elapsed / duration;
      
      if (progress < 1) {
        const point = path.getPointAtLength(progress * path.getTotalLength());
        packet.setAttribute('cx', point.x);
        packet.setAttribute('cy', point.y);
        requestAnimationFrame(animate);
      } else {
        packet.remove();
        // Trigger end pulse on the target node
        triggerNodePulse(index);
      }
    }
    
    requestAnimationFrame(animate);
  }

  function triggerNodePulse(index) {
    // Select appropriate end nodes and toggle a visual flash
    const nodes = document.querySelectorAll('.pipeline-node-marker');
    if (nodes.length > 0) {
      const nodeIndex = index % nodes.length;
      const targetNode = nodes[nodeIndex];
      targetNode.classList.add('pulse-active');
      setTimeout(() => {
        targetNode.classList.remove('pulse-active');
      }, 500);
    }
  }
});
