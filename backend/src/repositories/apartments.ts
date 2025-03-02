import ApartmentModel from "../models/apartments";
import Apartment from "../types/Apartment";
import { mongoInputSanitize } from "../utils/mongo-utils";

export const getApartments = async ({
  filters = {},
  pagination,
}: {
  filters: Record<string, string>;
  pagination: {
    pageIndex: number;
    pageSize: number;
  };
}) => {
  console.log("Respository...getApartments...");
  let mappedFilters: any = {};

  if (filters.projectName) {
    mappedFilters.projectName = {
      $regex: new RegExp(mongoInputSanitize(filters.projectName), "i"),
    };
  }

  const aggregationResult = (
    await ApartmentModel.aggregate([
      { $match: mappedFilters },
      {
        $facet: {
          results: [
            {
              $skip: pagination.pageIndex * pagination.pageSize,
            },
            {
              $limit: pagination.pageSize,
            },
            {
              $project: {
                _id: 0,
                id: "$apartmentId",
                name: 1,
                projectName: 1,
                area: 1,
                floorNumber: 1,
                price: 1,
                propertyType: 1,
              },
            },
          ],
          totalCount: [{ $count: "count" }],
        },
      },
      {
        $project: {
          results: 1,
          resultReport: {
            pageSize: { $size: "$results" },
            totalCount: {
              $arrayElemAt: ["$totalCount.count", 0],
            },
          },
        },
      },
    ])
  )?.[0] ?? {
    results: [],
    resultReport: {
      pageSize: pagination?.pageSize,
      totalCount: 0,
    },
  };
  aggregationResult.resultReport.pageIndex = pagination?.pageIndex;

  return aggregationResult;
};

export const insertApartment = async (
  payload: Omit<Apartment, "id" | "createdAt" | "updatedAt">
) => {
  console.log("Respository...insertApartment...");

  return ApartmentModel.create(payload);
};

export const getApartmentById = async (id: string) => {
  console.log("Respository...getApartmentById...");

  return ApartmentModel.findOne({ apartmentId: id }).select(
    "-_id -__v -createdAt -updatedAt"
  );
};
