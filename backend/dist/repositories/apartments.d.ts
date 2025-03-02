/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import Apartment from "../types/Apartment";
export declare const getApartments: ({ filters, pagination, }: {
    filters: Record<string, string>;
    pagination: {
        pageIndex: number;
        pageSize: number;
    };
}) => Promise<any>;
export declare const insertApartment: (payload: Omit<Apartment, "id" | "createdAt" | "updatedAt">) => Promise<import("mongoose").Document<unknown, any, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    area: number;
    apartmentId: string;
    projectName: string;
    floorNumber: number;
    price: number;
    propertyType: string;
}> & Omit<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    area: number;
    apartmentId: string;
    projectName: string;
    floorNumber: number;
    price: number;
    propertyType: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
export declare const getApartmentById: (id: string) => Promise<(import("mongoose").Document<unknown, any, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    area: number;
    apartmentId: string;
    projectName: string;
    floorNumber: number;
    price: number;
    propertyType: string;
}> & Omit<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    area: number;
    apartmentId: string;
    projectName: string;
    floorNumber: number;
    price: number;
    propertyType: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}, never>) | null>;
//# sourceMappingURL=apartments.d.ts.map