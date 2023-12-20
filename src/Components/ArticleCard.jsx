import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { CommentSvg , HeartSvg} from "../Assets/SvgFile";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

export default function ArticleCard(article) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Link href={`/articles/${article.article.article_id}`}>
          <Card.Title>{article.article.title}</Card.Title>
        </Card.Link>
      </Card.Body>
      <Badge pill bg="secondary" style={{ marginBottom: "10px" , width:"100px"}}>
        {article.article.topic}
      </Badge>
      <Card.Img variant="top" src={article.article.article_img_url} />

      <ListGroup className="list-group-flush">
        <Card.Body>
          {article.article.author}
          <ListGroup.Item>
            <HeartSvg /> {article.article.votes}
            <CommentSvg /> {article.article.comment_count}
          </ListGroup.Item>
        </Card.Body>
      </ListGroup>
    </Card>
  );
}
