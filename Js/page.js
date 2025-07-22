 // Filter functionality
 document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  tabs.forEach(tab => {
      tab.addEventListener('click', function() {
          const filter = this.getAttribute('data-filter');
          
          // Remove active class from all tabs
          tabs.forEach(t => t.classList.remove('active'));
          // Add active class to clicked tab
          this.classList.add('active');

          // Filter portfolio items
          portfolioItems.forEach(item => {
              const category = item.getAttribute('data-category');
              
              if (filter === 'all' || category === filter) {
                  item.classList.remove('hidden');
                  item.style.display = 'block';
              } else {
                  item.classList.add('hidden');
                  setTimeout(() => {
                      if (item.classList.contains('hidden')) {
                          item.style.display = 'none';
                      }
                  }, 300);
              }
          });
      });
  });

  // Add smooth animations on page load
  portfolioItems.forEach((item, index) => {
      setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
      }, index * 100);
  });
});

// Add click event for portfolio items (optional - you can add navigation here)
document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('click', function() {
      const title = this.querySelector('.portfolio-title').textContent;
      console.log(`Clicked on: ${title}`);
      // You can add navigation or modal functionality here
  });
});