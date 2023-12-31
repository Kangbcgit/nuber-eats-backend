import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver:ApolloDriver,
      autoSchemaFile: true,
}),
    RestaurantsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
