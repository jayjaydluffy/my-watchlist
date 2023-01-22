import { Module } from '@nestjs/common';
import { WatchlistModule } from './watchlist/watchlist.module';

@Module({
  imports: [WatchlistModule],
})
export class AppModule {}
