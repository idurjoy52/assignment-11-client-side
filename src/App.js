import React, { createContext } from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import LogInPage from './Pages/LogInPage/LogInPage';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard'
import UserReview from './Pages/UserDashBoard/UserReview/UserReview';
import UserServiceList from './Pages/UserDashBoard/UserServiceList/UserServiceList';
import AddService from './Pages/AdminDashBoard/Components/AddService/AddService'
import AddAdmin from './Pages/AdminDashBoard/Components/AddAdmin/AddAdmin'




export const UserContext = createContext();
// export const AdminContext = createContext();


function App() {
  const[loggedInUser,setLoggedInUser] = useState({});
  
  return (
  <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
  <Router> 
		<Switch> 
      <Route path="/home"> 
        <HomePage></HomePage>
			</Route>
      <Route path="/ourPortfolio"> 
        <h1 className="text-center">Coming Soon...</h1>
			</Route>
      <Route path="/ourTeam"> 
        <h1 className="text-center">Coming Soon...</h1>
			</Route>
      <Route path="/contact"> 
        <h1 className="text-center">Coming Soon...</h1>
			</Route>
			<Route path="/login"> 
        <LogInPage></LogInPage>
			</Route>
      <PrivateRoute path="/order/:serviceName"> 
        <DashBoard></DashBoard>
			</PrivateRoute>
      <PrivateRoute path="/admin/dashboard"> 
        <DashBoard></DashBoard>
      </PrivateRoute>
      <PrivateRoute path="/admin/addService"> 
        <AddService></AddService>
      </PrivateRoute>
      <PrivateRoute path="/admin/makeAdmin"> 
        <AddAdmin></AddAdmin>
      </PrivateRoute>
      <PrivateRoute path="/user/serviceList"> 
        <UserServiceList></UserServiceList>
      </PrivateRoute>
      <PrivateRoute path="/user/review"> 
        <UserReview></UserReview>
			</PrivateRoute>
      <Route exact path="/"> 
        <HomePage></HomePage>
      </Route>
      <Route path="*"> 
        <h1 className="text-center text-danger">Error 404....</h1>
      </Route>
		</Switch>
	</Router>
  </UserContext.Provider>
  );
}

export default App;
