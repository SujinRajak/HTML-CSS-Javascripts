using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Model;

namespace WebApplication1.Controllers
{
    public class JexcelController : Controller
    {
        private readonly ApplicationDbContext _context;

        public JexcelController(ApplicationDbContext context) 
        {
            _context = context;
        }
        
        
        public IActionResult Index()
        {
            return View();
        }
    }
}
