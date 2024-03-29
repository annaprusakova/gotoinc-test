'use client';

import { ParcelType, Request, RequestType } from '@/dto/userRequests';
import { Button, DatePicker, Input, Select, TextArea } from '../ui/index';
import { useId, useState } from 'react';
import moment from 'moment';

type CreateFromProps = {
	type: RequestType;
	onSubmit: (data: Request) => void;
};

export default function CreateForm({ type, onSubmit }: CreateFromProps) {
	const typeOptions = Object.values(ParcelType);
	const [formData, setFormData] = useState<Request>({
		id: useId(),
		type: type,
		cityFrom: '',
		cityTo: '',
		parcelType: ParcelType.GADGETS,
		dateDispatch: moment(new Date()).unix(),
		description: '',
		createdAt: 0,
	});

	const validate = () => {
		if (
			formData.cityFrom === '' ||
			formData.cityTo === '' ||
			formData.description === ''
		) {
			alert('Please fill all fields');
			return false;
		}
		if (formData.dateDispatch < moment(new Date()).unix()) {
			alert('Wrong date');
			return false;
		}
		return true;
	};
	const handleSubmit = (e?: React.FormEvent<HTMLButtonElement>) => {
		e?.preventDefault();
		const isValid = validate();
		if (isValid) {
			onSubmit({ ...formData, createdAt: moment().unix() });
			alert('You are successfully created order!');
			setFormData({
				...formData,
				cityFrom: '',
				cityTo: '',
				parcelType: ParcelType.GADGETS,
				dateDispatch: 0,
				description: '',
			});
		}
	};
	return (
		<form className='flex flex-col justify-between'>
			<Input
				label={'City from'}
				value={formData.cityFrom}
				onChange={(value) => setFormData({ ...formData, cityFrom: value })}
				placeholder='City from'
			/>
			<Input
				label={'City to'}
				value={formData.cityTo}
				onChange={(value) => setFormData({ ...formData, cityTo: value })}
				placeholder='City to'
			/>
			<Select
				label={'Type of parcel'}
				options={typeOptions}
				value={formData.parcelType}
				onChange={(value) => setFormData({ ...formData, parcelType: value })}
			/>
			<DatePicker
				label={'Date'}
				onChange={(value) => setFormData({ ...formData, dateDispatch: value })}
			/>
			<TextArea
				label='Description'
				value={formData.description}
				onChange={(value) => setFormData({ ...formData, description: value })}
				placeholder='Parcel description'
			/>
			<Button text={'Create'} onClick={(e) => handleSubmit(e)} />
		</form>
	);
}
