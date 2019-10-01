
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
using DevExpress.DashboardWeb;
using Oracle.DataAccess.Client;
using System.Net;
using System.IO;

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


    }
}