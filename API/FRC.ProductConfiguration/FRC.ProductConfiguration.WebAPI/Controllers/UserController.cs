using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Microsoft.IdentityModel.Clients.ActiveDirectory;

namespace FRC.ProductConfiguration.WebAPI.Controllers
{
    public class UserController : ApiController
    {

        [HttpGet]
        public string LoginAndGetToken()
        {
            var resource = "https://orca-dev.api.crm5.dynamics.com";
            var clientId = "c5bb5de6-7cc9-4113-93cd-752b8d3ed475";
            var redirectUrl = "http://localhost";

            var authContext = new AuthenticationContext("https://login.microsoftonline.com/77dee05b-8ff2-4aee-81a7-461ed9ab3456/oauth2/token", false);
            var token = authContext.AcquireToken(resource, clientId, new Uri(redirectUrl), PromptBehavior.RefreshSession);

            return token.CreateAuthorizationHeader();
        }
    }
}
