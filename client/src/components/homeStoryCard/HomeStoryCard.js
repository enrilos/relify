import { Link } from 'react-router-dom';
import '../../styles/style.css';

const HomeStoryCard = ({
    id,
    title
}) => {
    return (
        <article className="container-story-home">
            <p>Title: {title}</p>
            {/* The below link will lead to a details page where the user can like/favourite/comment */}
            <Link to={"/details/" + id}>Read full</Link>
        </article>
    );
}

export default HomeStoryCard;