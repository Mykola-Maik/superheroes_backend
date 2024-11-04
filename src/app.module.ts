import { Module } from '@nestjs/common';
import { SuperheroModule } from './superhero/superhero.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Superhero } from './superhero/entities/superhero.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      entities: [Superhero],
      synchronize: process.env.NODE_ENV !== 'production',
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    TypeOrmModule.forFeature([Superhero]),
    SuperheroModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
