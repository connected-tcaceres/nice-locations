import { Controller, Get, Render } from '@nestjs/common';

import { MappingRegistryService } from '../../src/common/mapping-registry.service';
import { LocationListDto } from './location-list.dto';
import { LocationService } from './location.service';
import { LocationDto } from './location.dto';
import { Location } from './location.entity';

@Controller()
export class LocationController {
  constructor(
    private readonly locationService: LocationService,
    private readonly mappingRegistryService: MappingRegistryService,
  ) {}

  @Get()
  @Render('list.hbs')
  public async listLocations(): Promise<LocationListDto> {
    const locations = this.locationService.list();
    const dtos = (await locations).map((location) =>
      this.mappingRegistryService.map<LocationDto>(
        Location.name,
        LocationDto.name,
        location,
      ),
    );
    return {
      locations: dtos,
    };
  }
}
