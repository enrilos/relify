import styles from './Modal.module.css';

const Modal = ({
    updateModal,
    deleteHandler
}) => {
    return (
        <div className={styles['modal-background']}>
            <div className={styles['modal-container']}>
                <div className={styles['title-close-button']}>
                    <button onClick={() => updateModal(false)}>X</button>
                </div>
                <div className={styles['title']}>
                    <h1>Delete this record?</h1>
                </div>
                <div className={styles['body']}>
                    <p>Once you delete this, there is no going back.</p>
                </div>
                <div className={styles['footer']}>
                    <button className={styles['cancel-button']} onClick={() => updateModal(false)}>Cancel</button>
                    <button className={styles['confirm-button']} onClick={() => deleteHandler()}>Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;