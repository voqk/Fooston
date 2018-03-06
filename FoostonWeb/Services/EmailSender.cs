using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RestSharp;
using RestSharp.Authenticators;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace FoostonWeb.Services
{
    // This class is used by the application to send email for account confirmation and password reset.
    // For more details see https://go.microsoft.com/fwlink/?LinkID=532713
    public class EmailSender : IEmailSender
    {
        private readonly IOptions<MailGunSettings> _mailGunSettings;

        public EmailSender(IOptions<MailGunSettings> mailGunSettings)
        {
            _mailGunSettings = mailGunSettings;
        }

        public Task SendEmailAsync(string email, string subject, string message)
        {
            var domain = "sandbox97f537fd98054d8b93b18c8415fd5f95.mailgun.org";
            var client = new RestClient($"https://api.mailgun.net");
            client.Authenticator = new HttpBasicAuthenticator("api", _mailGunSettings.Value.ApiKey);

            var request = new RestRequest($"v3/{domain}/messages");
            request.AddParameter("from", "Fooston noreply@fooston.com");
            request.AddParameter("to", _mailGunSettings.Value.RegistrationNotificationDestinations);
            request.AddParameter("subject", subject);
            request.AddParameter("text", message);
            request.Method = Method.POST;
            client.Execute(request);
            return Task.CompletedTask;
        }
    }
}