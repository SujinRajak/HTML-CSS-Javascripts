using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Interface;
using WebApplication1.Model;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JexcelController : ControllerBase
    {
        private  Ijexcel _context;

        public JexcelController(Ijexcel context) 
        {
            _context = context;
        }
        
        [HttpGet]
        public IEnumerable<JexcelDemo> Index()
        {
            var value = _context.getallval();
            List<JexcelDemo> lister = value.ToList();
            
            return value;
        }
    }
}
