using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class SampleJSON : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Response.Clear();
        System.Threading.Thread.Sleep(3000);
        Response.ContentType = @"application/json";
        string s = Request.Params["filter"] != null ? Request.Params["filter"].ToLower() : "all";
        if (s == "all")
        {
            Response.WriteFile(Server.MapPath("dataAll.json"));
        }
        else
        {
            Response.WriteFile(Server.MapPath("data.json"));
        }
        Response.End();
    }
}