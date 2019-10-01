using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ReportWebApplication
{
    public partial class LoginPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }


        [WebMethod]
        public static bool checkUser(string username, string password)
        {
            bool rvalue = false;
            string rmsg = string.Empty;
            try
            {
                using (PrincipalContext pc = new PrincipalContext(ContextType.Domain, "", "LDAP://10.21.64.228/CN=Configuration,DC=corp,DC=unitel,DC=mn"))
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