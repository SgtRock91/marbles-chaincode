using RGA.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RGA.Controllers
{
    public class BlockChainController : ApiController
    {
        [ActionName("GetPerson")]
        [HttpPost]
        public Person GetPerson(string name)
        {
            return new Person { Name = name };
        }

        [ActionName("AddPerson")]
        [HttpPost]
        public bool AddPerson(Person person)
        {
            return true;
        }

        [ActionName("AddPerson")]
        [HttpPost]
        public bool AddHeartBeat(Person person, int heartBeat)
        {
            return true;
        }

        [ActionName("AddWalkingDistance")]
        [HttpPost]
        public bool AddWalkingDistance(Person person, int walkingDistance)
        {
            return true;
        }

        [ActionName("AddRunningDistance")]
        [HttpPost]
        public bool AddRunningDistance(Person person, int runningDistance)
        {
            return true;
        }
    }
}
