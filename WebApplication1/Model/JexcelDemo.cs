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
        public string Hospitalization { get; set; }


        public int Amount { get; set; }

        public int Rate { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string Frequency { get; set; }

        public int Duration { get; set; }

        public int stage { get; set; }

        public int startMonth { get; set; }

        public int EndMonth { get; set; }

        public int SUnits { get; set; }

        public int PUnits { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Comments { get; set; }
    }
}
