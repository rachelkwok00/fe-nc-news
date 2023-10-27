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


  export const updateVote = (article_id , value ) => {

    return newsApi.patch(`/articles/${article_id}`, { vote_increment : value }).then((response)=>{
      return response.data.article
    })
  }

  export const getUsername = () => {

    return newsApi.get(`/users`)
    .then((response) => {
     return response.data.users
   
    })
    .catch((error) => {
      console.log(error);
    })
  
  }

  export const postComment = (article_id , commentObj) => {

    return newsApi.post(`/articles/${article_id}/comments`, commentObj).then((response) => {
    
   return response.data
    })
    .catch((error) => {
      console.log(error);
    })
  
  }