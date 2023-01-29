document.addEventListener("DOMContentLoaded", function (event) {
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=I5W01goc8necGwNg5qa26KhAzcdoQn18AZBX6oCy"
  )
    .then((response) => response.json())
    .then((nasa) => {
      console.log(nasa);
      document.querySelector("#nasa").src = nasa.url;
      document.querySelector(".date").textContent = nasa.date;
      document.querySelector(".copyright").textContent = nasa.copyright;
      document.querySelector(".explanation").textContent = nasa.explanation;
    })
    .catch((error) => {
      console.log(error);
    });
});
