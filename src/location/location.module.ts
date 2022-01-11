import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../../src/common/common.module';
import { LocationController } from './location.controller';
import { Location } from './location.entity';
import { LocationService } from './location.service';

@Module({
  controllers: [LocationController],
  imports: [TypeOrmModule.forFeature([Location]), CommonModule],
  providers: [LocationService],
})
export class LocationModule {}
