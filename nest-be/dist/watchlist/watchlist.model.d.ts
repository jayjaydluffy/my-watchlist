import * as mongoose from 'mongoose';
export declare const ShowSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: {
        createdAt: string;
        updatedAt: string;
    };
    collection: string;
}>, {
    title: string;
    description: string;
}>;
export interface Show {
    id: string;
    title: string;
    description: string;
}
