"use server";

import { Apartment } from "@/DomainModel";
import { BackendListResponse, BackendResponse } from "@/types";

export const getApartments = async ({
  pagination = { pageIndex: 0, pageSize: 5 },
  filters,
}: {
  pagination: { pageSize: number; pageIndex: number };
  filters?: { projectName: string };
}): Promise<BackendListResponse<Apartment[]>> => {
  let params = "";

  if (filters?.projectName) {
    params += `&projectName=${filters.projectName}`;
  }

  try {
    const response = await fetch(
      `${process.env["API_HOST"]}apartments?pageSize=${pagination.pageSize}&pageIndex=${pagination.pageIndex}${params}`,{
        cache: "no-cache"
      }
    );
    let apartments = await response.json();

    return apartments;
  } catch (e) {
    return {
      data: {
        results: [] as unknown as Apartment[],
        resultReport: {
          pageIndex: 0,
          pageSize: 0,
          totalCount: 0,
        },
      },
      message: "Error while fetching apartments",
    };
  }
};

export const getApartmentById = async (
  apartmentId: string
): Promise<BackendResponse<Apartment>> => {
  try {
    const response = await fetch(
      `${process.env["API_HOST"]}apartments/${apartmentId}`
    );
    let apartment = await response.json();

    return apartment;
  } catch (e) {
    return {
      data: {} as Apartment,
      message: "Error while fetching apartment details",
    };
  }
};

export const insertApartment = async (
  apartment: Apartment
): Promise<BackendResponse<{apartmentId:string}|null>> => {
  try {
    const response = await fetch(`${process.env["API_HOST"]}apartments`, {
      method: "POST",
      body: JSON.stringify(apartment),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let apartmentResponse = await response.json();

    return apartmentResponse;
  } catch (e) {
    return {
      data: null,
      message: "Error while inserting apartment details",
    };
  }
};
