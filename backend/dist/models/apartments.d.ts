import mongoose from "mongoose";
declare const _default: mongoose.Model<{
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
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
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
}>>;
export default _default;
//# sourceMappingURL=apartments.d.ts.map