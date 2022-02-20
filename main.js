fetch("dataMovies.json")
    .then(Response => Response.json())
    .then(dataFile => {
        showGenres(dataFile);
        showAllData(dataFile);
    });

function showAllData(array)
{
    console.log(array[0].genres);
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
    console.log(array);
}