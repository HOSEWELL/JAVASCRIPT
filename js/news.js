function searchNews() {
    const breakingnews = `https://newsdata.io/api/1/latest?apikey=pub_45349352ccbe1b47e38b63929fe0cb3e6c6f6&language=en${article}`;
  
    fetch(breakingnews)
      .then(response => response.json())
      .then(data => {
        const news = data.articles.map(article => ({
          title: article.title,
          image: article.urlToImage,
          content: article.content,
        }));
        displayNews(news);
      })
      // .catch(error => {
      //   console.error('Error fetching or processing news:', error);
        
      //   alert('Failed to fetch news. Please try again later.');
      // });
  }
  
  function displayNews(news) {
    const newsList = document.getElementById("newsList");
    newsList.innerHTML = '';
  
    news.forEach(article => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<h2><b>${article.title}</b></h2>
      <br>
        <span>Image: <img src="${article.image}" width="100" height="100"></span>
      <br>
        <span>content: <a href="${article.content}" target="_blank">${article.content}</a></span>`;
        
      newsList.appendChild(listItem);
    });
  }
  