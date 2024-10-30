"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowSchema = void 0;
const mongoose = require("mongoose");
exports.ShowSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'last_updated' },
    collection: 'watchlist',
});
//# sourceMappingURL=watchlist.model.js.map