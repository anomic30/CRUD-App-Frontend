import Navbar from './Components/Navbar';
import ShowUsers from './Components/ShowUsers';
import AddUsers from './Components/AddUsers';
import NotFound from './Components/NotFound';
import EditUser from './Components/EditUser';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ShowUsers} />
          <Route exact path="/add" component={AddUsers} />
          <Route exact path="/edit/:id" component={EditUser} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
