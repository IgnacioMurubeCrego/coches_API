import { ObjectId, OptionalId } from "mongodb";

export type Vehicle = OptionalId<{
	id: string;
	brand: string;
	model: string;
	year: number;
	ownerId: string;
}>;

export type Owner = OptionalId<{
	name: string;
	age: number;
	email: string;
	vehicles: Vehicle[];
}>;

export type VehicleModel = {
	brand: string;
	model: string;
	year: number;
	ownerId: ObjectId;
};

export type OwnerModel = OptionalId<{
	name: string;
	age: number;
	email: string;
	vehicles: ObjectId[];
}>;
