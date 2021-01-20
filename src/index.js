import './styles.css';
import refs from './js/refs.js';

import countryItems from './templates/countries-list.hbs';
import countryCard from './templates/country-card.hbs';

import "@pnotify/core/dist/PNotify.css"
import '@pnotify/core/dist/BrightTheme.css';
import { error } from "@pnotify/core";

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
            if (countries.length > 10) { error({
            title: 'Too many matches found. Please enter a more spesific query!',
            hide: true,
            delay: 4000
        })};
            
        })
    
        .catch(error => console.log(error));
 }, 500));