import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import storyService from "../../../services/storyService";
import Modal from '../../modal/Modal';
import styles from './Owner.module.css';

const Owner = ({
    storyId,
    storyLikes
}) => {

    let navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);

    const deleteHandler = (e) => {
        storyService.deleteStory(storyId).then(x => navigate("/myStories")).catch(err => console.error(err));
    }

    const updateModal = (value) => {
        setOpenModal(value);
    }

    return (
        <section>
            <section className={styles['container-story-details-owner-buttons']}>

                {
                    openModal
                        ?
                        <Modal
                            updateModal={updateModal}
                            deleteHandler={deleteHandler}
                        />
                        :
                        <>
                            <Link to={"/edit/" + storyId} className={styles['container-story-details-action-edit']}>Edit</Link>
                            <Link to="#" onClick={() => setOpenModal(true)} className={styles['container-story-details-action-delete']}>Delete</Link>
                        </>}
            </section>
            <p className={styles['total-likes']}>{storyLikes === 0 ? 'No likes yet.' : `${storyLikes} ${storyLikes === 1 ? 'like' : 'likes'}`}</p>
        </section>
    );
}

export default Owner;