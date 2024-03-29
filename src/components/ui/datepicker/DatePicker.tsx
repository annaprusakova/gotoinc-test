'use client';

import { useState } from 'react';
import Datepicker from 'tailwind-datepicker-react';

const options = {
	title: '',
	autoHide: true,
	todayBtn: false,
	clearBtn: false,
	clearBtnText: 'Clear',
	maxDate: new Date('2030-01-01'),
	minDate: new Date('1950-01-01'),
	theme: {
		background: 'bg-gray-50 dark:bg-gray-50',
		todayBtn: '',
		clearBtn: '',
		icons: 'dark:bg-gray-50 dark:text-gray-900',
		text: 'text-gray-900  dark:text-gray-900',
		disabledText: '',
		input: 'bg-gray-50 text-gray-900 dark:bg-gray-50 dark:text-gray-900',
		inputIcon: 'dark:bg-gray-50',
		selected: 'dark:red',
	},
	icons: {
		prev: () => <span>{'<'}</span>,
		next: () => <span>{'>'}</span>,
	},
	datepickerClassNames: 'top-12',
	defaultDate: new Date(),
	language: 'en',
	disabledDates: [],
	weekDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
	inputNameProp: 'date',
	inputIdProp: 'date',
	inputPlaceholderProp: 'Select Date',
};

export function DatePicker() {
	const [show, setShow] = useState<boolean>(false);
	const handleChange = (selectedDate: Date) => {
		console.log(selectedDate);
	};
	const handleClose = (state: boolean) => {
		setShow(state);
	};
	return (
		<div className={'mb-6'}>
			<Datepicker
				options={options}
				onChange={handleChange}
				show={show}
				setShow={handleClose}
			/>
		</div>
	);
}
