export function setupProjectFilter() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectItems = document.querySelectorAll('[data-category]');
  
  if (!filterButtons.length || !projectItems.length) return;
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('bg-primary-600', 'text-white'));
      filterButtons.forEach(btn => btn.classList.add('bg-white', 'text-gray-800'));
      
      // Add active class to clicked button
      button.classList.remove('bg-white', 'text-gray-800');
      button.classList.add('bg-primary-600', 'text-white');
      
      const filter = button.getAttribute('data-filter');
      
      // Show/hide projects based on filter
      projectItems.forEach(item => {
        const categories = item.getAttribute('data-category').split(' ');
        
        if (filter === 'all' || categories.includes(filter)) {
          item.classList.remove('hidden');
          setTimeout(() => {
            item.classList.remove('opacity-0');
            item.classList.add('opacity-100');
          }, 50);
        } else {
          item.classList.add('opacity-0');
          setTimeout(() => {
            item.classList.add('hidden');
          }, 300);
        }
      });
    });
  });
}