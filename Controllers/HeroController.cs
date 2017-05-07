using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNetCoreAngular.Models;

namespace AspNetCoreAngular.Controllers
{
    [Route("api/hero")]
    public class HeroController : Controller
    {
		[HttpGet]
		public IEnumerable<Hero> Get(string name)
        {
			if (string.IsNullOrEmpty(name)) return HEROES;
			return HEROES.Where(a => a.Name.Contains(name));
        }

		[HttpGet("{id:int}")]
		public Hero Get(int id)
		{
			return HEROES.FirstOrDefault(a => a.Id == id);
		}

		[HttpPost]
		public Hero Post([FromBody]Hero hero)
		{
			var max = HEROES.Max(a => a.Id);
			var newHero = new Hero { Id = ++max, Name = hero.Name };
			HEROES.Add(newHero);
			return newHero;
		}

		[HttpPut]
		public void Put([FromBody]Hero hero)
		{
			var oldHero = HEROES.FirstOrDefault(a => a.Id == hero.Id);
			if (oldHero != null) oldHero.Name = hero.Name;
		}

		[HttpDelete("{id:int}")]
		public void Delete(int id)
		{
			HEROES.Remove(HEROES.FirstOrDefault(a => a.Id == id));
		}		

		public static List<Hero> HEROES = new List<Hero> {
			new Hero{ Id = 11, Name = "Mr. Nice" },
			new Hero{ Id = 12, Name = "Narco" },
			new Hero{ Id = 13, Name = "Bombasto" },
			new Hero{ Id = 14, Name = "Celeritas" },
			new Hero{ Id = 15, Name = "Magneta" },
			new Hero{ Id = 16, Name = "RubberMan" },
			new Hero{ Id = 17, Name = "Dynama" },
			new Hero{ Id = 18, Name = "Dr IQ" },
			new Hero{ Id = 19, Name = "Magma" },
			new Hero{ Id = 20, Name = "Tornado" },
		};		
    }
}
