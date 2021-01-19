
const apiKey = '85ca983cef8845c4ab4033de661fe4ed';
function fetchArticles(searchQuery) {

const url = `http://newsapi.org/v2/everything?q=${searchQuery}&language=en`;   
const options = {
    headers: {
        'X-Api-Key': apiKey,
    }
};
    
  return fetch(url, options)
    .then(res => res.json())
    .then(data => data.articles)
    .catch(error => console.log(error));
    
};


export default fetchArticles;