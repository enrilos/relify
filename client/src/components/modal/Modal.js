import styles from './Modal.module.css';

const Modal = ({
    updateModal,
    deleteHandler,
    type
}) => {

    const typeLowerCase = type.toLowerCase();

    return (
        <div className={styles['modal-background']}>

            <div className={typeLowerCase === 'slide' ? styles['modal-container'] : styles['modal-container-thumb']}>
                <div className={styles['title-close-button']}>
                    <button onClick={() => updateModal(false)}>X</button>
                </div>
                <div className={typeLowerCase === 'slide' ? styles['title'] : null}>
                    <h1>Delete this record?</h1>
                </div>
                <div className={typeLowerCase === 'slide' ? styles['body'] : styles['body-thumb']}>
                    <p>Once you delete this, there is no going back.</p>
                </div>
                <div className={styles['footer']}>
                    <button className={styles['cancel-button']} onClick={() => updateModal(false)}>Cancel</button>
                    <button className={styles['confirm-button']} onClick={(e) => deleteHandler(e)}>Confirm</button>
                </div>
            </div>

        </div>
    );
}

export default Modal;