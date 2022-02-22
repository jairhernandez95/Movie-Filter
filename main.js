fetch("dataMovies.json")
    .then(Response => Response.json())
    .then(dataFile => {
        showGenres(dataFile);
        showAllData(dataFile);
    });

function showAllData(array)
{
    let allDataDiv = document.getElementById("allDataDiv");
    for(let j = array[0].movies.length-1; j >= 0; j--)
    {
        let individualDataDiv = document.createElement("div");
        individualDataDiv.setAttribute("id", "individualDataDiv");
        individualDataDiv.setAttribute("class", "individualDataDiv");
        individualDataDiv.setAttribute("id", `${j}`);
        let movieImage = document.createElement("div");
        movieImage.innerHTML = `<img src="${array[0].movies[j].posterUrl}" onerror="this.onerror=null;this.src='errorLoad.png';">`
        let movieTitle = document.createElement("div");
        movieTitle.innerHTML = `<h5>Title: ${array[0].movies[j].title}</h5>`;
        let movieGenres = document.createElement("div");
        movieGenres.innerHTML = `<h5>Genres: ${array[0].movies[j].genres}</h5>`;
        let movieYear = document.createElement("div");
        movieYear.innerHTML = `<h5>Year: ${array[0].movies[j].year}</h5>`;
        let movieRuntime = document.createElement("div");
        movieRuntime.innerHTML = `<h5>Runtime: ${array[0].movies[j].runtime} minutes</h5>`;
        allDataDiv.insertAdjacentElement("afterbegin",individualDataDiv);
        individualDataDiv.insertAdjacentElement("afterbegin", movieRuntime);
        individualDataDiv.insertAdjacentElement("afterbegin", movieYear);
        individualDataDiv.insertAdjacentElement("afterbegin", movieGenres);
        individualDataDiv.insertAdjacentElement("afterbegin", movieTitle);
        individualDataDiv.insertAdjacentElement("afterbegin", movieImage);
    }
}

function showGenres(array)
{
    let categoriesSelect = document.getElementById("categoriesSelect");
    for(let i = 0; i < array[0].genres.length; i++)
    {
        let option = document.createElement("option");
        let genre = array[0].genres[i];
        option.value = genre;
        option.text = genre;
        categoriesSelect.appendChild(option);
    }
    showDataFiltered(array)
}
function showDataFiltered(array)
{
    // Falta mostrar la info de la categoría filtrada
    // console.log(array);
}