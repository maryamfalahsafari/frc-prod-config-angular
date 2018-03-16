using FRC.ProductConfiguration.Entities.Models;
using FRC.ProductConfiguration.Entities.ViewModels;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRC.ProductConfiguration.DataAccess
{
    public class DataProvider
    {
        private string _connectionStringName;
        public DataProvider(string connectionString)
        {
            _connectionStringName = connectionString;
        }
        //type:Dolar,Percentage
        public List<OfferPriceMapViewModel> GetOfferPriceMaps(string type, DateTime? effectiveDate, string planCode)
        {
            List<OfferPriceMapViewModel> list;
            using (var db = new ProductConfigurationDBContext() { Database = { Connection = { ConnectionString = _connectionStringName } } })
            {
                var sqlParams = new List<SqlParameter>
                    {
                        new SqlParameter("@Type",type),
                        new SqlParameter("@EffectiveDate",effectiveDate),
                        new SqlParameter("@PlanCode",planCode),

                    };

                list = db.Database.SqlQuery<OfferPriceMapViewModel>("GetOfferPriceMaps @Type,@EffectiveDate,@PlanCode", sqlParams.ToArray()).ToList();
            }
            return list;

        }
        public List<TimeOfUse> GetTimeOfUses(string name)
        {
            List<TimeOfUse> list;
            using (var db = new ProductConfigurationDBContext() { Database = { Connection = { ConnectionString = _connectionStringName } } })
            {
                var sqlParams = new List<SqlParameter>
                    {
                        new SqlParameter("@Name",name),
                    };
                list = db.Database.SqlQuery<TimeOfUse>("GetTimeOfUses @Name", sqlParams.ToArray()).ToList();
            }
            return list;
        }

        public List<string> GetEffectiveDates(string type, string planCode)
        {
            List<string> list;
            using (var db = new ProductConfigurationDBContext() { Database = { Connection = { ConnectionString = _connectionStringName } } })
            {
                var sqlParams = new List<SqlParameter>
                    {
                        new SqlParameter("@Type",type),
                        new SqlParameter("@PlanCode",planCode)
                    };
                list = db.Database.SqlQuery<string>("GetEffectiveDates @Type,@PlanCode", sqlParams.ToArray()).ToList();
            }
            return list;
        }

        public List<TimeOfUseViewModel> GetTimeOfUseNames()
        {
            List<TimeOfUseViewModel> list;
            using (var db = new ProductConfigurationDBContext() { Database = { Connection = { ConnectionString = _connectionStringName } } })
            {
                //var sqlParams = new List<SqlParameter>
                //    {
                //        new SqlParameter("@Type",type),
                //        new SqlParameter("@PlanCode",planCode)
                //    };
                list = db.Database.SqlQuery<TimeOfUseViewModel>("GetTimeOfUseNames").ToList();
            }
            return list;
        }




        public void UpdateOfferPriceMaps(List<OfferPriceMap> offerPriceMapList)
        {
            SqlConnection con = null;
            try
            {
                con = new SqlConnection(_connectionStringName);
                using (var cmd = new SqlCommand("UpdateOfferPriceMaps", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@tblOfferPriceMapTypes", OfferPriceMapConvertListToDataTable(offerPriceMapList));
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                    con = null;
                }
            }
            finally
            {
                if (con != null)
                    con.Dispose();
            }
        }
        public DataTable OfferPriceMapConvertListToDataTable(List<OfferPriceMap> offerPriceMapList)
        {
            var result = new DataTable();
            result.Columns.AddRange(new DataColumn[] {
                new DataColumn("EffectiveDate", typeof(DateTime)),
                new DataColumn("Year", typeof(int)),
                new DataColumn("Month", typeof(int)),
                new DataColumn("Duration", typeof(string)),
                new DataColumn("Value",typeof(decimal)),
                new DataColumn("Type",typeof(string)),
                new DataColumn("TierKind",typeof(string)),
                new DataColumn("PlanCode",typeof(string)),
            });
            foreach (var data in offerPriceMapList)
            {
                result.Rows.Add(data.EffectiveDate, data.Year, data.Month, data.Duration, data.Value, data.Type, data.TierKind, data.PlanCode);
            }
            return result;

        }


        public void UpdateTwoTiersByType(string type, List<TwoTier> twoTierList)
        {
            SqlConnection con = null;
            try
            {
                con = new SqlConnection(_connectionStringName);
                using (var cmd = new SqlCommand("UpdateTwoTiers", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@tblTwoTiers", TwoTierConvertListToDataTable(twoTierList));
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                    con = null;
                }
            }
            finally
            {
                if (con != null)
                    con.Dispose();
            }
        }
        public DataTable TwoTierConvertListToDataTable(List<TwoTier> twoTierList)
        {
            var result = new DataTable();
            result.Columns.AddRange(new DataColumn[] {
                new DataColumn("Date", typeof(DateTime)),
                new DataColumn("Duration", typeof(string)),
                new DataColumn("TierKind",typeof(string)),
                new DataColumn("Value",typeof(string)),
                new DataColumn("Type",typeof(string)),
            });
            foreach (var data in twoTierList)
            {
                result.Rows.Add(data.Date, data.Duration, data.TierKind, data.Value, data.Type);
            }
            return result;

        }


        public void UpdateTimeOfUses(List<TimeOfUse> timeOfUseList)
        {
            SqlConnection con = null;
            try
            {
                con = new SqlConnection(_connectionStringName);
                using (var cmd = new SqlCommand("UpdateTimeOfUses", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@tblTimeOfUses", TimeOfUseConvertListToDataTable(timeOfUseList));
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                    con = null;
                }

            }
            finally
            {
                if (con != null)
                    con.Dispose();
            }
        }
        public DataTable TimeOfUseConvertListToDataTable(List<TimeOfUse> timeOfUseList)
        {
            var result = new DataTable();
            result.Columns.AddRange(new DataColumn[] {
                new DataColumn("Name", typeof(string)),
                new DataColumn("WeekDay", typeof(string)),
                new DataColumn("Col1",typeof(string)),
                new DataColumn("Col2",typeof(string)),
                new DataColumn("Col3",typeof(string)),
                new DataColumn("Col4",typeof(string)),
                new DataColumn("Col5",typeof(string)),
                new DataColumn("Col6",typeof(string)),
                new DataColumn("Col7",typeof(string)),
                new DataColumn("Col8",typeof(string)),
                new DataColumn("Col9",typeof(string)),
                new DataColumn("Col10",typeof(string)),
                new DataColumn("Col11",typeof(string)),
                new DataColumn("Col12",typeof(string)),
                new DataColumn("Col13",typeof(string)),
                new DataColumn("Col14",typeof(string)),
                new DataColumn("Col15",typeof(string)),
                new DataColumn("Col16",typeof(string)),
                new DataColumn("Col17",typeof(string)),
                new DataColumn("Col18",typeof(string)),
                new DataColumn("Col19",typeof(string)),
                new DataColumn("Col20",typeof(string)),
                new DataColumn("Col21",typeof(string)),
                new DataColumn("Col22",typeof(string)),
                new DataColumn("Col23",typeof(string)),
                new DataColumn("Col24",typeof(string)),
                new DataColumn("Col25",typeof(string)),
                new DataColumn("Col26",typeof(string)),
                new DataColumn("Col27",typeof(string)),
                new DataColumn("Col28",typeof(string)),
                new DataColumn("Col29",typeof(string)),
                new DataColumn("Col30",typeof(string)),
                new DataColumn("Col31",typeof(string)),
                new DataColumn("Col32",typeof(string)),
                new DataColumn("Col33",typeof(string)),
                new DataColumn("Col34",typeof(string)),
                new DataColumn("Col35",typeof(string)),
                new DataColumn("Col36",typeof(string)),
                new DataColumn("Col37",typeof(string)),
                new DataColumn("Col38",typeof(string)),
                new DataColumn("Col39",typeof(string)),
                new DataColumn("Col40",typeof(string)),
                new DataColumn("Col41",typeof(string)),
                new DataColumn("Col42",typeof(string)),
                new DataColumn("Col43",typeof(string)),
                new DataColumn("Col44",typeof(string)),
                new DataColumn("Col45",typeof(string)),
                new DataColumn("Col46",typeof(string)),
                new DataColumn("Col47",typeof(string)),
                new DataColumn("Col48",typeof(string))
            });
            foreach (var data in timeOfUseList)
            {
                result.Rows.Add(data.Name, data.WeekDay, data.Col1, data.Col2, data.Col3, data.Col4, data.Col5, data.Col6,
                    data.Col7, data.Col8, data.Col9, data.Col10, data.Col11, data.Col12, data.Col13, data.Col14, data.Col15, data.Col16,
                    data.Col17, data.Col18, data.Col19, data.Col20, data.Col21, data.Col22, data.Col23, data.Col24, data.Col25, data.Col26,
                    data.Col27, data.Col28, data.Col29, data.Col30, data.Col31, data.Col32, data.Col33, data.Col34, data.Col35, data.Col36,
                    data.Col37, data.Col38, data.Col39, data.Col40, data.Col41, data.Col42, data.Col43, data.Col44, data.Col45, data.Col46, data.Col47, data.Col48);
            }
            return result;

        }
    }
}
