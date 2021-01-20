import './styles.css';
import refs from './js/refs.js';

import countryItems from './templates/countries-list.hbs';
import countryCard from './templates/country-card.hbs';

const _ = require('lodash');



refs.input.addEventListener('input', _.debounce((e) => {
    let countryName = e.target.value;
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    refs.countriesList.innerHTML = "";
    
    fetch(url)
        .then(response => response.json())
        .then(countries => {
            console.log(countries);
            const listMarkup = countryItems(countries);
            const cardMarkup = countryCard(countries);
           
            if (countries.length > 1 & countries.length < 11) { refs.countriesList.insertAdjacentHTML('beforeend', listMarkup) };
            refs.countryCard.innerHTML = "";
            if (countries.length === 1) { refs.countryCard.insertAdjacentHTML('beforeend', cardMarkup) };
            if (countries.length > 10) { };
            
        })
    
        .catch(error => console.log(error));
 }, 500));