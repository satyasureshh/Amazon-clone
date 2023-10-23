const searchSelect = document.querySelector('.search-select');
const searchOptions = document.querySelector('.search-options');

searchSelect.addEventListener('click', function() {
  searchOptions.style.display = 'block';
});

searchOptions.addEventListener('click', function(event) {
  const selectedOption = event.target.innerText;
  searchSelect.value = selectedOption;
  searchOptions.style.display = 'none';
});