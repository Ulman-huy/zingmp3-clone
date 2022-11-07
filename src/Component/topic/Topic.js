import styles from '../topic/Topic.module.scss'
import * as icons from '../../icon/Icon'

function Topic(props) {
    return(
        <div className={styles.topic}>
            <div className={styles.topicContainer}>
                <div className={styles.title}>
                    <h2>Giao Diện</h2>
                    <icons.FontAwesomeIcon 
                        icon={icons.faXmark}
                        onClick={props.onClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default Topic