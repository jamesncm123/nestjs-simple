import { Schema } from 'mongoose';

export const UserShema = new Schema({
    userId: Schema.Types.String,
    fristName: Schema.Types.String,
    lastName: Schema.Types.String,
    age: Schema.Types.Number,
    createdAt: Schema.Types.Date
})