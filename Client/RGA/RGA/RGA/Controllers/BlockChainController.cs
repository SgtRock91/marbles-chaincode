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
        private List<int> _mockHeartBeats = new List<int> {69, 67, 70, 102, 110, 98};

        private List<int> _mockWalkDistances = new List<int> { 2, 5, 3, 1, 1, 2 };

        private List<int> _mockRunDistances = new List<int> { 3, 2, 3, 4, 7, 5 };

        [ActionName("GetPerson")]
        [HttpPost]
        public Person GetPerson(string name)
        {
            return new Person { Name = name ?? "John Doe", HeartBeats = _mockHeartBeats, WalkingDistances = _mockWalkDistances, RunningDistances = _mockRunDistances};
        }

        [ActionName("AddPerson")]
        [HttpPost]
        public bool AddPerson(Person person)
        {
            return true;
        }

        [ActionName("AddHeartBeat")]
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
