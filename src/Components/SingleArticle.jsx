import { useEffect, useState } from "react";
import { getArticleById } from "./Utils/apis";
import { useParams } from "react-router-dom";
import Timestamp from 'react-timestamp';
import Comments from "./Comments";
import ErrorMessage from "./ErrorMessage";


export default function SingleArticle(){

  const [article, setArticle] = useState({});
    const [loading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);

    const {article_id} = useParams()

    useEffect(() => {
      getArticleById(article_id)
      .then((response) => {
  
        setArticle(response);
        setIsLoading(false);
      }).catch(() =>{
        setErr(true)
        setIsLoading(false);
      });
    }, []); 

    if (loading) return <p>Loading...</p>
 
    if (err) return <ErrorMessage message={"Article not found"} />

    return(
        <div> <div id="single-article-container">
  <h2>{article.title}</h2>
  <p>{article.topic}</p>
  <img src={article.article_img_url}></img>
  <p>{article.body}</p> 
   <p>written by: {article.author} on <Timestamp date={article.created_at} /></p>
</div><div id="comments-container">
    <Comments />
    </div>
        </div>
    )
}
