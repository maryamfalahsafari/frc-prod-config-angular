using FRC.ProductConfiguration.Entities.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FRC.ProductConfiguration.WebAPI.Controllers
{
    public class ProductController : ApiController
    {
        private static string connectionString = ConfigurationManager.ConnectionStrings["ProductConfigurationDBContext"].ConnectionString;
        public dynamic GetOfferPriceMaps(string type, DateTime? effectiveDate,string planCode)
        {
            try
            {
                var dataAccess = new DataAccess.DataProvider(connectionString);
                return new { Success = true, Result = dataAccess.GetOfferPriceMaps(type, effectiveDate,planCode) };
            }
            catch (Exception ex)
            {
                return new { Success = false, Error = ex.Message };
            }

        }

        [HttpPost]
        public dynamic UpdateOfferPriceMaps(List<OfferPriceMap> offerPriceMapList)
        {
            try
            {
                var dataAccess = new DataAccess.DataProvider(connectionString);
                dataAccess.UpdateOfferPriceMaps(offerPriceMapList);
                return new { Success = true };
            }
            catch (Exception ex)
            {
                return new { Success = false, Error = ex.Message };
            }
        }


        //public dynamic GetTwoTiersByType(string type)
        //{
        //    try
        //    {
        //        var dataAccess = new DataAccess.DataProvider(connectionString);
        //        return new { Success = true, Result = dataAccess.GetTwoTiersByType(type) };
        //    }
        //    catch (Exception ex)
        //    {
        //        return new { Success = false, Error = ex.Message };
        //    }
        //}

        [HttpPost]
        public dynamic UpdateTwoTiersByType(List<TwoTier> twoTierList)
        {
            try
            {
                if (twoTierList == null || twoTierList.Count == 0)
                    return new { Success = true };

                var type = twoTierList[0].Type;

                var dataAccess = new DataAccess.DataProvider(connectionString);
                dataAccess.UpdateTwoTiersByType(type, twoTierList);
                return new { Success = true };
            }
            catch (Exception ex)
            {
                return new { Success = false, Error = ex.Message };
            }
        }

        public dynamic GetTimeOfUses(string name)
        {
            try
            {
                var dataAccess = new DataAccess.DataProvider(connectionString);
                return new { Success = true, Result = dataAccess.GetTimeOfUses(name) };
            }
            catch (Exception ex)
            {
                return new { Success = false, Error = ex.Message };
            }
        }

        [HttpPost]
        public dynamic UpdateTimeOfUses(List<TimeOfUse> timeOfUseList)
        {
            try
            {
                if (timeOfUseList == null || timeOfUseList.Count == 0)
                    return new { Success = true };


                var dataAccess = new DataAccess.DataProvider(connectionString);
                dataAccess.UpdateTimeOfUses(timeOfUseList);
                return new { Success = true };
            }
            catch (Exception ex)
            {
                return new { Success = false, Error = ex.Message };
            }
        }

        public dynamic GetEffectiveDates(string type,string planCode)
        {
            try
            {
                var dataAccess = new DataAccess.DataProvider(connectionString);
                return new { Success = true, Result = dataAccess.GetEffectiveDates(type,planCode) };
            }
            catch (Exception ex)
            {
                return new { Success = false, Error = ex.Message };
            }

        }

        public dynamic GetTimeOfUseNames()
        {
            try
            {
                var dataAccess = new DataAccess.DataProvider(connectionString);
                return new { Success = true, Result = dataAccess.GetTimeOfUseNames() };
            }
            catch (Exception ex)
            {
                return new { Success = false, Error = ex.Message };
            }

        }

    }
}
