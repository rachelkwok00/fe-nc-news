import { useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "./Utils/apis.js";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [params] = useSearchParams();
  const [sortOption, setSortOption] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc"); 


  useEffect(() => {
    const topic = params.get("topic");

    getAllArticles(topic, sortOption, sortOrder).then((response) => {
      if (!response) return;
      setArticles(response);
    });
  }, [params, sortOption, sortOrder]);

  useEffect(() => {
    setIsLoading(!articles || articles.length === 0 ? true : false);
  }, [articles]);

  const handleSortBy = (newSortOption) => {
    setSortOption(newSortOption);
  };
  
  const handleOrderChange = (newOrder) => {
    setSortOrder(newOrder);
  };


  const ArticleCards = () => {
  
    return articles.map((article, index) => (
      <div id="article-card-container" key={index}>
        <ArticleCard article={article} />
      </div>
    ));
  };

  if (loading) return < LoadingSpinner />

  return (
    <div >
      <div className="sort-by-container">
      <label>Sort by:</label>
      <select className="sort-options" value={sortOption} onChange={(e) => handleSortBy(e.target.value)}>
        <option value="date">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>

      <select className="order-options" value={sortOrder} onChange={(e) => handleOrderChange(e.target.value)}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>

    </div>
    <div id="article-container">
      <ArticleCards />
      </div>
    </div>
  );
}
