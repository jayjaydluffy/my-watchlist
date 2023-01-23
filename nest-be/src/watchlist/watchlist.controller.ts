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
  async addShow(
    @Body('title') showTitle: string,
    @Body('description') showDesc: string,
  ) {
    const newShowId = await this.watchlistService.insertShow(
      showTitle,
      showDesc,
    );
    return { id: newShowId };
  }

  @Get()
  async getWatchlist() {
    return await this.watchlistService.fetchWatchlist();
  }

  @Get(':id')
  async getShow(@Param('id') showId: string) {
    return await this.watchlistService.fetchShow(showId);
  }

  @Put(':id')
  async updateShow(
    @Param('id') showId: string,
    @Body('title') showTitle: string,
    @Body('description') showDesc: string,
  ) {
    const updateResult = await this.watchlistService.editShow(
      showId,
      showTitle,
      showDesc,
    );
    return {
      message: updateResult
        ? `Show with ID: ${showId} updated.`
        : `Update failed`,
    };
  }

  @Delete(':id')
  async removeShow(@Param('id') showId: string) {
    await this.watchlistService.deleteShow(showId);
    return {
      message: `Show with ID: ${showId} deleted.`,
    };
  }
}
