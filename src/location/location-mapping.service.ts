import { Injectable } from '@nestjs/common';
import { MappingService } from '../../src/common/mapping.service';
import { Location } from './location.entity';
import { LocationDto } from './location.dto';

@Injectable()
export class LocationMappingService extends MappingService {
  public addMapping(): void {
    automapper.createMap(Location.name, LocationDto.name);
  }
}
