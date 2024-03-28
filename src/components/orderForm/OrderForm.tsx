'use client';

import Input from '../ui/input/Input';
import Select from '../ui/select/Select';
import TextArea from '../ui/textarea/Textarea';

export default function OrderForm() {
	return (
		<form className='flex flex-col'>
			<Input label={'City from'} value={'City'} placeholder='City from' />
			<Input label={'City to'} value={'City'} placeholder='City to' />
			<Select label={'Type of parcel'} options={['a', 'b']} />
			<div>date picker</div>
			<TextArea label='Description' value='' placeholder='Parcel description' />
		</form>
	);
}
