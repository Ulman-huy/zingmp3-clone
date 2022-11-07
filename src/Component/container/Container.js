import styles from './Container.module.scss'
import Header from '../header/Header'
import Content from '../content/Content'

function Container() {
    return (
        <div className={styles.container}>
            <Header />
            <Content />
        </div>
    )
}

export default Container