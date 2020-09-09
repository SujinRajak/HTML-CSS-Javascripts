using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Model;

namespace WebApplication1.Interface
{
    public interface Ijexcel
    {
        public IEnumerable<JexcelDemo> getallval();

      //  public void csv();
    }
}
