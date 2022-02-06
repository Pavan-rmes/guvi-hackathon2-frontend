import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Movies } from './components/Movies';
import { Theators } from './components/movietheator';
import {movies} from "./movies"
import {Seating} from "./components/seatings"
import {AuthRoute} from "./Authroute"
import {UserLogin} from "./components/userlogin"
import {AdminLogin} from "./components/adminlogin"
import {AdminMovies} from "./components/AdminUser"
import {AddTheatre} from "./components/AddTheatre"
import {AdminTheatre} from "./components/AdminTheatre"

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <UserLogin />
        </Route>
        <AuthRoute path="/admin" exact>
          <AdminMovies />
        </AuthRoute>
        <AuthRoute path="/admin/add" exact>
          <AddTheatre />
        </AuthRoute>
        <AuthRoute path="/admin/:id" exact>
          <AdminTheatre />
        </AuthRoute>
        <Route path="/admin/login" exact>
          <AdminLogin />
        </Route>
        <AuthRoute exact path ="/">
          <Movies />
        </AuthRoute>   
        <AuthRoute exact path="/movie/:id">
          <Theators />
        </AuthRoute> 
        <AuthRoute exact path="/movie/:id/seating">
          <Seating />
        </AuthRoute>
      </Switch>
    </div>
  );
}




export default App;
