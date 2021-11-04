import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Regester from './Pages/Register/Register';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Header from './Pages/Shared/Header/Header/Header';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Destinations from './Pages/Destinations/Destinations';
import Tours from './Pages/Tours/Tours/Tours';
import AddaNewServices from './Pages/AddaNewServices/AddaNewServices';
import TourServicesDetails from './Pages/TourServicesDetails/TourServicesDetails';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import MyOrders from './Pages/MyOrders/MyOrders';
import Footer from './Pages/Shared/Footer/Footer/Footer';
import TopHeader from './Pages/Shared/Header/TopHeader/TopHeader';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Profile from './Pages/Dashboard/Profile/Profile';
import AddDestinations from './Pages/Dashboard/AddDestinations/AddDestinations';
import DashboardMenu from './Pages/Dashboard/DashboardMenu/DashboardMenu';
import DestinationDetails from './Pages/DestinationDetails/DestinationDetails';
import ManageServices from './Pages/ManageServices/ManageServices';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <TopHeader></TopHeader>
         <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home

              ></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Regester></Regester>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/tours">
              <Tours></Tours>
            </Route>
            <Route path="/addanewservices">
              <AddaNewServices></AddaNewServices>
            </Route>
            <PrivetRoute path="/services/:serviceId">
              <TourServicesDetails></TourServicesDetails>
            </PrivetRoute>
            <PrivetRoute path="/destinations/:destinationId">
              <DestinationDetails></DestinationDetails>
            </PrivetRoute>
            <PrivetRoute path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivetRoute>
            <PrivetRoute path="/myorders">
             <MyOrders></MyOrders>
            </PrivetRoute>
            <PrivetRoute path="/dashboard">
              <DashboardMenu></DashboardMenu>
             <Dashboard></Dashboard>
            </PrivetRoute>
            <PrivetRoute path="/adddestinations">
            <DashboardMenu></DashboardMenu>
             <AddDestinations></AddDestinations>
            </PrivetRoute>
            <PrivetRoute path="/profile">
            <Profile></Profile>
            </PrivetRoute>
            <PrivetRoute path="/manageservices">
            <ManageServices></ManageServices>
            </PrivetRoute>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
