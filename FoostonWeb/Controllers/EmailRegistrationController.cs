
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
        private readonly FoostonDbContext _context;
        private readonly IEmailSender _emailSender;
        public EmailRegistrationController(FoostonDbContext context, IEmailSender emailSender)
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
                // a little hack to get standings to save to the DB w/o an IDENTITY column for now.
                // This issue came up when I ported from PostgreSQL to SQLServer. 
                var emailWithGreatestId = await _context.EmailRegistrations.OrderByDescending(r => registration.Id).FirstAsync();

                registration.Id = emailWithGreatestId.Id + 1;

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