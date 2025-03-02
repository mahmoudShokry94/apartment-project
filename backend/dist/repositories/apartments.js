"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApartmentById = exports.insertApartment = exports.getApartments = void 0;
var apartments_1 = __importDefault(require("../models/apartments"));
var mongo_utils_1 = require("../utils/mongo-utils");
var getApartments = function (_a) {
    var _b = _a.filters, filters = _b === void 0 ? {} : _b, pagination = _a.pagination;
    return __awaiter(void 0, void 0, void 0, function () {
        var mappedFilters, aggregationResult;
        var _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    console.log("Respository...getApartments...");
                    mappedFilters = {};
                    if (filters.projectName) {
                        mappedFilters.projectName = {
                            $regex: new RegExp((0, mongo_utils_1.mongoInputSanitize)(filters.projectName), "i"),
                        };
                    }
                    return [4 /*yield*/, apartments_1.default.aggregate([
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
                        ])];
                case 1:
                    aggregationResult = (_d = (_c = (_e.sent())) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : {
                        results: [],
                        resultReport: {
                            pageSize: pagination === null || pagination === void 0 ? void 0 : pagination.pageSize,
                            totalCount: 0,
                        },
                    };
                    aggregationResult.resultReport.pageIndex = pagination === null || pagination === void 0 ? void 0 : pagination.pageIndex;
                    return [2 /*return*/, aggregationResult];
            }
        });
    });
};
exports.getApartments = getApartments;
var insertApartment = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("Respository...insertApartment...");
        return [2 /*return*/, apartments_1.default.create(payload)];
    });
}); };
exports.insertApartment = insertApartment;
var getApartmentById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("Respository...getApartmentById...");
        return [2 /*return*/, apartments_1.default.findOne({ apartmentId: id }).select("-_id -__v -createdAt -updatedAt")];
    });
}); };
exports.getApartmentById = getApartmentById;
//# sourceMappingURL=apartments.js.map