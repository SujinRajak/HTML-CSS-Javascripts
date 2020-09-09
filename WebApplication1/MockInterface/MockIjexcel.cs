using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication1.Interface;
using WebApplication1.Model;

namespace WebApplication1.MockInterface
{
    public class MockIjexcel : Ijexcel
    {
        private ApplicationDbContext context;

        public MockIjexcel(ApplicationDbContext _context)
        {
            context = _context;
        }

        //public void csv()
        //{
        //    string foldername = @"C:\Users\Sujin\Desktop\react basics\HTML-CSS-Javascripts\WebApplication1";
        //    string pathString = Path.Combine(foldername, "CSV");
        //    Directory.CreateDirectory(pathString);
        //    var builder = new StringBuilder();
        //    builder.AppendLine("product,Amount,rate,Total,comment");
        //    foreach (var emp in context.jexcelDemo)
        //    {
        //        builder.AppendLine($"{emp.Product},{emp.Amount},{emp.Rate},{emp.Price}");
        //    }
        //    string filenmame = @"prod.csv";
        //    Path.Combine(pathString, filenmame);
        //    if (!File.Exists(pathString))
        //    {
        //        StreamWriter file = new StreamWriter(pathString);
        //        file.WriteLine((builder.ToString()));
        //    }
        //}

        public IEnumerable<JexcelDemo> getallval()
        {
            //  csv();
            var arrayVal = context.jexcelDemo.ToList();
            return arrayVal;
        }
    }
}
