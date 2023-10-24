import axios from "axios";

  const newsApi = axios.create({
    baseURL: 'https://nc-news-13ym.onrender.com/api'
  });
 

  export const getAllArticles = () => {

    return newsApi.get('/articles')
    .then((response) => {
     return response.data.articles
    })
    .catch((error) => {
      console.log(error);
    })
  
  }


