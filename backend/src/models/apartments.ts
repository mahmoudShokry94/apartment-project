import mongoose from "mongoose";
import { getApartmentsDb } from "../adapters/mongodb-manager";
import * as uuid from "uuid";

const apartmentSchema = new mongoose.Schema(
  {
    apartmentId: {
      type: String,
      unique: true,
      required: true,
      index: true,
      default: uuid.v7,
    },
    name: {
      type: String,
      required: true,
      index: true,
    },
    projectName: {
      type: String,
      required: true,
      index: true,
    },
    area: {
      type: Number,
      required: true,
    },
    floorNumber: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    propertyType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const connection = getApartmentsDb();

export default connection.model("Apartment", apartmentSchema);
