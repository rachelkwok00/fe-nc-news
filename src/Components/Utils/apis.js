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
      console.error(error);
    })
  }

  export const getArticleById = (article_id) => {

    return newsApi.get(`/articles/${article_id}`)
    .then((response) => {
   
     return response.data.article
   
    })
  
  }

  export const getCommentsById = (article_id) => {

    return newsApi.get(`/articles/${article_id}/comments`)
    .then((response) => {
     return response.data.comment
   
    })
    .catch((error) => {
      console.log(error);
    })
  
  }
