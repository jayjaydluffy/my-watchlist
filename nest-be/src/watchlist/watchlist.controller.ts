import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { WatchlistService } from './watchlist.service';

@Controller('api/watchlist')
export class WatchlistController {
  constructor(private watchlistService: WatchlistService) {}

  @Post()
  addShow(
    @Body('title') showTitle: string,
    @Body('description') showDesc: string,
  ) {
    const newShowId = this.watchlistService.insertShow(showTitle, showDesc);
    return { id: newShowId };
  }

  @Get()
  getWatchlist() {
    return this.watchlistService.fetchWatchlist();
  }

  @Get(':id')
  getShow(@Param('id') showId: string) {
    return this.watchlistService.fetchShow(showId);
  }

  @Put(':id')
  updateShow(
    @Param('id') showId: string,
    @Body('title') showTitle: string,
    @Body('description') showDesc: string,
  ) {
    this.watchlistService.editShow(showId, showTitle, showDesc);
    return null;
  }

  @Delete(':id')
  removeShow(@Param('id') showId: string) {
    this.watchlistService.deleteShow(showId);
    return null;
  }
}
