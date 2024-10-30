import * as mongoose from 'mongoose';
export const ShowSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'last_updated' },
    collection: 'watchlist',
  },
);
export interface Show {
  id: string;
  title: string;
  description: string;
}
