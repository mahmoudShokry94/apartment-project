import { NotFoundError, ValidationError } from "../Error/error";
import * as ApartmentRepository from "../repositories/apartments";
import Apartment from "../types/Apartment";

export const getApartments = async ({
  pageIndex,
  pageSize,
  projectName,
}: {
  pageIndex: number;
  pageSize: number;
  projectName: string;}) => {
  console.log("Service...getApartments...");

  return ApartmentRepository.getApartments({
    filters: { projectName },
    pagination: { pageIndex, pageSize },
  });
};

export const insertApartment = async (
  payload: Apartment
) => {
  console.log("Service...insertApartment...");

  return ApartmentRepository.insertApartment(payload);
};

export const getApartmentById = async (id: string) => {
  console.log("Service...getApartmentById...");

  const apartment = await ApartmentRepository.getApartmentById(id);

  if (!apartment) {
    throw new NotFoundError("Apartment not found");
  }

  return apartment
};
