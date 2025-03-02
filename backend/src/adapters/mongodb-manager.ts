import mongoose from 'mongoose';

const apartmentsDBMongoBinding =
    process.env.MONGO_URL ??
    'mongodb://localhost:27017/apartments';

let _apartmentsDB: mongoose.Connection;

export const initDB = async function initDB(callback: {
    (err: unknown): void;
    (arg0: null, arg1: mongoose.Connection): void;
}) {
    try {
        console.log('Intializing Apartments DB Connection');

        _apartmentsDB = await mongoose
            .createConnection(apartmentsDBMongoBinding)
            .asPromise();


        console.log('Apartments DB Connection Intialized Successfully');

        console.log('Calling initDB Callback');
        return callback(null);
    } catch (err) {
        console.log('Error when Intializing DB Connection');

        console.log('Calling Callback................ in catch block');
        callback(err);
    }
};

export const getApartmentsDb = function getDb() {
    return _apartmentsDB;
};
