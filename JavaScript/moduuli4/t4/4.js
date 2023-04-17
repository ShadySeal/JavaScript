'use strict';
const input = document.querySelector('#query');
const form = document.querySelector('form');
const results = document.querySelector('#results');

form.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const value_from_input = input.value;
  try  {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
    const jsonData = await response.json();
    results.innerHTML = '';
    for (let i = 0; i < jsonData.length; i++) {
      const tvShow = jsonData[i].show;
      const article = document.createElement('article');
      const h2 = document.createElement('h2');
      const name = document.createTextNode(tvShow.name);
      const a = document.createElement('a');
      const url = document.createTextNode(tvShow.url);
      const img = document.createElement('img');
      const summary = document.createElement('div');
      const summaryText = document.createTextNode(tvShow.summary);
      h2.appendChild(name);
      a.appendChild(url);
      a.href = tvShow.url;
      a.target = '_blank';
      img.alt = tvShow.name;
      img.src = tvShow.image ? tvShow.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
      summary.appendChild(summaryText);
      article.appendChild(h2);
      article.appendChild(a);
      article.appendChild(img);
      article.appendChild(summary);
      results.appendChild(article);
    }
  } catch (error) {
    console.log(error.message);
  }
});