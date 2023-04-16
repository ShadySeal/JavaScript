'use strict';
const input = document.querySelector('#query');
const form = document.querySelector('form');

form.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const value_from_input = input.value;
  try  {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
    const jsonData = await response.json();
    console.log(jsonData);
    console.log(jsonData[0].show.name);
  } catch (error) {
    console.log(error.message);
  }
});