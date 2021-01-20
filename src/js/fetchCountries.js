import refs from './refs';

const _ = require('lodash');

// console.log(_.debounce);

refs.input.addEventListener('input', _.debounce((e) => {
    console.log(e.target.value);
    const countryName = e.target.value;

    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
}, 500).then
);




export default fetchCountries;