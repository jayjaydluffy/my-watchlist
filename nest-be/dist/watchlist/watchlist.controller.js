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
exports.WatchlistController = void 0;
const common_1 = require("@nestjs/common");
const watchlist_service_1 = require("./watchlist.service");
let WatchlistController = class WatchlistController {
    constructor(watchlistService) {
        this.watchlistService = watchlistService;
    }
    async addShow(showTitle, showDesc) {
        const newShowId = await this.watchlistService.insertShow(showTitle, showDesc);
        return { id: newShowId };
    }
    async getWatchlist() {
        return await this.watchlistService.fetchWatchlist();
    }
    async getShow(showId) {
        return await this.watchlistService.fetchShow(showId);
    }
    async updateShow(showId, showTitle, showDesc) {
        const updateResult = await this.watchlistService.editShow(showId, showTitle, showDesc);
        return {
            message: updateResult
                ? `Show with ID: ${showId} updated.`
                : `Update failed`,
        };
    }
    async removeShow(showId) {
        await this.watchlistService.deleteShow(showId);
        return {
            message: `Show with ID: ${showId} deleted.`,
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('title')),
    __param(1, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WatchlistController.prototype, "addShow", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WatchlistController.prototype, "getWatchlist", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WatchlistController.prototype, "getShow", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('title')),
    __param(2, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], WatchlistController.prototype, "updateShow", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WatchlistController.prototype, "removeShow", null);
WatchlistController = __decorate([
    (0, common_1.Controller)('api/watchlist'),
    __metadata("design:paramtypes", [watchlist_service_1.WatchlistService])
], WatchlistController);
exports.WatchlistController = WatchlistController;
//# sourceMappingURL=watchlist.controller.js.map