import { Document, ObjectId } from 'mongoose';

export interface User extends Document {
    readonly _id: ObjectId;
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    readonly password: string;
    readonly createdAt: Number;
    readonly updatedAt: Number;
}