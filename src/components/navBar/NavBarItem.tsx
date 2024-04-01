'use client';

import { useParams, usePathname } from 'next/navigation';
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
	const { userId } = useParams();
	const [route, setRoute] = useState<string>('');

	useEffect(() => {
		if (itemName === 'All requests') {
			setRoute(link);
		} else {
			if (userId === 'undefined' || !userId) {
				const isIdExist = sessionStorage.getItem('currentId');
				if (isIdExist) {
					setRoute(`/${isIdExist}${link}`);
				} else {
					setRoute(`/${uuidv4()}${link}`);
					sessionStorage.setItem('currentId', uuidv4());
				}
			} else {
				setRoute(`/${userId}${link}`);
				sessionStorage.setItem('currentId', userId as string);
			}
		}
	}, []);

	return (
		<a
			href={route}
			className={cn(styles.item, {
				[styles.active]: pathname === route,
			})}
		>
			<span className='ms-3'>{itemName}</span>
		</a>
	);
}
