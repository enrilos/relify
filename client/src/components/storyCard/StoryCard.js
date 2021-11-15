import '../../styles/style.css';

const StoryCard = ({
    title,
    content
}) => {
    return (
        <article className="container-story">
            <p>Title: {title}</p>
            <p>Content: {content}</p>
            <p>Like</p>
            <p>Add to Favourites</p>
        </article>
    );
}

export default StoryCard;