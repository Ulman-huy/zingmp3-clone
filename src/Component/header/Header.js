import styles from './Header.module.scss'
import * as icons from '../../icon/Icon'
import avatar from '../../image/avatar.jpeg'
import clsx from 'clsx'
import { useState } from 'react'
import Topic from '../topic/Topic'
import Setting from '../setting/Setting'
import SearchHistory from '../searchHistory/SearchHistory'

function Header() {
    const [isTopic, setIsTopic] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [isUser, setIsUser] = useState(false)
    const [isFocus, setIsFocus] = useState(false)

    const handleIsTopic = () => {
        setIsTopic(!isTopic)
    }
    const handleShowSetting = () => {
        setIsShow(!isShow)
    }
    const handleIsUser = () => {
        setIsUser(!isUser)
    }
    const handleIsFocus = () => {
        setIsFocus(!isFocus)
    }
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.headerLeft}>
                    <div className={styles.btnHistory}>
                        <button className={clsx(styles.btn, styles.disable)}>
                            <icons.FontAwesomeIcon icon={icons.faArrowLeft} />
                        </button>
                        <button className={clsx(styles.btn, styles.disable)}>
                            <icons.FontAwesomeIcon icon={icons.faArrowRight} />
                        </button>
                    </div>
                    <div className={styles.search}>
                        <div className={clsx(styles.searchContainer, {
                                [styles.focus]: isFocus
                            })}>
                            <div className={clsx(styles.searchIcon)}>
                                <icons.FontAwesomeIcon icon={icons.faMagnifyingGlass} />
                            </div>
                            <input 
                                onFocus={handleIsFocus} 
                                className={styles.searchInput} 
                                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                                />
                            {isFocus && <SearchHistory onClick={handleIsFocus} setIsFocus={setIsFocus} isFocus={isFocus}/> }
                        </div>
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <div 
                        className={clsx(styles.settings, styles.btn)}
                        title='Chủ đề'
                        onClick={handleIsTopic}
                    >
                        <icons.FontAwesomeIcon icon={icons.faShirt} />
                    </div>
                    <div 
                        className={clsx(styles.vip, styles.btn)}
                        title='Nâng cấp VIP'
                    >
                        <a href='/'>
                            <icons.FontAwesomeIcon icon={icons.faGem} />
                        </a>
                    </div>
                    <label 
                        htmlFor='upload' 
                        className={clsx(styles.upload, styles.btn)}
                        title='Tải lên'
                    >
                        <icons.FontAwesomeIcon icon={icons.faArrowUpFromBracket} />
                        <input id='upload' type='file'/>
                    </label>
                    <div 
                        className={clsx(styles.settings, styles.btn)}
                        title='Cài đặt'
                        onClick={handleShowSetting}
                    >
                        <icons.FontAwesomeIcon icon={icons.faGear} />
                        {isShow && <Setting type='setting'/>}
                    </div>
                    <div className={clsx(styles.user, styles.btn)}>
                        <div className={styles.avatar} onClick={handleIsUser}>
                            <img src={avatar} width="40px"/>
                            {isUser && <Setting  type='user'/>}
                        </div>
                    </div>
                </div>
            </div>
            {isTopic &&  <Topic onClick={handleIsTopic}/>}
        </header>
    )
}

export default Header