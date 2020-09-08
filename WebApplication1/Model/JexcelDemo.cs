using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    public class JexcelDemo
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Product { get; set; }


        public int Amount { get; set; }

        public int Rate { get; set; }
    
        public int Price { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Comments { get; set; }
    }
}
