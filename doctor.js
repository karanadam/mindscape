fetch("https://api.practo.com/doctors/?page=1")
  .then((response) => response.json())
  .then((data) => console.log(data));
