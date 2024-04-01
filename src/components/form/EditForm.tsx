'use client';

import { Request, RequestType } from '@/dto/userRequests';
import { useState } from 'react';
import Form from './Form';

type CreateFromProps = {
	type: RequestType;
	onSubmit: (data: Request) => void;
	data: Request;
};

export default function EditForm({ type, onSubmit, data }: CreateFromProps) {
	const [formData, setFormData] = useState<Request>(data);

	return (
		<Form
			formData={formData}
			setFormData={setFormData}
			type={type}
			onSubmit={onSubmit}
			buttonText={'update'}
		/>
	);
}
