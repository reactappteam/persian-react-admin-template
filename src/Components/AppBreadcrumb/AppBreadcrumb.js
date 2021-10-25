import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import routs from '../../routes'
import styles from './appBreadcrum.module.css'
function AppBreadcrumb(props) {
    const crumbs = routs
        // Get all routes that contain the current one.
        .filter(({ path }) => props.match.path.includes(path))
        // Swap out any dynamic routes with their param values.
        // E.g. "/pizza/:pizzaId" will become "/pizza/1"
        .map(({ path, ...rest }) => ({
            path: Object.keys(props.match.params).length
            ? Object.keys(props.match.params).reduce(
                (path, param) => path.replace(
                    `:${param}`, props.match.params[param]
                ), path
                )
            : path,
            ...rest
        }));
       
      
        if (crumbs.length <= 0) {
            return null;
          }
        return (
        <div className={styles.breadcrum}>
            {/* Link back to any previous steps of the breadcrumb. */}
            {crumbs.map(({ name, path }, key) =>
            key + 1 === crumbs.length ? (
                <span key={key} className="mr-1">
                {name}
                </span>
            ) : (
                <Link key={key} to={path}>
                    /<span className=" text-blue-500 font-bold">{name}</span> 
                </Link>
            )
            )}
        </div>
        );
}

export default withRouter(AppBreadcrumb)
