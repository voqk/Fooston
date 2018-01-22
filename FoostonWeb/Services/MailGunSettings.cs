using System.Collections.Generic;

namespace FoostonWeb.Services
{
    public class MailGunSettings
    {
        public string ApiKey { get; set; }
        public string RegistrationNotificationDestinations { get; set; }
    }
}