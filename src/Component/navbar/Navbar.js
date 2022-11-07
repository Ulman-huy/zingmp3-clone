import styles from './Navbar.module.scss'
import { NavLink, Link } from 'react-router-dom'
import clsx from 'clsx'
import logo from '../../image/logo-dark.svg'
import * as icons from '../../icon/Icon'
import { useState, useRef } from 'react'
import { NavbarData, ScrollBarData, library, bannerSliceBar } from './NavbarData'
function Navbar() {
    
    return (
        <div className={styles.navbar}>
            <NavLink to="/">
                <div className={styles.navbarImage}>
                    <img className={styles.navbarIcon} src={logo}/>
                </div>
            </NavLink>
            <div className={styles.wrapperNavbar}>
                <ul className={styles.navbarList}>
                    {NavbarData.map((item) => (
                        <li key={item.id} className={clsx(styles.navbarItem)}>
                            <NavLink to={item.link} activeclassname='active' id='navBar'>
                                <icons.FontAwesomeIcon icon={item.icon}/>
                                <span>
                                    {item.title}
                                    {item.hover ? <icons.FontAwesomeIcon className={styles.hoverIcon} icon={item.hover}/> : ''}
                                </span>
                                {item.img ? <img className={styles.liveIcon} src={item.img} /> : ''}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className={styles.slicebarDevice}></div>
                <div className={styles.wrapperSroll}>
                    <div className={styles.slicebarScroll}>
                        <ul className={styles.navbarList}>
                            {ScrollBarData.map((item) => (
                                <li key={item.id} className={clsx(styles.navbarItem)}>
                                <NavLink to={item.link} activeclassname={'active'}>
                                    <icons.FontAwesomeIcon icon={item.icon}/>
                                    <span>
                                        {item.title}
                                        {item.hover ? <icons.FontAwesomeIcon className={styles.hoverIcon} icon={item.hover}/> : null}
                                    </span>
                                </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.bannerSliceBar}>
                            {bannerSliceBar.map((item, index) => (
                                <div key={index} className={clsx(styles.bannerLogin, {
                                    [styles.vip]:  item.type === 'vip' ? true : false
                                })}>
                                    <div className='title'>
                                        {item.title}
                                    </div>
                                    <button className={item.type == 'vip' ? 'btn isUpper' : 'btn'}>
                                        {item.btnTitle}
                                    </button>
                                </div>
                            ))}
                        </div>
                        <nav className={styles.navMyMusic}>
                            <div className={styles.myMusicTile}>
                                    <span>THƯ VIỆN</span>
                                    <div className={styles.editLibrary}>
                                        <icons.FontAwesomeIcon className={styles.hoverIcon} icon={icons.faPen}/>
                                    </div>
                            </div>
                            <ul className={styles.navbarList}>
                                {library.map((item) => (
                                    <li key={item.id} className={styles.navbarItem}>
                                        <Link to={item.link}>
                                            <img className={styles.icon} src={item.src}/>
                                            <span>
                                                {item.title}
                                                {item.icon ? <icons.FontAwesomeIcon className={styles.hoverIcon} icon={item.icon}/> : false }
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className={styles.addList}>
                <icons.FontAwesomeIcon icon={icons.faPlus} />
                <span>Tạo playlist mới</span>
            </div>
        </div>
    )
}

export default Navbar