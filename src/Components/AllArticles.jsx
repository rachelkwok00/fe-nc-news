import ArticleCard from "./ArticleCard";
import { fetchAllArticles } from "./Utils/apis";
import { useEffect, useState } from "react";



export default function AllArticles() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
      fetchAllArticles().then((body) => {
        setArticles(body.articles);
      });
    }, []); 

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
