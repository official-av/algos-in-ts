import debounce from "../../polyfills/debounce.js";

let resultsWrapper = document.querySelector('.search-results-wrapper');
let resultsList = document.querySelector('.search-results');
document.getElementById("search").addEventListener("keyup", function (event) {
    const latestVal = event.target.value;
    searchHandler(latestVal);
});

const searchHandler = (keyword) => {
    if (keyword.trim() !== '') {
        debounce(300)
            .then(hideResults())
            .then(clearResults())
            .then(() => {
                fetchData(keyword)
                    .then((data) => populateResults(data.results));
            });
    } else {
        clearResults();
    }

}

const fetchData = async (keyword) => {
    const response = await fetch(`https://itunes.apple.com/search?term=${keyword}&media=music&entity=allArtist&limit=10`);
    return await response.json();
}

const populateResults = (results) => {
    // create and append children to parent
    results.forEach(r => {
        const newRecordElement = document.createElement('li');
        newRecordElement.className = 'result-item';
        newRecordElement.innerText = `${r.artistName} (${r.primaryGenreName})`;
        resultsList.appendChild(newRecordElement);
    });
    // show wrapper
    showResults();
}

const clearResults = () => {
    while (resultsList.firstChild) {
        resultsList.lastChild.remove()
    }
}

function hideResults() {
    resultsWrapper.style.display = 'none';
}

function showResults() {
    resultsWrapper.style.display = 'flex';
}
