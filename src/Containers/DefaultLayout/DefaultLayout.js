import React,{Suspense} from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import {AppBreadcrumb, DefaultHeader, DefaultSideBar, DefaultFooter,Loading} from '../../Components'
import styles from './defaultLayout.module.css'
import routs from '../../routes'
function DefaultLayout() {
    return (
        <React.Fragment>
             <Suspense fallback={<Loading />}>
                <DefaultHeader />
             </Suspense>
             <div className={styles.appBody}>
                <Suspense>
                    <DefaultSideBar />
                </Suspense>
                <main className={styles.main}>
                    <AppBreadcrumb />
                    <div className={styles.container}>
                    <Suspense fallback={<Loading />}>
                        <Switch>
                        {routs.map((route, idx) => {
                            return route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                <route.component {...props} />
                                )} />
                            ) : (null);
                        })}
                        <Redirect from="/" to="/dashboard" />
                        </Switch>
                    </Suspense>
                    </div>
                </main>
             </div>
             <Suspense>
                <DefaultFooter />
             </Suspense>
        </React.Fragment>
    )
}

export default DefaultLayout
