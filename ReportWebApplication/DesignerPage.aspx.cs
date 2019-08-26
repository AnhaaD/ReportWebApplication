
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DevExpress.Xpo.DB;
using DevExpress.DataAccess.Sql;
using DevExpress.DataAccess.ConnectionParameters;
using DevExpress.DashboardCommon;
using DevExpress.DataAccess.ConnectionParameters;
using DevExpress.DataAccess.Sql;
using DevExpress.DashboardWeb;
using Oracle.DataAccess.Client;

namespace ReportWebApplication
{
    public partial class DesignerPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ASPxDashboard1.SetConnectionStringsProvider(new DevExpress.DataAccess.Web.ConfigFileConnectionStringsProvider());
            ASPxDashboard1.AllowExecutingCustomSql = true;
            ASPxDashboard1.EnableCustomSql = true;
            ASPxDashboard1.WorkingMode = WorkingMode.Viewer;

        }

        
        protected void ASPxDashboard1_ConfigureDataConnection(object sender, ConfigureDataConnectionWebEventArgs e)
        {
           // OracleConnectionParameters oracleParams = new OracleConnectionParameters();
           // oracleParams.ServerName = "10.21.64.164/callcenter";
           // oracleParams.UserName = "UNI_CC_CORE";
           // oracleParams.Password = "Rm3iFBK1r7l3";


            //var param = e.ConnectionParameters as CustomStringConnectionParameters;
            //if (param != null)
            //{
            //    param.ConnectionString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["dbconn"].ToString();
            // }
        }



    


    }
}