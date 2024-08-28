document.getElementById('search').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        alert('Search for: ' + this.value);
    }
});
