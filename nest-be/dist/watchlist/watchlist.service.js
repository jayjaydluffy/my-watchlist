"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchlistService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let WatchlistService = class WatchlistService {
    constructor(showModel) {
        this.showModel = showModel;
    }
    async insertShow(title, description) {
        const newShow = new this.showModel({ title, description });
        const result = await newShow.save();
        return result.id;
    }
    async fetchWatchlist() {
        const watchlist = await this.showModel.find().exec();
        return watchlist;
    }
    async fetchShow(showId) {
        try {
            const show = await this.showModel.findById(showId).exec();
            if (!show) {
                throw Error();
            }
            return show;
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find show.');
        }
    }
    async editShow(showId, showTitle, showDesc) {
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
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find show.');
        }
    }
    async deleteShow(showId) {
        try {
            const result = await this.showModel.findByIdAndDelete(showId).exec();
            if (!result) {
                throw Error();
            }
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find show.');
        }
    }
};
WatchlistService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Show')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], WatchlistService);
exports.WatchlistService = WatchlistService;
//# sourceMappingURL=watchlist.service.js.map