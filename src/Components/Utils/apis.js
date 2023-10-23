export const fetchAllArticles  = () => {

    return fetch('https://nc-news-13ym.onrender.com/api/articles').then((response) =>
      response.json()
    );
  }

