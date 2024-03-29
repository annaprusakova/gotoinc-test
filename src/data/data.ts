export type UserRequests = {
	userId: number;
	requests: Request[];
};

export enum Type {
	GADGETS,
	DRINKS,
	CLOTHES,
	MEDCINES,
	OTHER,
}
type Request = {
	id: number;
	cityFrom: string;
	cityTo: string;
	type: Type;
	dateOfDispatch: string;
	discription: string;
	createdAT: string;
};
