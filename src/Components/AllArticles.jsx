import ArticleCard from "./ArticleCard";
import { getAllArticles } from "./Utils/apis.js";
import { useEffect, useState } from "react";

export default function AllArticles() {

    const [articles, setArticles] = useState([]);
    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
      getAllArticles()
      .then((response) => {
        setArticles(response);
        setIsLoading(false);
      });
    }, []); 

    if (loading) return <p>Loading...</p>;
 
    return (
       <div id="article-container">
     
        {articles.map((article, index)=>{
            return (
                <div id="article-card-container" key={index}>
                    <ArticleCard article={article}/>
                </div>
            )
        })}
       </div>
    )
}
