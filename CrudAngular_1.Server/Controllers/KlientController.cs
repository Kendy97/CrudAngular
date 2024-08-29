using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CrudAngular_1.Server.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class KlientController : ControllerBase
    {

        private static List<Client> Clients = new List<Client>
        {
            new Client { Id = 1, Name = "Jan Kowalski", Email = "jan.kowalski@example.com", bio = "Fajny klient" },
            new Client { Id = 2, Name = "Anna Nowak", Email = "anna.nowak@example.com", bio = "Mniej fajny klient" }
        };

        [HttpGet("getClients")]
        public ActionResult<IEnumerable<Client>> GetClients()
        {
            return Ok(Clients);
        }

        [HttpPost("addClient")]
        public ActionResult<Client> AddClient(Client client)
        {
            if (Clients.Any())
            {
                client.Id = Clients.Max(c => c.Id) + 1;
            }
            else
            {
                client.Id = 1; 
            }

            Clients.Add(client);
            return Ok(client);
        }

        [HttpPut("{id}")]
        public ActionResult EditClient(int id, Client client)
        {
            var existingClient = Clients.FirstOrDefault(c => c.Id == id);
            if (existingClient == null)
                return NotFound();

            existingClient.Name = client.Name;
            existingClient.Email = client.Email;
            existingClient.bio = client.bio;
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteClient(int id)
        {
            var client = Clients.FirstOrDefault(c => c.Id == id);
            if (client == null)
                return NotFound();

            Clients.Remove(client);
            return NoContent();
        }
    }

    public class Client
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string bio { get; set; }

    }


}

