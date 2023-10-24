export default function ArticleCard(article){

    return(
        <>
        <h2>{article.article.title}</h2>
        <img src={article.article.article_img_url}></img>
        <p>{article.article.topic}</p> 
        <p>{article.article.author}</p>
        <p>Votes: {article.article.votes}</p>
        <p>Comments: {article.article.comment_count}</p>
        </>
    )
}
