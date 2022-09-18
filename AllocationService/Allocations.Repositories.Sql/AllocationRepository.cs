using Allocations.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Allocations.Repositories.Sql
{
    public class AllocationRepository : IAllocationRepository
    {
        private readonly AllocationDbContext _context;

        public AllocationRepository(AllocationDbContext context)
        {
            _context = context;
        }
        public async Task<AllocationDetail> GetAllocation(int id)
        {
            if (id == 0) return null;

            var loc = await _context.Locations.ToListAsync();
            return new AllocationDetail();

        }

        public async Task<IEnumerable<Location>> GetAllLocations()
        {
            var locations = await _context.Locations
                .Select(l => new Models.Location { Id = l.Id, LocationName = l.LocationName })
                .ToListAsync();
            return locations;
        }

        public async Task<Location> GetLocationDetail(int locationId)
        {
            var l1 = await _context.Locations
                .Include(l => l.Floors).ThenInclude(f => f.Zones).ThenInclude(z => z.Desks)
                .FirstOrDefaultAsync(loc => loc.Id.Equals(locationId));
                //.Select(l1 => new Models.Location { Id = l1.Id, LocationName = l1.LocationName, Description = l1.Description
                //    , Floors = l1.Floors.Select(f1 => new Floor { Id = f1.Id, FloorName = f1.FloorName, LocationId = f1.LocationId
                //        , Zones = f1.Zones.Select(z1 => new Zone { Id = z1.Id, ZoneName = z1.ZoneName, FloorId = z1.FloorId
                //            , Desks = z1.Desks.Select(d1 => new Desk { Id = d1.Id, DeskNumber = d1.DeskNumber, Description = d1.Description
                //            , ZoneId = d1.ZoneId}).ToList()
                //        }).ToList()
                //    }).ToList()
                //})
                //.ToListAsync();
            if(l1 == null) return new Location();
            var location = new Models.Location
            {
                Id = l1.Id,
                LocationName = l1.LocationName,
                Description = l1.Description
                    ,
                Floors = l1.Floors.Select(f1 => new Floor
                {
                    Id = f1.Id,
                    FloorName = f1.FloorName,
                    LocationId = f1.LocationId
                        ,
                    Zones = f1.Zones.Select(z1 => new Zone
                    {
                        Id = z1.Id,
                        ZoneName = z1.ZoneName,
                        FloorId = z1.FloorId
                            ,
                        Desks = z1.Desks.Select(d1 => new Desk
                        {
                            Id = d1.Id,
                            DeskNo = d1.DeskNo,
                            Description = d1.Description
                            ,
                            ZoneId = d1.ZoneId
                        }).ToList()
                    }).ToList()
                }).ToList()
            };
            return location;
        }
    }
}
