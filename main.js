let data = [];
function getData()
{
    fetch("dataMovies.json")
    .then(Response => Response.json())
    .then(dataFile => {
        data.push(dataFile);
        let option = document.createElement("option");
        let genre = "None";
        option.value = genre;
        option.text = genre;
        categoriesSelect.appendChild(option);
        showGenres(dataFile);
        showAllData(dataFile);
    });
}
function showAllData(array)
{
    let resultDiv = document.getElementById("resultDiv");
    resultDiv.innerHTML = ``;
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
        // let movieGenres = document.createElement("div");
        // movieGenres.innerHTML = `<h5>Genres: ${array[0].movies[j].genres}</h5>`;
        let movieYear = document.createElement("div");
        movieYear.innerHTML = `<h5>Year: ${array[0].movies[j].year}</h5>`;
        let movieRuntime = document.createElement("div");
        movieRuntime.innerHTML = `<h5>Runtime: ${array[0].movies[j].runtime} minutes</h5>`;
        allDataDiv.insertAdjacentElement("afterbegin",individualDataDiv);
        individualDataDiv.insertAdjacentElement("afterbegin", movieRuntime);
        individualDataDiv.insertAdjacentElement("afterbegin", movieYear);
        // individualDataDiv.insertAdjacentElement("afterbegin", movieGenres);
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
        let genre = array[0].genres[i];;
        option.value = genre;
        option.text = genre;
        categoriesSelect.appendChild(option);
    }
}
function filterData()
{
    let option = document.getElementById("categoriesSelect").value;
    let auxiliarArray = [];
    for(let k = 0; k < data[0][0].movies.length; k++)
    {
        if(data[0][0].movies[k].genres.includes(option))
        {
            auxiliarArray.push(data[0][0].movies[k]);
        }
        else
        {
            continue;
        }
    }
    showFilteredData(auxiliarArray);
}
function showFilteredData(array)
{
    let option = document.getElementById("categoriesSelect").value;
    let resultDiv = document.getElementById("resultDiv");
    let allDataDiv = document.getElementById("allDataDiv");
    allDataDiv.innerHTML = ``;
    resultDiv.innerHTML = ``;
    if(option == "None")
    {
        getData();
    }
    else if(option != "None")
    {
        for(let j = 0; j < array.length; j++)
        {
            let individualDataDiv = document.createElement("div");
            individualDataDiv.setAttribute("id", "individualDataDiv");
            individualDataDiv.setAttribute("class", "individualDataDiv");
            individualDataDiv.setAttribute("id", `${j}`);
            let movieImage = document.createElement("div");
            movieImage.innerHTML = `<img src="${array[j].posterUrl}" onerror="this.onerror=null;this.src='errorLoad.png';">`
            let movieTitle = document.createElement("div");
            movieTitle.innerHTML = `<h5>Title: ${array[j].title}</h5>`;
            // let movieGenres = document.createElement("div");
            // movieGenres.innerHTML = `<h5>Genres: ${array[j].genres}</h5>`;
            let movieYear = document.createElement("div");
            movieYear.innerHTML = `<h5>Year: ${array[j].year}</h5>`;
            let movieRuntime = document.createElement("div");
            movieRuntime.innerHTML = `<h5>Runtime: ${array[j].runtime} minutes</h5>`;
            resultDiv.insertAdjacentElement("afterbegin",individualDataDiv);
            individualDataDiv.insertAdjacentElement("afterbegin", movieRuntime);
            individualDataDiv.insertAdjacentElement("afterbegin", movieYear);
            // individualDataDiv.insertAdjacentElement("afterbegin", movieGenres);
            individualDataDiv.insertAdjacentElement("afterbegin", movieTitle);
            individualDataDiv.insertAdjacentElement("afterbegin", movieImage);
        }
    }
}
function searchMovie(array)
{
    let movieToSearch = document.getElementById("movieToSearch").value;
    let auxiliarArray = [];
    for(let l = 0; l < array[0][0].movies.length; l++)
    {
        if(array[0][0].movies[l].title.includes(movieToSearch))
        {
            auxiliarArray.push(array[0][0].movies[l]);
        }
        else
        {
            continue;
        }
    }
    showFoundMovies(auxiliarArray);
}
function showFoundMovies(array)
{
    let resultDiv = document.getElementById("resultDiv");
    let allDataDiv = document.getElementById("allDataDiv");
    allDataDiv.innerHTML = ``;
    resultDiv.innerHTML = ``;
    for(let m = 0; array.length; m++)
    {
        let individualDataDiv = document.createElement("div");
            individualDataDiv.setAttribute("id", "individualDataDiv");
            individualDataDiv.setAttribute("class", "individualDataDiv");
            individualDataDiv.setAttribute("id", `${m}`);
            let movieImage = document.createElement("div");
            movieImage.innerHTML = `<img src="${array[m].posterUrl}" onerror="this.onerror=null;this.src='errorLoad.png';">`
            let movieTitle = document.createElement("div");
            movieTitle.innerHTML = `<h5>Title: ${array[m].title}</h5>`;
            // let movieGenres = document.createElement("div");
            // movieGenres.innerHTML = `<h5>Genres: ${array[m].genres}</h5>`;
            let movieYear = document.createElement("div");
            movieYear.innerHTML = `<h5>Year: ${array[m].year}</h5>`;
            let movieRuntime = document.createElement("div");
            movieRuntime.innerHTML = `<h5>Runtime: ${array[m].runtime} minutes</h5>`;
            resultDiv.insertAdjacentElement("afterbegin",individualDataDiv);
            individualDataDiv.insertAdjacentElement("afterbegin", movieRuntime);
            individualDataDiv.insertAdjacentElement("afterbegin", movieYear);
            // individualDataDiv.insertAdjacentElement("afterbegin", movieGenres);
            individualDataDiv.insertAdjacentElement("afterbegin", movieTitle);
            individualDataDiv.insertAdjacentElement("afterbegin", movieImage);
    }
}
getData();
