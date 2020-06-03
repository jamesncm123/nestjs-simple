import { Document } from 'mongoose';

export interface User extends Document{
    userId: string;
    fristName: string;
    lastName: string;
    age: number;
    createdAt: Date;
}