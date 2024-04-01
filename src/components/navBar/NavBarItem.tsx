'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import styles from './navbar.module.scss';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

type NavBarItemProps = {
	link: string;
	itemName: string;
};
export default function NavBarItem({ link, itemName }: NavBarItemProps) {
	const pathname = usePathname();
	const { id } = useParams();
	const [route, setRoute] = useState<string>('');

	useEffect(() => {
		if (itemName === 'All requests') {
			setRoute(link);
		} else {
			if (id === 'undefined' || !id) {
				const isIdExist = sessionStorage.getItem('currentId');
				if (isIdExist) {
					setRoute(`/${isIdExist}${link}`);
				} else {
					setRoute(`/${uuidv4()}${link}`);
					sessionStorage.setItem('currentId', uuidv4());
				}
			} else {
				setRoute(`/${id}${link}`);
				sessionStorage.setItem('currentId', id as string);
			}
		}
	}, []);

	return (
		<a
			href={route}
			className={cn(styles.item, {
				[styles.active]: pathname.includes(link),
			})}
		>
			<span className='ms-3'>{itemName}</span>
		</a>
	);
}
