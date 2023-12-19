import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function ArticleCard(article) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={article.article.article_img_url} />
      <Card.Body>
        <Card.Link href={`/articles/${article.article.article_id}`}><Card.Title>{article.article.title}</Card.Title></Card.Link>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{article.article.topic}</ListGroup.Item>
        <ListGroup.Item>{article.article.author}</ListGroup.Item>
        <ListGroup.Item>Votes: {article.article.votes}</ListGroup.Item>
        <ListGroup.Item>
          Comments: {article.article.comment_count}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
