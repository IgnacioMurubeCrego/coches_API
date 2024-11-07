import { Db, MongoClient } from "mongodb";
import { OwnerModel, VehicleModel } from "./types.ts";

// Replace the uri string with your connection string.
const MONGO_URL = Deno.env.get("MONGO_URL");
if (!MONGO_URL) {
	console.error("MONGO_URL not provided");
	Deno.exit(-1);
}

const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("Connected to MongoDB (￣︶￣*))");
const db = client.db("vehiculos");
const OwnersCollection = db.collection<OwnerModel>("Owners");
const VehiclesCollection = db.collection<VehicleModel>("Vehicles");

const handler = (req: Request): Response => {
	const method = req.method;
	const url = new URL(req.url);
	const path = url.pathname;
	const searchParams = url.searchParams;

	if (method === "GET") {
		if (path === "/owners") {
		} else if (path === "/owner") {
		} else if (path === "/vehicles") {
		} else if (path === "/vehicle") {
		} else {
			return new Response(`Path : ${path} not found for GET method`, {
				status: 404,
			});
		}
	} else if (method === "POST") {
		if (path === "/owner") {
		} else if (path === "/vehicle") {
		} else {
			return new Response(`Path : ${path} not found for POST method`, {
				status: 404,
			});
		}
	} else if (method === "PUT") {
		if (path === "/owner") {
		} else if (path === "/vehicle") {
		} else {
			return new Response(`Path : ${path} not found for PUT method`, {
				status: 404,
			});
		}
	} else if (method === "DELETE") {
		if (path === "/owner") {
		} else if (path === "/vehicle") {
		} else {
			return new Response(`Path : ${path} not found for DELETE method`, {
				status: 404,
			});
		}
	}
};
