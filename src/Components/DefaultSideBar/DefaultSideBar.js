import React from 'react'
import nav from '../../nav'
import SideBarItem from './SideBarItem'
import styles from './defaultSideBar.module.css'
function DefaultSideBar() {
    return (
        <div className={styles.sideBar}>
            <ul className={styles.nav}>
                {
                    nav.map((child,index) => {
                        const { label, icon, path,submenu } = child;

                            return (
                            <SideBarItem
                                key={label}
                                label={label}
                                icon={icon}
                                path={path}
                                submenu={submenu}
                                index={index}
                            />
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default DefaultSideBar
