import Layout from '../components/Layout';
import About from '../components/About';
import Visa from '../components/Visa';
import Insurance from '../components/Insurance';
import Transfer from '../components/Transfer';
import HotelBooking from '../components/HotelBooking';
import Region from '../components/Region';
import Cruises from '../components/Cruises';
import Country from '../components/Country/Country';
import Tour from '../components/Tour';
import Hotels from '../components/Hotels';
import Avia from '../components/Avia';
import HotelsIati from '../components/HotelsIati';
import Login from '../components/Login';
import Hotel from '../components/Hotel';
import AdminRegion from '../components/AdminPanel/AdminRegion';
import AdminCountries from '../components/AdminPanel/AdminCountries';
import AdminTours from '../components/AdminPanel/AdminTours';
import AdminHotel from '../components/AdminPanel/AdminHotels';
import EditCountry from '../components/AdminPanel/Edit/EditCountry';
import EditRegion from '../components/AdminPanel/Edit/EditRegion';
import EditTour from '../components/AdminPanel/Edit/EditTour';
import EditHotel from '../components/AdminPanel/Edit/EditHotel';
import AddCountry from '../components/AdminPanel/Add/AddCountry';
import AddHotel from '../components/AdminPanel/Add/AddHotel';
import AddRegion from '../components/AdminPanel/Add/AddRegion';
import AddTour from '../components/AdminPanel/Add/AddTour';
import HotelsByCountry from '../components/HotelsByCountry';
import EditAbout from '../components/AdminPanel/Edit/EditAbout';
import EditInsurance from '../components/AdminPanel/Edit/EditInsurance';
import EditVisa from '../components/AdminPanel/Edit/EditVisa';
import EditTransfer from '../components/AdminPanel/Edit/EditTransfer';
import AdminCruises from '../components/AdminPanel/AdminCruises';
import AddCruise from '../components/AdminPanel/Add/AddCruise';
import EditCruise from '../components/AdminPanel/Edit/EditCruise';

export const routes = [
  {
    component: Layout, // моя главная страница
    path: '/'
  },
  {
    component: About,
    path: '/About'
  },
  {
    component: Visa,
    path: '/Visa'
  },
  {
    component: Insurance,
    path: '/Insurance'
  },
  {
    component: Transfer,
    path: '/Transfer'
  },
  {
    component: HotelBooking,
    path: '/HotelBooking'
  },
  {
    component: Hotels,
    path: '/Hotels'
  },
  {
    component: Region,
    path: '/Region/*'
  },
  {
    component: Country,
    path: '/Country/*'
  },
  {
    component: Hotel,
    path: '/Hotel/*'
  },
  {
    component: Tour,
    path: '/Tour/*'
  },
  {
    component: Avia,
    path: '/avia'
  },
  {
    component: HotelsIati,
    path: '/hotelIati'
  },
  {
    component: Login,
    path: '/0f9f1935-d782-49a9-824a-1355c65b6e97'
  },
  {
    component: Cruises,
    path: '/cruises'
  }
];

export const adminRoutes = [
  {
    component: Layout, // моя главная страница
    path: '/'
  },
  {
    component: About,
    path: '/About'
  },
  {
    component: Visa,
    path: '/Visa'
  },
  {
    component: Insurance,
    path: '/Insurance'
  },
  {
    component: Transfer,
    path: '/Transfer'
  },
  {
    component: HotelBooking,
    path: '/HotelBooking'
  },
  {
    component: Hotels,
    path: '/Hotels'
  },
  {
    component: Region,
    path: '/Region/*'
  },
  {
    component: Country,
    path: '/Country/*'
  },
  {
    component: Hotel,
    path: '/Hotel/*'
  },
  {
    component: Tour,
    path: '/Tour/*'
  },
  {
    component: Avia,
    path: '/avia'
  },
  {
    component: HotelsIati,
    path: '/hotelIati'
  },
  {
    component: Login,
    path: '/0f9f1935-d782-49a9-824a-1355c65b6e97'
  },
  {
    component: Cruises,
    path: '/cruises'
  },
  {
    component: HotelsByCountry,
    path: '/hotels/*'
  },
  {
    component: EditRegion,
    path: '/editRegion'
  },
  {
    component: EditCountry,
    path: '/editCountry'
  },
  {
    component: EditTour,
    path: '/editTour',
  },
  {
    component: EditHotel,
    path: '/editHotel',
  },
  {
    component: AdminRegion,
    path: '/regionAdmin'
  },
  {
    component: AdminCountries,
    path: '/countriesAdmin'
  },
  {
    component: AddCountry,
    path: '/addCountry'
  },
  {
    component: AdminTours,
    path: '/toursAdmin'
  },
  {
    component: AdminHotel,
    path: '/hotelsAdmin'
  },
  {
    component: AddHotel,
    path: '/addHotel'
  },
  {
    component: AddRegion,
    path: '/addRegion'
  },
  {
    component: AddTour,
    path: '/addTour'
  },
  {
    component: EditAbout,
    path: '/editAbout'
  },
  {
    component: EditInsurance,
    path: '/editInsurance'
  },
  {
    component: EditVisa,
    path: '/editVisa'
  },
  {
    component: EditTransfer,
    path: '/editTransfer'
  },
  {
    component: AdminCruises,
    path: '/cruisesAdmin'
  },
  {
    component: AddCruise,
    path: '/addCruise'
  },
  {
    component: EditCruise,
    path: '/editCruise'
  }
];
