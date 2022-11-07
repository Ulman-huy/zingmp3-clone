import styles from './SearchHistory.module.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '../../icon/Icon'
import { history } from './history'

function SearchHistory({ onClick }) {
    return (
        <div className={styles.searchHistory}
        >
            <div className={styles.title}>
                Đề xuất cho bạn
            </div>  
            <ul className={styles.listSong}>
                {history.map(item => (
                    <li key={item.id} className={styles.itemSong}>
                        <Link to={item.to}
                            onClick={onClick}
                        >
                            <FontAwesomeIcon icon={item.icon} />
                            <span>
                                {item.title}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchHistory