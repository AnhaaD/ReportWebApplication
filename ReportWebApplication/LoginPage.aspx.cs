using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DevExpress.DashboardWeb;
using System.DirectoryServices;
using System.DirectoryServices.AccountManagement;
using System.DirectoryServices.Protocols;
using System.Web.Services;
using System.Net;


namespace ReportWebApplication
{
    [System.Web.Script.Services.ScriptService]
    public partial class LoginPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static bool LoginConn(string username, string password)
        {
            bool isValid = false;

            using (var pc = new PrincipalContext(ContextType.Domain, "10.21.64.229:389", "CN=Configuration,DC=corp,DC=unitel,DC=mn"))
            {
                isValid = pc.ValidateCredentials(username, password, ContextOptions.SimpleBind);
            }

            return isValid;
        }




    }
}