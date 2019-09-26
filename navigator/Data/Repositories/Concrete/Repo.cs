using System;
using System.Collections.Generic;
using navigator.Data.Repositories.Abstract;
using navigator.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace navigator.Data.Repositories.Concrete
{
    public class Repo : IRepo
    {
        private readonly ApplicationDbContext _ctx;
        private IEnumerable<Region> Regions => _ctx.Regions.ToList();
        public Repo(ApplicationDbContext applicationDbContext)
        {
            _ctx = applicationDbContext;
        }

        public Region GetRegion(string regionName)
        {
            var region = Regions.FirstOrDefault(r => r.Url.Equals(regionName));
            return region;
        }

        public Tour GetTour(string tourName)
        {
            var tour = _ctx.Tours.FirstOrDefault(r => r.Url.Equals(tourName));
            return tour;
        }

        public Cruise GetCruise(string cruiseName)
        {
            var cruise = _ctx.Cruises.FirstOrDefault(r => r.Url.Equals(cruiseName));
            return cruise;
        }

        public IEnumerable<object> GetRegionsName()
        {
            var regions = Regions.Select(r=> new { r.Id, r.Name });
            return regions;
        }

        public IEnumerable<Region> GetRegions()
        {
            var regions = Regions;
            return regions;
        }

        public Country GetCountry(string countryName)
        {
            var country = _ctx.Countries.FirstOrDefault(r => r.Url.Equals(countryName));
            return country;
        }

        public IEnumerable<Country> GetCountries()
        {
            var countries = _ctx.Countries.OrderByDescending(c => c.Rating);
            return countries;
        }

        public IEnumerable<object> GetCountriesName()
        {
            var countries = _ctx.Countries.OrderByDescending(c => c.Rating).Select(c=> new { c.Id, c.Name });
            return countries;
        }

        public IEnumerable<Country> GetCountriesByRegion(string region)
        {
            var countries = _ctx.Countries.Where(c=>c.Region.Url.Equals(region)).OrderByDescending(c => c.Rating).ToList();
            return countries;
        }
        public IEnumerable<Country> GetCountriesHot()
        {
            var countries = _ctx.Countries.Where(c => c.IsHot == true).OrderByDescending(c => c.Rating).ToList();
            return countries;
        }
        public IEnumerable<Tour> GetTours()
        {
            var tours = _ctx.Tours;
            return tours;
        }
        public IEnumerable<Hotel> GetHotels()
        {
            var hotels = _ctx.Hotels;
            return hotels;
        }

        public IEnumerable<Cruise> GetCruises()
        {
            var tours = _ctx.Cruises;
            return tours;
        }
        public IEnumerable<Tour> GetToursByCountry(string country)
        {
            var tours = _ctx.Tours.Where(c => c.Country.Url.Equals(country)).ToList();
            return tours;
        }
        public IEnumerable<Hotel> GetHotelsByCountry(string country)
        {
            var hotels = _ctx.Hotels.Where(h => h.Country.Url.Equals(country)).ToList();
            return hotels;
        }

        public IEnumerable<Country> GetCountriesWithHotels()
        {
            var countries = _ctx.Countries.Where(c => c.Hotels.Count != 0).OrderByDescending(c => c.Rating).ToList();
            return countries;
        }

        public Hotel GetHotel(string hotelName)
        {
            var hotel = _ctx.Hotels.FirstOrDefault(h => h.Name.Equals(hotelName));
            return hotel;
        }

        public void AddRegion(Region region)
        {
            _ctx.Add(region);
            _ctx.SaveChanges();
        }

        public void DeleteRegion(string id)
        {
            var region = _ctx.Regions.FirstOrDefault(r => r.Id == Guid.Parse(id));
            _ctx.Remove(region);
            _ctx.SaveChanges();
        }

        public void UpdateRegion(Region region)
        {
            var oldRegion = _ctx.Regions.FirstOrDefault(r => r.Id == region.Id);
            if(oldRegion != null)
            {
                oldRegion.Images = region.Images;
                oldRegion.Description = region.Description;
                oldRegion.Name = region.Name;
                oldRegion.Title = region.Title;
                oldRegion.Url = region.Url;
            }
            _ctx.SaveChanges();
        }
        public void AddCountry(Country country)
        {
            _ctx.Add(country);
            _ctx.SaveChanges();
        }

        public void DeleteCountry(string id)
        {
            var country = _ctx.Countries.FirstOrDefault(c => c.Id == Guid.Parse(id));
            _ctx.Remove(country);
            _ctx.SaveChanges();
        }

        public void UpdateCountry(Country country)
        {
            var oldCountry = _ctx.Countries.FirstOrDefault(c => c.Id == country.Id);
            if (oldCountry != null)
            {
                //oldCountry.Images = country.Images;
                oldCountry.Description = country.Description;
                oldCountry.Name = country.Name;
                oldCountry.Title = country.Title;
                oldCountry.Url = country.Url;
                oldCountry.Rating = country.Rating;
            }
            _ctx.SaveChanges();
        }

        public void AddTour(Tour tour)
        {
            _ctx.Add(tour);
            _ctx.SaveChanges();
        }

        public void DeleteTour(string id)
        {
            var tour = _ctx.Tours.FirstOrDefault(t => t.Id == Guid.Parse(id));
            _ctx.Remove(tour);
            _ctx.SaveChanges();
        }

        public void UpdateTour(Tour tour)
        {
            var oldTour = _ctx.Tours.FirstOrDefault(t => t.Id == tour.Id);
            if (oldTour != null)
            {
                oldTour.CountryId = tour.CountryId;
                //oldTour.Images = tour.Images;
                oldTour.Price = tour.Price;
                oldTour.Name = tour.Name;
                oldTour.Conditions = tour.Conditions;
                oldTour.Url = tour.Url;
                oldTour.Duration = tour.Duration;
            }
            _ctx.SaveChanges();
        }

        public void AddHotel(Hotel hotel)
        {
            _ctx.Add(hotel);
            _ctx.SaveChanges();
        }

        public void DeleteHotel(string id)
        {
            var hotel = _ctx.Hotels.FirstOrDefault(r => r.Id == Guid.Parse(id));
            _ctx.Remove(hotel);
            _ctx.SaveChanges();
        }

        public void UpdateHotel(Hotel hotel)
        {
            var oldHotel = _ctx.Hotels.FirstOrDefault(h => h.Id == hotel.Id);
            if (oldHotel != null)
            {
                oldHotel.CountryId = hotel.CountryId;
                oldHotel.Description = hotel.Description;
                oldHotel.Name = hotel.Name;
                oldHotel.Url = hotel.Url;
            }
            _ctx.SaveChanges();
        }

        public void AddCruise(Cruise cruise)
        {
            _ctx.Add(cruise);
            _ctx.SaveChanges();
        }

        public void DeleteCruise(string id)
        {
            var cruise = _ctx.Cruises.FirstOrDefault(r => r.Id == Guid.Parse(id));
            _ctx.Remove(cruise);
            _ctx.SaveChanges();
        }

        public void UpdateCruise(Cruise cruise)
        {
            var oldCruise = _ctx.Cruises.FirstOrDefault(r => r.Id == cruise.Id);
            if (oldCruise != null)
            {
                //oldCruise.Images = cruise.Images;
                oldCruise.Name = cruise.Name;
                oldCruise.Conditions = cruise.Conditions;
                oldCruise.Duration = cruise.Duration;
                oldCruise.Price = cruise.Price;
                oldCruise.Url = cruise.Url;
            }
            _ctx.SaveChanges();
        }





        public About About()
        {
            return _ctx.AboutPage.FirstOrDefault();
        }
        public void UpdateAbout(About about)
        {
            var oldAbout = _ctx.AboutPage.FirstOrDefault(r => r.Id == about.Id);
            if (oldAbout != null)
            {
                oldAbout.Description = about.Description;
                oldAbout.WhyTitle = about.WhyTitle;
                oldAbout.WhyDescription = about.WhyDescription;
            }
            _ctx.SaveChanges();
        }
        public Visa Visa()
        {
            return _ctx.VisaPage.FirstOrDefault();
        }
        public void UpdateVisa(Visa visa)
        {
            var oldVisa = _ctx.VisaPage.FirstOrDefault(r => r.Id == visa.Id);
            if (oldVisa != null)
            {
                oldVisa.Description = visa.Description;
                oldVisa.CountriesTitle = visa.CountriesTitle;
                oldVisa.CountriesDescription = visa.CountriesDescription;
                oldVisa.AsiaTitle = visa.AsiaTitle;
                oldVisa.AsiaDescription = visa.AsiaDescription;
            }
            _ctx.SaveChanges();
        }
        public Transfer Transfer()
        {
            return _ctx.TransferPage.FirstOrDefault();
        }
        public void UpdateTransfer(Transfer transfer)
        {
            var oldTransfer = _ctx.TransferPage.FirstOrDefault(r => r.Id == transfer.Id);
            if (oldTransfer != null)
            {
                oldTransfer.Description = transfer.Description;
                oldTransfer.PriceMoscow = transfer.PriceMoscow;
                oldTransfer.PriceTwoMoscow = transfer.PriceTwoMoscow;
                oldTransfer.PriceKiev = transfer.PriceKiev;
                oldTransfer.PriceTwoKiev = transfer.PriceTwoKiev;
            }
            _ctx.SaveChanges();
        }
        public Insurance Insurance()
        {
            return _ctx.InsurancePage.FirstOrDefault();
        }
        public void UpdateInsurance(Insurance insurance)
        {
            var oldInsurance = _ctx.InsurancePage.FirstOrDefault(r => r.Id == insurance.Id);
            if (oldInsurance != null)
            {
                oldInsurance.TitleInsurance = insurance.TitleInsurance;
                oldInsurance.DescriptionInsurance = insurance.DescriptionInsurance;
            }
            _ctx.SaveChanges();
        }
        public Cruises Cruises()
        {
            return _ctx.CruisesPage.FirstOrDefault();
        }
    }
}
