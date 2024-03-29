import { Type, UserRequests } from './data';

export const mockData: UserRequests = {
	userId: 1,
	requests: [
		{
			id: 0,
			cityFrom: 'Kyiv',
			cityTo: 'Odesa',
			type: Type.GADGETS,
			dateOfDispatch: '20252882',
			discription: 'aaa',
			createdAT: '33333',
		},
		{
			id: 1,
			cityFrom: 'Odesa',
			cityTo: 'Kyiv',
			type: Type.DRINKS,
			dateOfDispatch: '20252882',
			discription: 'a222aa',
			createdAT: '37338',
		},
	],
};
