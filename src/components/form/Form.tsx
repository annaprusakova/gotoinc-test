import { ParcelType, Request, RequestType } from '@/dto/userRequests';
import { Button, DatePicker, Input, Select, TextArea } from '../ui/index';
import moment from 'moment';

type FormProps = {
	formData: Request;
	setFormData: (data: Request) => void;
	type: RequestType;
	onSubmit: (data: Request) => void;
	buttonText: string;
};

export default function Form({
	formData,
	setFormData,
	type,
	onSubmit,
	buttonText,
}: FormProps) {
	const typeOptions = Object.values(ParcelType);

	const validate = () => {
		if (formData.cityFrom === '' || formData.cityTo === '') {
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
			buttonText === 'create' && alert(`You are successfully created order!`);
			setFormData({
				...formData,
				cityFrom: '',
				cityTo: '',
				parcelType: ParcelType.GADGETS,
				dateDispatch: moment(new Date()).unix(),
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
			{type === RequestType.ORDER && formData.parcelType && (
				<Select
					label={'Type of parcel'}
					options={typeOptions}
					value={formData.parcelType}
					onChange={(value) => setFormData({ ...formData, parcelType: value })}
				/>
			)}
			<DatePicker
				label={'Date'}
				onChange={(value) => setFormData({ ...formData, dateDispatch: value })}
			/>
			{type === RequestType.ORDER && formData.description !== undefined && (
				<TextArea
					label='Description'
					value={formData.description}
					onChange={(value) => setFormData({ ...formData, description: value })}
					placeholder='Parcel description'
				/>
			)}
			<Button
				text={buttonText.toUpperCase()}
				onClick={(e) => handleSubmit(e)}
			/>
		</form>
	);
}
