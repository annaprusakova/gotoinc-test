'use client';

import moment from 'moment';
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
		text: 'text-gray-900 dark:text-gray-900',
		disabledText: 'text-gray-900 dark:text-gray-900',
		input: 'bg-gray-50 text-gray-900 dark:bg-gray-50 dark:text-gray-900',
		inputIcon: 'dark:bg-gray-50 dark:text-gray-900',
		selected: 'dark:red',
	},
	icons: {
		prev: () => <span>{'<'}</span>,
		next: () => <span>{'>'}</span>,
	},
	datepickerClassNames: 'top-12',
	language: 'en',
	disabledDates: [],
	weekDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
	inputNameProp: 'date',
	inputIdProp: 'date',
	inputPlaceholderProp: 'Select Date',
};

type DatePickerProps = {
	label: string;
	value: number;
	onChange: (value: number) => void;
};

export function DatePicker({ label, onChange, value }: DatePickerProps) {
	const [show, setShow] = useState<boolean>(false);

	const handleChange = (selectedDate: Date) => {
		onChange(moment(selectedDate).unix());
	};

	const handleClose = (state: boolean) => {
		setShow(state);
	};

	return (
		<div className={'mb-6'}>
			<label className={'mb-2 block text-sm font-medium'}>{label}</label>
			<Datepicker
				options={options}
				onChange={handleChange}
				show={show}
				value={moment.unix(value).toDate()}
				setShow={handleClose}
			/>
		</div>
	);
}
