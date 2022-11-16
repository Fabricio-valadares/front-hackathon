import { api } from "./api";

export const registerPerson = (data: any) => {
	return api.post("/create-user", data);
};

export const loginPerson = (data: any) => {
	return api.post("/login", data);
};