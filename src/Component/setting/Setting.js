import styles from '../setting/Setting.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import * as icons from '../../icon/Icon'
import { dataSetting, dataUser } from './data'
function Setting ({ type }) {
    return(
        <div className={styles.setting}>
            <div className={styles.container}>
                {type == 'setting' && dataSetting.map(item => ( 
                    <div key={item.id}>
                        {item.type == 'Link' ? 
                            <div className={clsx(styles.listBlack)}>
                                <Link className={styles.link} to={item.link}>
                                    <div className={styles.icon}>
                                        <icons.FontAwesomeIcon icon={item.icon} />
                                    </div>
                                    <span>{item.title}</span>
                                </Link>
                            </div> : 
                            null
                        }
                        {item.id === 4 ? <div><div className={styles.slice}></div></div> : null}
                        {item.type == 'div' ? 
                            <div className={clsx(styles.listBlack,{
                                [styles.text]: item.id == 4
                            })}>
                                <div className={styles.link}>
                                    <div className={clsx(styles.icon, styles.mr)}>
                                        <icons.FontAwesomeIcon icon={item.icon} />
                                    </div>
                                    <span>{item.title}</span>
                                </div>
                            </div> : 
                            null
                        }
                        {item.type == 'a' ? 
                            <div className={clsx(styles.listBlack, styles.text)}>
                                <a href={item.href} className={styles.link}>
                                    <div className={styles.icon}>
                                        <icons.FontAwesomeIcon icon={item.icon} />
                                    </div>
                                    <span>{item.title}</span>
                                </a>
                            </div> : 
                            null
                        }
                        
                    </div>
                ))}

                {type == 'user' && dataUser.map(item => (
                    <div key={item.id}>
                        {item.type == 'a' ? 
                            <div className={clsx(styles.listBlack, styles.text)}>
                                <a href={item.href} className={styles.link}>
                                    <div className={styles.icon}>
                                        <icons.FontAwesomeIcon icon={item.icon} />
                                    </div>
                                    <span>{item.title}</span>
                                </a>
                            </div> : 
                            null
                        }
                        {item.id === 2 ? <div><div className={styles.slice}></div></div> : null}
                        {item.type == 'div' ? 
                            <div className={clsx(styles.listBlack, styles.logout)}>
                                <div className={styles.link}>
                                    <div className={clsx(styles.icon, styles.mr)}>
                                        <icons.FontAwesomeIcon icon={item.icon} />
                                    </div>
                                    <span>{item.title}</span>
                                </div>
                            </div> : 
                            null
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Setting
