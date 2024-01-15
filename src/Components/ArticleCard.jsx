import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { CommentSvg , HeartSvg} from "../Assets/SvgFile";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

export default function ArticleCard(article) {
  return (
    <div className="article-card-container">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Link as={Link} to={`/articles/${article.article.article_id}`}>
            <Card.Title className="card-title">
              {article.article.title}
            </Card.Title>
          </Card.Link>
        </Card.Body>
        <div className="badge-container">
          <Badge
            pill
            bg="secondary"
            style={{ marginBottom: "10px", width: "100px" }}
          >
            {article.article.topic}
          </Badge>
        </div>
        <Card.Img variant="top" src={article.article.article_img_url} />

        <ListGroup className="list-group-flush">
          <Card.Body>
            <div className="author-container">{article.article.author}</div>

            <ListGroup.Item>
              <div>
              <HeartSvg/> {article.article.votes}
              </div>
              <div>
              <CommentSvg/>{article.article.comment_count}
              </div>
            </ListGroup.Item>
          </Card.Body>
        </ListGroup>
      </Card>
    </div>
  );
}
