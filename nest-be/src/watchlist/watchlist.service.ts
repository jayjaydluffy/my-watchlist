import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Show } from './watchlist.model';

@Injectable()
export class WatchlistService {
  constructor(@InjectModel('Show') private readonly showModel: Model<Show>) {}

  async insertShow(title: string, description: string) {
    const newShow = new this.showModel({ title, description });
    const result = await newShow.save();
    return result.id as string;
  }

  async fetchWatchlist() {
    const watchlist = await this.showModel.find().exec();
    return watchlist;
  }

  async fetchShow(showId: string) {
    try {
      const show = await this.showModel.findById(showId).exec();
      if (!show) {
        throw Error();
      }
      return show;
    } catch (error) {
      throw new NotFoundException('Could not find show.');
    }
  }

  async editShow(showId: string, showTitle: string, showDesc: string) {
    try {
      const editedShow = await this.showModel.findById(showId).exec();
      if (!editedShow) {
        throw Error();
      }
      if (showTitle) {
        editedShow.title = showTitle;
      }
      if (showDesc) {
        editedShow.description = showDesc;
      }

      const updatedShow = await editedShow.save();
      return editedShow === updatedShow;
    } catch (error) {
      throw new NotFoundException('Could not find show.');
    }
  }

  async deleteShow(showId: string) {
    try {
      const result = await this.showModel.findByIdAndDelete(showId).exec();
      if (!result) {
        throw Error();
      }
    } catch (error) {
      throw new NotFoundException('Could not find show.');
    }
  }
}
