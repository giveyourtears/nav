export const Service = {
    getCountries,
    getCountriesByRegion,
    getRegion,
    getCountry,
    getTour,
    getToursByCountry,
    getHotels,
    getRegions,
    getTours,
    getAbout,
    getVisa,
    getAllHotels,
    getInsurance,
    getCruises,
    getCruisesPage,
    getTransfer,
    getHotelsByCountry,
    getHotel,
    Login,
    addRegion,
    updateRegion,
    deleteRegion,
    addCountry,
    updateCountry,
    deleteCountry,
    addTour,
    updateTour,
    deleteTour,
    addHotel,
    updateHotel,
    deleteHotel,
    updateAbout,
    updateInsurance,
    updateTransfer,
    updateVisa,
    addCruise,
    deleteCruise,
    getCruise,
    updateCruise,
    getCountriesName,
    getRegionsName
  };
  
  function getCountries() {
    return fetch("https://localhost:5001/api/values/getcountrieshot").then(
      handleResponse
    );
  }
  function getRegions() {
    return fetch("https://localhost:5001/api/values/getregions").then(
      handleResponse
    );
  }function getCountriesName() {
    return fetch("https://localhost:5001/api/values/getcountriesname").then(
      handleResponse
    );
  }
  function getRegionsName() {
    return fetch("https://localhost:5001/api/values/getregionsname").then(
      handleResponse
    );
  }
  function getTours() {
    return fetch("https://localhost:5001/api/values/gettours").then(
      handleResponse
    );
  }
  function getAbout() {
    return fetch("https://localhost:5001/api/values/about").then(
      handleResponse
    );
  }
  function getVisa() {
    return fetch("https://localhost:5001/api/values/visa").then(
      handleResponse
    );
  }
  function getInsurance() {
    return fetch("https://localhost:5001/api/values/insurance").then(
      handleResponse
    );
  }
  function getTransfer() {
    return fetch("https://localhost:5001/api/values/transfer").then(
      handleResponse
    );
  }
  function getCruisesPage() {
    return fetch("https://localhost:5001/api/values/cruises").then(
      handleResponse
    );
  }
  function getCruises() {
    return fetch("https://localhost:5001/api/values/getCruises").then(
      handleResponse
    );
  }
  
  function getCountriesByRegion(pathName) {
    return fetch(
      "https://localhost:5001/api/values/GetCountriesByRegion?region=" + pathName
    ).then(handleResponse);
  }
  
  function getRegion(pathName) {
    return fetch(
      "https://localhost:5001/api/values/GetRegion?region=" + pathName
    ).then(handleResponse);
  }
  
  function getCountry(pathName) {
    return fetch(
      "https://localhost:5001/api/values/GetCountry?country=" + pathName
    ).then(handleResponse);
  }
  
  function getToursByCountry(pathName) {
    return fetch(
      "https://localhost:5001/api/values/GetToursByCountry?country=" + pathName
    ).then(handleResponse);
  }
  function getTour(pathName) {
    return fetch(
      "https://localhost:5001/api/values/GetTour?tour=" + pathName
    ).then(handleResponse);
  }
  function getCruise(pathName) {
    return fetch(
      "https://localhost:5001/api/values/GetCruise?cruise=" + pathName
    ).then(handleResponse);
  }
  function getAllHotels() {
    return fetch("https://localhost:5001/api/values/getHotels").then(
      handleResponse
    );
  }
  function getHotels() {
    return fetch("https://localhost:5001/api/values/GetCountriesWithHotels").then(
      handleResponse
    );
  }
  function getHotelsByCountry(country) {
    return fetch("https://localhost:5001/api/values/GetHotelsByCountry?country=" +
     country).then(
      handleResponse
    );
  }
  function getHotel(hotel) {
    return fetch("https://localhost:5001/api/values/GetHotel?hotel=" +
    hotel).then(
      handleResponse
    );
  }
  
  function Login(login, password) {
    return fetch("https://localhost:5001/api/values/Login", 
    {method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({login: login, password: password})}).then(
      handleResponse
    );
  }

  function addRegion(region) {
    return fetch("https://localhost:5001/api/values/addRegion", 
    {method: 'PUT', 
    body: region}).then(
      handleResponse
    );
  }

  function updateRegion(region) {
    return fetch("https://localhost:5001/api/values/updateRegion",
    {
    method: 'POST', 
    body: region}).then(
      handleResponse
    );
  }

  function deleteRegion(id) {
    return fetch("https://localhost:5001/api/values/deleteRegion?id=" + id, {method: 'DELETE'}).then(
      handleResponse
    );
  }

  function addCountry(country) {
    return fetch("https://localhost:5001/api/values/addCountry", 
    {method: 'PUT', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(country)}).then(
      handleResponse
    );
  }

  function updateCountry(country) {
    return fetch("https://localhost:5001/api/values/updateCountry", 
    {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(country)}).then(
      handleResponse
    );
  }

  function deleteCountry(id) {
    return fetch("https://localhost:5001/api/values/deleteCountry?id=" + id, {method: 'DELETE'}).then(
      handleResponse
    );
  }

  function addTour(tour) {
    return fetch("https://localhost:5001/api/values/addTour", 
    {method: 'PUT', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tour)}).then(
      handleResponse
    );
  }

  function updateTour(tour) {
    return fetch("https://localhost:5001/api/values/updateTour", 
    {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tour)}).then(
      handleResponse
    );
  }

  function deleteTour(id) {
    return fetch("https://localhost:5001/api/values/deleteTour?id=" + id, {method: 'DELETE'}).then(
      handleResponse
    );
  }

  function addHotel(hotel) {
    return fetch("https://localhost:5001/api/values/addHotel", 
    {method: 'PUT', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(hotel)}).then(
      handleResponse
    );
  }

  function updateHotel(hotel) {
    return fetch("https://localhost:5001/api/values/updateHotel", 
    {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(hotel)}).then(
      handleResponse
    );
  }

  function addCruise(cruise) {
    return fetch("https://localhost:5001/api/values/addCruise", 
    {method: 'PUT', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cruise)}).then(
      handleResponse
    );
  }

  function updateCruise(cruise) {
    return fetch("https://localhost:5001/api/values/updateCruise", 
    {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cruise)}).then(
      handleResponse
    );
  }

  function deleteCruise(id) {
    return fetch("https://localhost:5001/api/values/deleteCruise?id=" + id, {method: 'DELETE'}).then(
      handleResponse
    );
  }

  function deleteHotel(id) {
    return fetch("https://localhost:5001/api/values/deleteHotel?id=" + id, {method: 'DELETE'}).then(
      handleResponse
    );
  }

  function updateAbout(about) {
    return fetch("https://localhost:5001/api/values/updateAbout", 
    {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(about)}).then(
      handleResponse
    );
  }

  function updateInsurance(insurance) {
    return fetch("https://localhost:5001/api/values/updateInsurance", 
    {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(insurance)}).then(
      handleResponse
    );
  }

  function updateTransfer(transfer) {
    return fetch("https://localhost:5001/api/values/updateTransfer", 
    {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transfer)}).then(
      handleResponse
    );
  }
  
  function updateVisa(visa) {
    return fetch("https://localhost:5001/api/values/updateVisa", 
    {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(visa)}).then(
      handleResponse
    );
  }
  
  function handleResponse(response) {
    return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
  
      return data;
    });
  }
  