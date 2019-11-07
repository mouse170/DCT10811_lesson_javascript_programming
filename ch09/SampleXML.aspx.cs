using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class SampleXML : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Response.Clear();
        Response.Write("<h1>I am Sample.aspx -- " + DateTime.Now.Millisecond + "</h1>");
        Response.End();
    }
}