export type UserRequests = {
	userId: string;
	requests: Request[];
};

export enum ParcelType {
	GADGETS = 'GADGETS',
	DRINKS = 'DRINKS',
	CLOTHES = 'CLOTHES',
	MEDCINES = 'MEDCINES',
	OTHER = 'OTHER',
}

export enum RequestType {
	ORDER = 'ORDER',
	DELIVERY = 'DELIVERY',
}

export type Request = {
	id: string;
	type: RequestType;
	cityFrom: string;
	cityTo: string;
	parcelType?: ParcelType;
	dateDispatch: number;
	description?: string;
	createdAt: number;
};
