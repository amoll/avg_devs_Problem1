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

        public async Task<IEnumerable<AllocationMaster>> GetAllocationsByEmployee(int employeeId, bool includeDetails = false)
        {
            var allocationMaster = _context.AllocationMaster.Where(am => am.AllocatedByEmpId.Equals(employeeId));
            if (includeDetails) allocationMaster.Include(am => am.AllocationDetails);
            var allocations = await _context.AllocationMaster.Where(am => am.AllocatedByEmpId.Equals(employeeId))
                .Select(am1 => new AllocationMaster
                {
                    Id = am1.Id,
                    AllocatedBy = am1.AllocatedByEmpId
                    ,
                    AllocatedTo = am1.AllocatedToEmpId,
                    StartDate = am1.StartDate,
                    EndDate = am1.EndDate,
                    AllocationDetails = am1.AllocationDetails.Select(ad1 => new AllocationDetail
                    { Id = ad1.Id, DeskId = ad1.DeskId, AllocationMasterId = ad1.AllocationMasterId }).ToList()
                })
                .ToListAsync();

            return allocations;
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

            var bookedDesks = await (from l in _context.Locations
                     join f in _context.Floors on l.Id equals f.LocationId
                     join z in _context.Zones on f.Id equals z.FloorId
                     join d in _context.Desks on z.Id equals d.ZoneId
                     join ad in _context.AllocationDetails on d.Id equals ad.DeskId
                     where l.Id == locationId
                     select ad.DeskId).ToListAsync();

            //.Select(l1 => new Models.Location { Id = l1.Id, LocationName = l1.LocationName, Description = l1.Description
            //    , Floors = l1.Floors.Select(f1 => new Floor { Id = f1.Id, FloorName = f1.FloorName, LocationId = f1.LocationId
            //        , Zones = f1.Zones.Select(z1 => new Zone { Id = z1.Id, ZoneName = z1.ZoneName, FloorId = z1.FloorId
            //            , Desks = z1.Desks.Select(d1 => new Desk { Id = d1.Id, DeskNumber = d1.DeskNumber, Description = d1.Description
            //            , ZoneId = d1.ZoneId}).ToList()
            //        }).ToList()
            //    }).ToList()
            //})
            //.ToListAsync();
            if (l1 == null) return new Location();
            var location = new Models.Location
            {
                Id = l1.Id,
                LocationName = l1.LocationName,
                Description = l1.Description,
                Floors = l1.Floors.Select(f1 => new Floor
                {
                    Id = f1.Id,
                    FloorName = f1.FloorName,
                    LocationId = f1.LocationId,
                    Zones = f1.Zones.Select(z1 => new Zone
                    {
                        Id = z1.Id,
                        ZoneName = z1.ZoneName,
                        FloorId = z1.FloorId,
                        Desks = z1.Desks.Select(d1 => new Desk
                        {
                            Id = d1.Id,
                            DeskNo = d1.DeskNo,
                            Description = d1.Description,
                            ZoneId = d1.ZoneId,
                            Available = true,
                            Booked = bookedDesks.Contains(d1.Id)
                        }).ToList()
                    }).ToList()
                }).ToList()
            };

            return location;
        }

        public async Task<Location> GetLocationDetail(int locationId, int employeeId)
        {
            var l1 = await _context.Locations
                .Include(l => l.Floors).ThenInclude(f => f.Zones).ThenInclude(z => z.Desks)
                .FirstOrDefaultAsync(loc => loc.Id.Equals(locationId));

            var allowedDesks = await (from l in _context.Locations
                                     join f in _context.Floors on l.Id equals f.LocationId
                                     join z in _context.Zones on f.Id equals z.FloorId
                                     join d in _context.Desks on z.Id equals d.ZoneId
                                     join ad in _context.AllocationDetails on d.Id equals ad.DeskId
                                     join am in _context.AllocationMaster on ad.AllocationMasterId equals am.Id
                                     where (l.Id == locationId && am.AllocatedToEmpId == employeeId)
                                     select ad.DeskId).ToListAsync();
            var bookedDesks = await (from l in _context.Locations
                                      join f in _context.Floors on l.Id equals f.LocationId
                                      join z in _context.Zones on f.Id equals z.FloorId
                                      join d in _context.Desks on z.Id equals d.ZoneId
                                      join ad in _context.AllocationDetails on d.Id equals ad.DeskId
                                      join am in _context.AllocationMaster on ad.AllocationMasterId equals am.Id
                                      where (l.Id == locationId && am.AllocatedByEmpId == employeeId)
                                      select ad.DeskId).ToListAsync();

            if (l1 == null) return new Location();
            var location = new Models.Location
            {
                Id = l1.Id,
                LocationName = l1.LocationName,
                Description = l1.Description,
                Floors = l1.Floors.Select(f1 => new Floor
                {
                    Id = f1.Id,
                    FloorName = f1.FloorName,
                    LocationId = f1.LocationId,
                    Zones = f1.Zones.Select(z1 => new Zone
                    {
                        Id = z1.Id,
                        ZoneName = z1.ZoneName,
                        FloorId = z1.FloorId,
                        Desks = z1.Desks.Select(d1 => new Desk
                        {
                            Id = d1.Id,
                            DeskNo = d1.DeskNo,
                            Description = d1.Description,
                            ZoneId = d1.ZoneId,
                            Available = allowedDesks.Contains(d1.Id),
                            Booked = allowedDesks.Contains(d1.Id) 
                                ? bookedDesks.Contains(d1.Id) : false // show only the allowed desk to user. other desk should be disable
                        }).ToList()
                    }).ToList()
                }).ToList()
            };

            return location;
        }

        public async Task<int> AddAllocation(Allocation allocation)
        {
            if (allocation == null) throw new ArgumentNullException(nameof(allocation));
            var allocationToSave = new Entities.AllocationMaster
            {
                AllocatedByEmpId = allocation.AllocatedByEmpId,
                AllocatedToEmpId = allocation.AllocatedToEmpId,
                StartDate = allocation.StartDate,
                EndDate = allocation.EndDate,
                AllocationDetails = allocation.Desks.Select(d => new Entities.AllocationDetail { DeskId = d }).ToList()
            };

            _context.AllocationMaster.Add(allocationToSave);
            await _context.SaveChangesAsync();
            return allocationToSave.Id;
        }
    }
}
