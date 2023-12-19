import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-13ym.onrender.com/api",
});

const getComparator = (sortOption, sortOrder) => {

  if (sortOption === "created_at") {
    switch (sortOrder) {
      case "asc":
        return (a, b) => Date.parse(a["created_at"]) - Date.parse(b["created_at"]);
      case "desc":
        return (a, b) => Date.parse(b["created_at"]) - Date.parse(a["created_at"]);
      default:
        throw new Error("this should never happen");
    }
  }

  switch (sortOrder) {
    case "asc":
      return (a, b) => a[sortOption] - b[sortOption];
    case "desc":
      return (a, b) => b[sortOption] - a[sortOption];
    default:
      throw new Error("this should never happen");
  }
};

export const getAllArticles = (topic, sortOption, sortOrder) => {
  return getAllTopics()
    .then((topics) => {
      const validTopic = topics.some((elem) => elem.slug === topic);

      return newsApi
        .get("/articles" + (validTopic ? `?topic=${topic}` : ""))
        .then((a) =>
          a.data.articles.sort(getComparator(sortOption, sortOrder))
        );
    })
    .catch(console.error);
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

export const getCommentsById = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
      return response.data.comment;
    })
    .catch(console.error);
};

export const updateVote = (article_id, value) => {
  return newsApi
    .patch(`/articles/${article_id}`, { vote_increment: value })
    .then((response) => {
      return response.data.article;
    });
};

export const getUsername = () => {
  return newsApi
    .get(`/users`)
    .then((response) => {
      return response.data.users;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const postComment = (article_id, commentObj) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, commentObj)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getAllTopics = () => {
  return newsApi
    .get("/topics")
    .then((response) => {
      return response.data.topics;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const deleteComment = (commentID) => {
  console.log(commentID,"COMMENT ID IN API")
return newsApi
    .delete(`/comments/${commentID}`).then(()=>{
      console.log("IN API - DELETEcOMMENT")
    })
    .catch((error) => {
      console.error(error);
    });
};
