'use client';

import { Button, DatePicker, Input, Select, TextArea } from '../ui/index';

export default function CreateForm() {
	return (
		<form className='flex flex-col justify-between'>
			<Input label={'City from'} value={'City'} placeholder='City from' />
			<Input label={'City to'} value={'City'} placeholder='City to' />
			<Select label={'Type of parcel'} options={['a', 'b']} />
			<DatePicker />
			{/* <TextArea label='Description' value='' placeholder='Parcel description' /> */}
			<Button text={'Create'} />
		</form>
	);
}
