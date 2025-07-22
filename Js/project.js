// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const blogPosts = document.querySelectorAll('.blog-post-item');
const searchInput = document.getElementById('searchInput');
const noResults = document.querySelector('.no-results');
const loadMoreBtn = document.querySelector('.load-more-btn');

// Filter by category
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        filterPosts(filterValue);
    });
});

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterPosts(getCurrentFilter(), searchTerm);
});

function getCurrentFilter() {
    const activeFilter = document.querySelector('.filter-btn.active');
    return activeFilter.getAttribute('data-filter');
}

function filterPosts(category, searchTerm = '') {
    let visibleCount = 0;
    
    blogPosts.forEach(post => {
        const postCategory = post.getAttribute('data-category');
        const postTitle = post.querySelector('.blog-item-title').textContent.toLowerCase();
        const postText = post.querySelector('.blog-text').textContent.toLowerCase();
        
        const matchesCategory = category === 'all' || postCategory === category;
        const matchesSearch = searchTerm === '' || 
            postTitle.includes(searchTerm) || 
            postText.includes(searchTerm);
        
        if (matchesCategory && matchesSearch) {
            post.classList.remove('hidden');
            visibleCount++;
        } else {
            post.classList.add('hidden');
        }
    });
    
    // Show/hide no results message
    if (visibleCount === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }
}

// Load more functionality (placeholder)
loadMoreBtn.addEventListener('click', () => {
    // Simulate loading more posts
    loadMoreBtn.textContent = 'Loading...';
    
    setTimeout(() => {
        loadMoreBtn.textContent = 'Load More Articles';
        // In a real application, you would load more posts here
    }, 1000);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add loading states and hover effects
document.querySelectorAll('.blog-post-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Add loading state
        this.style.opacity = '0.7';
        
        // Simulate navigation delay
        setTimeout(() => {
            this.style.opacity = '1';
            // In a real application, you would navigate to the article
        }, 300);
    });
});