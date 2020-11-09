
import './App.css';

import {BrowserRouter,Switch,Route} from 'react-router-dom'
import allowPages from './config/role';
import {useSelector} from 'react-redux'

function App() {
  const role = useSelector(state => state.user.role)

  return (
     <BrowserRouter>
      <Switch>
        {allowPages[role].routes.map((page,idx)=>{
          
          return(
            <Route
            exact
            key={idx}
            path={page.path}
           
            render={props =>(
              <page.component {...props} />
            )} />
          )
        })}
      </Switch>
     </BrowserRouter>
  );
}

export default App;