import { Link } from 'react-router-dom';
import '../../styles/style.css';

const HomeStoryCard = ({
    id,
    title,
    content
}) => {
    return (
        <Link className="container-story-wrapper" to={"/details/" + id}>
            <article className="container-story-home">
                <p></p>
                <p className="container-story-home-title">{title}</p>
                <p className="container-story-home-content">{content}</p>
                {/* The below link will lead to a details page where the user can like/favourite/comment */}
                {/* <Link to={"/details/" + id}>Read full</Link> */}
            </article>
        </Link>
    );
}

export default HomeStoryCard;