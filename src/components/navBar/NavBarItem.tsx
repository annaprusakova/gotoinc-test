'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import styles from './navbar.module.scss';
import cn from 'classnames';

type NavBarItemProps = {
	link: string;
	itemName: string;
};
export default function NavBarItem({ link, itemName }: NavBarItemProps) {
	const pathname = usePathname();
	const { id } = useParams();
	const route = itemName === 'All requests' ? link : `/${id}${link}`;
	return (
		<li>
			<a
				href={route}
				className={cn(styles.item, {
					[styles.active]: pathname.includes(route),
				})}
			>
				<span className='ms-3'>{itemName}</span>
			</a>
		</li>
	);
}
