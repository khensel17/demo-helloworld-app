fetch('/api/config')
  .then((response) => response.json())
  .then((data) => {
    document.body.style.backgroundColor = data.bgColor;
  })
  .catch((error) => console.error('Error fetching config:', error));
