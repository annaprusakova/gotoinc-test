import { ParcelType, RequestType, UserRequests } from '../dto/data';

export const mockData: UserRequests[] = [
	{
		userId: 1,
		requests: [
			{
				id: '99',
				type: RequestType.ORDER,
				cityFrom: 'Kyiv',
				cityTo: 'Odesa',
				parcelType: ParcelType.GADGETS,
				dateDispatch: 20252882,
				description: 'aaa',
				createdAt: 33333,
			},
			{
				id: '77',
				type: RequestType.ORDER,
				cityFrom: 'Odesa',
				cityTo: 'Kyiv',
				parcelType: ParcelType.DRINKS,
				dateDispatch: 20252882,
				description: 'a222aa',
				createdAt: 37338,
			},
		],
	},
	{
		userId: 3,
		requests: [
			{
				id: '55',
				type: RequestType.DELIVERY,
				cityFrom: 'Kyiv',
				cityTo: 'Lviv',
				parcelType: ParcelType.MEDCINES,
				dateDispatch: 20252882,
				description: 'aaa',
				createdAt: 33333,
			},
			{
				id: '44',
				type: RequestType.DELIVERY,
				cityFrom: 'Lviv',
				cityTo: 'Kyiv',
				parcelType: ParcelType.OTHER,
				dateDispatch: 20252882,
				description: 'a222aa',
				createdAt: 37338,
			},
		],
	},
];
