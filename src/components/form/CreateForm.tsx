'use client';

import { ParcelType, Request, RequestType } from '@/dto/userRequests';
import { useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form';

type CreateFromProps = {
	type: RequestType;
	onSubmit: (data: Request) => void;
};

export default function CreateForm({ type, onSubmit }: CreateFromProps) {
	const [formData, setFormData] = useState<Request>({
		id: uuidv4(),
		type: type,
		cityFrom: '',
		cityTo: '',
		parcelType: ParcelType.GADGETS,
		dateDispatch: moment(new Date()).unix(),
		description: '',
		createdAt: 0,
	});

	return (
		<Form
			formData={formData}
			setFormData={setFormData}
			type={type}
			onSubmit={onSubmit}
			buttonText={'create'}
		/>
	);
}
