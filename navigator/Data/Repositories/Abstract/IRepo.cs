using System;
using System.Collections.Generic;
using navigator.Models;

namespace navigator.Data.Repositories.Abstract
{
    public interface IRepo
    {
        IEnumerable<Region> GetRegions();
        Region GetRegion(string regionName);
        Country GetCountry(string countryName);
        Tour GetTour(string tourName);
        Cruise GetCruise(string cruiseName);
        IEnumerable<Country> GetCountries();
        IEnumerable<Country> GetCountriesByRegion(string region);
        IEnumerable<Country> GetCountriesHot();
        IEnumerable<Tour> GetTours();
        IEnumerable<Hotel> GetHotels();
        IEnumerable<Cruise> GetCruises();
        IEnumerable<Tour> GetToursByCountry(string country);
        About About();
        Visa Visa();
        Transfer Transfer();
        Insurance Insurance();
        Cruises Cruises();
        IEnumerable<Country> GetCountriesWithHotels();
        IEnumerable<Hotel> GetHotelsByCountry(string country);
        Hotel GetHotel(string hotelName);

        IEnumerable<object> GetRegionsName();
        IEnumerable<object> GetCountriesName();

        void AddRegion(Region region);
        void DeleteRegion(string id);
        void UpdateRegion(Region region);

        void AddCountry(Country country);
        void DeleteCountry(string id);
        void UpdateCountry(Country country);

        void AddTour(Tour tour);
        void DeleteTour(string id);
        void UpdateTour(Tour tour);

        void AddHotel(Hotel hotel);
        void DeleteHotel(string id);
        void UpdateHotel(Hotel hotel);

        void AddCruise(Cruise cruise);
        void DeleteCruise(string id);
        void UpdateCruise(Cruise cruise);

        void UpdateAbout(About about);
        void UpdateTransfer(Transfer transfer);
        void UpdateInsurance(Insurance insurance);
        void UpdateVisa(Visa visa);
    }
}
