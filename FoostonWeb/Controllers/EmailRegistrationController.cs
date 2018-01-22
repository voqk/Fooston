
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using FoostonWeb.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System;
using FoostonWeb.Services;

namespace FoostonWeb.Controllers
{
    [Route("api/[controller]")]
    public class EmailRegistrationController : Controller
    {
        private readonly FoostonContext _context;
        private readonly IEmailSender _emailSender;
        public EmailRegistrationController(FoostonContext context, IEmailSender emailSender)
        {
            _context = context;
            _emailSender = emailSender;
        }

        [HttpPost]
        public async Task<IActionResult> Update([FromBody] EmailRegistration registration)
        {
            if(registration == null) {
                return BadRequest();
            }
            try{
                _context.EmailRegistrations.Add(registration);
                await _context.SaveChangesAsync();
                await _emailSender.SendEmailAsync("this value ignored", "New registration", $"{registration.Name} - {registration.Email} wants to receive Fooston updates.");
            }
            catch (Exception e) {
                return BadRequest(e.Message);
            }

            return Ok();
        }
    }
}