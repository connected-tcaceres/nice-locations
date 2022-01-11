import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '../../src/config/config.service';

@Injectable()
export class PostgresTypeORMConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      url: this.configService.get<string>('database.url'),
      entities: this.configService.get<string[]>('orm.entities'),
      synchronize: this.configService.get<boolean>('orm.synchronize'),
    };
  }
}
