import styles from './Gallery.module.scss'
import clsx from 'clsx'

function Gallery() {
    return (
        <div className={styles.gallery}>
            <div className={styles.container}>
                <div className={styles.btn}>

                </div>
                <div className={clsx(styles.galleryItem, styles.first)}>
                    <Link to='/'>
                        <div className={styles.image}>
                            <img src=""/>
                        </div>
                    </Link>
                </div>
                <div className={clsx(styles.galleryItem, styles.second)}>
                    <Link to='/'>
                        <div className={styles.image}>
                            <img src=""/>
                        </div>
                    </Link>
                </div>
                <div className={clsx(styles.galleryItem, styles.add)}>
                    <Link to='/'>
                        <div className={styles.image}>
                            <img src=""/>
                        </div>
                    </Link>
                </div>
                <div className={clsx(styles.galleryItem, styles.last)}>
                    <Link to='/'>
                        <div className={styles.image}>
                            <img src=""/>
                        </div>
                    </Link>
                </div>
                <div className={clsx(styles.galleryItem, styles.previous)}>
                    <Link to='/'>
                        <div className={styles.image}>
                            <img src=""/>
                        </div>
                    </Link>
                </div>
                <div className={clsx(styles.galleryItem, styles.next)}>
                    <Link to='/'>
                        <div className={styles.image}>
                            <img src=""/>
                        </div>
                    </Link>
                </div>
                <div className={styles.btn}>

                </div>
            </div>
        </div>
    )
}

export default Gallery