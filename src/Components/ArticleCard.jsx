import { Link } from "react-router-dom";

export default function ArticleCard(article) {
  return (
    <>
      <Link to={`/articles/${article.article.article_id}`}>
        <h2>{article.article.title}</h2>
      </Link>
      <img src={article.article.article_img_url}></img>
      <div>
        <p>{article.article.topic}</p>
        <p>{article.article.author}</p>
        <p>Votes: {article.article.votes}</p>
        <p>Comments: {article.article.comment_count}</p>
      </div>
    </>
  );
}
