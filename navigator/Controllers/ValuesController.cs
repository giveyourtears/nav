using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using navigator.Data.Repositories.Abstract;
using navigator.Models;
using Newtonsoft.Json;

namespace navigator.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IRepo _repo;

        public ValuesController(IRepo Repository)
        {
            _repo = Repository;
        }

        public Region GetRegion(string region)
        {
            return _repo.GetRegion(region);
        }

        public Country GetCountry(string country)
        {
            return _repo.GetCountry(country);
        }


        public IEnumerable<Region> GetRegions()
        {
            return _repo.GetRegions();
        }


        public IEnumerable<Country> GetCountries()
        {
            return _repo.GetCountries();
        }


        public IEnumerable<Country> GetCountriesByRegion(string region)
        {
            return _repo.GetCountriesByRegion(region);
        }


        public IEnumerable<Country> GetCountriesHot()
        {
            return _repo.GetCountriesHot();
        }


        public IEnumerable<Tour> GetToursByCountry(string country)
        {
            return _repo.GetToursByCountry(country);
        }


        public IEnumerable<Tour> GetTours()
        {
            return _repo.GetTours();
        }

        public IEnumerable<Hotel> GetHotels()
        {
            return _repo.GetHotels();
        }

        public IEnumerable<Cruise> GetCruises()
        {
            return _repo.GetCruises();
        }


        public Tour GetTour(string tour)
        {
            return _repo.GetTour(tour);
        }

        public Cruise GetCruise(string cruise)
        {
            return _repo.GetCruise(cruise);
        }

        public About About()
        {
            return _repo.About();
        }

        public Visa Visa()
        {
            return _repo.Visa();
        }

        public Transfer Transfer()
        {
            return _repo.Transfer();
        }

        public Insurance Insurance()
        {
            return _repo.Insurance();
        }

        public Cruises Cruises()
        {
            return _repo.Cruises();
        }

        public IEnumerable<Country> GetCountriesWithHotels()
        {
            return _repo.GetCountriesWithHotels();
        }

        public IEnumerable<Hotel> GetHotelsByCountry(string country)
        {
            return _repo.GetHotelsByCountry(country);
        }

        public Hotel GetHotel(string hotel)
        {
            return _repo.GetHotel(hotel);
        }

        [HttpPost]
        public bool Login([FromBody]LoginModel model)
        {
            if (model.login.Equals("test") && model.password.Equals("test")) return true;
            return false;
        }

        [HttpPut]
        public void AddRegion(IFormCollection data)
        {
            var files = data.Files.ToList();
            var region = JsonConvert.DeserializeObject<Region>(data["region"]);
            _repo.UpdateRegion(region);
            var path = Path.Combine(Directory.GetCurrentDirectory(), "ClientApp", "public", "region", region.Url);
            if (Directory.Exists(path))
            {
                Directory.Delete(path, true);
            }
            Directory.CreateDirectory(path);
            for (var i = 0; i < files.Count; i++)
            {
                if (files[i].Length > 0)
                {
                    using (var stream = new FileStream(path + "/" + region.Url + i + ".jpg", FileMode.Create))
                    {
                        files[i].CopyTo(stream);
                    }
                }
            }
        }

        [HttpDelete]
        public void DeleteRegion(string id)
        {
            _repo.DeleteRegion(id);
        }

        [HttpPost]
        public void UpdateRegion(IFormCollection data)
        {
            var files = data.Files.ToList();
            var region = JsonConvert.DeserializeObject<Region>(data["region"]);
            _repo.UpdateRegion(region); 
            var path = Path.Combine(Directory.GetCurrentDirectory(), "ClientApp", "public", "region", region.Url);
            if (Directory.Exists(path))
            {
                Directory.Delete(path, true);
            }
            Directory.CreateDirectory(path);
            for (var i = 0; i < files.Count; i++)
            {
                if (files[i].Length > 0)
                {
                    using (var stream = new FileStream(path + "/" + region.Url + i + ".jpg", FileMode.Create))
                    {
                        files[i].CopyTo(stream);
                    }
                }
            }
        }

       
        [HttpPut]
        public void AddCountry([FromBody]Country country)
        {
            _repo.AddCountry(country);
        }

        [HttpDelete]
        public void DeleteCountry(string id)
        {
            _repo.DeleteCountry(id);
        }

        [HttpPost]
        public void UpdateCountry(Country country)
        {
            _repo.UpdateCountry(country);
        }

        [HttpPut]
        public void AddTour([FromBody]Tour tour)
        {
            _repo.AddTour(tour);
        }

        [HttpDelete]
        public void DeleteTour(string id)
        {
            _repo.DeleteTour(id);
        }

        [HttpPost]
        public void UpdateTour(Tour tour)
        {
            _repo.UpdateTour(tour);
        }

        [HttpPut]
        public void AddCruise([FromBody]Cruise cruise)
        {
            _repo.AddCruise(cruise);
        }

        [HttpDelete]
        public void DeleteCruise(string id)
        {
            _repo.DeleteCruise(id);
        }

        [HttpPost]
        public void UpdateCruise(Cruise cruise)
        {
            _repo.UpdateCruise(cruise);
        }


        [HttpPut]
        public void AddHotel([FromBody]Hotel hotel)
        {
            _repo.AddHotel(hotel);
        }

        [HttpDelete]
        public void DeleteHotel(string id)
        {
            _repo.DeleteHotel(id);
        }

        [HttpPost]
        public void UpdateHotel(Hotel hotel)
        {
            _repo.UpdateHotel(hotel);
        }

        [HttpPost]
        public void UpdateAbout(About about)
        {
            _repo.UpdateAbout(about);
        }

        [HttpPost]
        public void UpdateTransfer(Transfer transfer)
        {
            _repo.UpdateTransfer(transfer);
        }
        [HttpPost]
        public void UpdateVisa(Visa visa)
        {
            _repo.UpdateVisa(visa);
        }
        [HttpPost]
        public void UpdateInsurance(Insurance insurance)
        {
            _repo.UpdateInsurance(insurance);
        }

        public IEnumerable<object> GetRegionsName()
        {
            return _repo.GetRegionsName();
        }

        public IEnumerable<object> GetCountriesName()
        {
            return _repo.GetCountriesName();
        }
    }
}
