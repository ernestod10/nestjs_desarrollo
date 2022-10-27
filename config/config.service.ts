import { TypeOrmModuleOptions } from '@nestjs/typeorm'; 

require('dotenv').config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions { 
    return {
      type: 'postgres', 

      host: "localhost",
      port: 5432,
      username: 'postgres',
      password: 'secret',
      database: 'test',

      entities: ['dist/**/*.entity.js'], 
      synchronize: true, 
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'TUTORIAL_HOST',
  'TUTORIAL_PORT',
  'TUTORIAL_USER',
  'TUTORIAL_PASSWORD',
  'TUTORIAL_DATABASE',
]);

export { configService };