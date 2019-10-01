using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DevExpress.DashboardWeb;
using System.DirectoryServices.AccountManagement;
using System.Web.Services;


namespace ReportWebApplication
{
    [System.Web.Script.Services.ScriptService]
    public partial class LoginPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }


        [WebMethod]
        public static bool checkUserAcc(string username, string password)
        {
            bool rvalue = false;
            string rmsg = string.Empty;
            try
            {
                // 10.21.64.228
                // 10.21.64.229
                // 10.21.64.0 / 24

                using (PrincipalContext pc = new PrincipalContext(ContextType.Domain, "", "LDAP://10.21.64.0/CN=Configuration,DC=corp,DC=unitel,DC=mn"))
                {
                    rvalue = pc.ValidateCredentials(username, password);
                }
            }
            catch (Exception ex)
            {
                rmsg = ex.Message;
            }

            return rvalue;
        }


    }
}