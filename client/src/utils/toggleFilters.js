export function setupFilterToggle() {
  const toggleBtn = document.getElementById('toggle-filters-btn');
  const filterSection = document.querySelector('.left-section-filters');

  if (!toggleBtn || !filterSection) return;

  toggleBtn.addEventListener('click', () => {
    filterSection.classList.toggle('visible');
    toggleBtn.textContent = filterSection.classList.contains('visible')
      ? 'Hide Filters'
      : 'Show Filters';
  });
}
