import { Injectable, NotFoundException } from '@nestjs/common';
import * as crypto from 'crypto';
import { Show } from './watchlist.model';

@Injectable()
export class WatchlistService {
  private watchlist: Show[] = [];

  insertShow(title: string, description: string) {
    const showId = crypto.randomUUID().toString();
    const newShow = new Show(showId, title, description);
    this.watchlist.push(newShow);
    return showId;
  }

  fetchWatchlist() {
    return [...this.watchlist];
  }

  fetchShow(showId: string) {
    const show = this.watchlist.find((show) => show.id === showId);
    if (!show) {
      throw new NotFoundException('Could not find show.');
    }
    return { ...show };
  }

  editShow(showId: string, showTitle: string, showDesc: string) {
    const showIdx = this.watchlist.findIndex((show) => show.id === showId);
    if (showIdx === -1) {
      throw new NotFoundException('Could not find show.');
    }

    const updatedShow = { ...this.watchlist[showIdx] };
    if (showTitle) {
      updatedShow.title = showTitle;
    }
    if (showDesc) {
      updatedShow.description = showDesc;
    }

    this.watchlist[showIdx] = updatedShow;
  }

  deleteShow(showId: string) {
    const showIdx = this.watchlist.findIndex((show) => show.id === showId);
    if (showIdx === -1) {
      throw new NotFoundException('Could not find show.');
    }
    this.watchlist.splice(showIdx, 1);
  }
}
