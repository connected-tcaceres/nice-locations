import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../../src/config/config.module';
import { PostgresTypeORMConfigService } from './postgres-typeorm-config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: PostgresTypeORMConfigService,
    }),
  ],
})
export class DatabaseModule {}
