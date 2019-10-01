
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
using System.Net;
using System.IO;

using System.DirectoryServices;
using System.DirectoryServices.Protocols;
using System.DirectoryServices.AccountManagement;
using System.Web.Services;

namespace ReportWebApplication
{
    [System.Web.Script.Services.ScriptService]
    public partial class DesignerPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ASPxDashboard1.SetConnectionStringsProvider(new DevExpress.DataAccess.Web.ConfigFileConnectionStringsProvider());
            ASPxDashboard1.AllowExecutingCustomSql = true;
            ASPxDashboard1.EnableCustomSql = true;
            ASPxDashboard1.WorkingMode = WorkingMode.Viewer;
        }

        [WebMethod]
        public static bool checkUser(string username, string password)
        {
            bool rvalue = false;
            string rmsg = string.Empty;
            try
            {
                PrincipalContext pc = new PrincipalContext(ContextType.Domain, "Rodc.corp.unitel.mn", "ldap://10.21.64.228/CN=Configuration,DC=corp,DC=unitel,DC=mn");
                rvalue = pc.ValidateCredentials(username, password);
            }catch(Exception ex)
            {
                rmsg = ex.Message;
            }

            return rvalue;
        }
    }
}