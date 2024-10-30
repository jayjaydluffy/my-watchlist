import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WatchlistController } from './watchlist.controller';
import { ShowSchema } from './watchlist.model';
import { WatchlistService } from './watchlist.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Show', schema: ShowSchema }])],
  controllers: [WatchlistController],
  providers: [WatchlistService],
})
export class WatchlistModule {}
