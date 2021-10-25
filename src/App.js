import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Loading} from './Components'
// Containers
const DefaultLayout = React.lazy(() => import('./Containers/DefaultLayout/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./Pages/Login/Login'));
const Register = React.lazy(() => import('./Pages/Register/Register'));
const Page404 = React.lazy(() => import('./Pages/Page404/Page404'));
const Page500 = React.lazy(() => import('./Pages/Page500/Page500'));
function App() {
  return (
   <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
          <Switch>
              <Route exact path="/" name="صفحه ورود" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/dashboard"  name="داشبورد"  render={props => <DefaultLayout {...props}/>} />  
              <Route path="*" render={props => <Page404 {...props}/>} />    
          </Switch>
      </React.Suspense>
    </BrowserRouter>
    
  );
}

export default App;
