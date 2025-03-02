import mongoose from 'mongoose';
export declare const initDB: (callback: {
    (err: unknown): void;
    (arg0: null, arg1: mongoose.Connection): void;
}) => Promise<void>;
export declare const getApartmentsDb: () => mongoose.Connection;
//# sourceMappingURL=mongodb-manager.d.ts.map