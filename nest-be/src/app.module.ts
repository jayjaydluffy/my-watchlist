import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WatchlistModule } from './watchlist/watchlist.module';

@Module({
  imports: [
    WatchlistModule,
    MongooseModule.forRoot(
      'mongodb://localhost:27017/rtk-demo?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
