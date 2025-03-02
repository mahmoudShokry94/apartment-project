import type { Request, Response } from "express";
import * as ApartmentService from "../services/apartments";

export const insertApartment = async (req: Request, res: Response) => {
  console.log("Controller...insertApartment...");

  const apartment = await ApartmentService.insertApartment(req.body);

  res.status(201).json({
    message: "Apartment has been inserted Succcessfully",
    data: {
      apartmentId: apartment.apartmentId,
    },
  });
};

export const getApartments = async (req: Request, res: Response) => {
  console.log("Controller...getApartments...");

  const pageIndex = parseInt((req?.query["pageIndex"] as string) ?? "0");
  const pageSize = parseInt((req?.query["pageSize"] as string) ?? "5");
  const projectName = req?.query["projectName"] as string;

  const respone = await ApartmentService.getApartments({
    pageIndex,
    pageSize,
    projectName,
  });

  res.status(200).json({
    message: "Apartments are Listed Succcessfull",
    data: respone,
  });
};

export const getApartmentById = async (req: Request, res: Response) => {
  console.log("Controller...getApartmentById...");

  const apartmentId = req.params.id;

  const respone = await ApartmentService.getApartmentById(apartmentId);

  res.status(200).json({
    message: "Apartment is Returned Succcessfully",
    data: respone,
  });
};
