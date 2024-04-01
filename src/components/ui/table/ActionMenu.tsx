import { Menu } from '@headlessui/react';
import Image from 'next/image';
import styles from './table.module.scss';

type ActionMenuProps = {
	setIsEdit: (value: boolean) => void;
	setIsDelete: (value: boolean) => void;
};
export default function ActionMenu({
	setIsEdit,
	setIsDelete,
}: ActionMenuProps) {
	return (
		<Menu as='div' className='inline-block text-left'>
			<Menu.Button className={styles.menuButton}>
				<Image src='/action.svg' alt='action' width={20} height={20} />
			</Menu.Button>
			<Menu.Items className={styles.menuItem}>
				<div className='px-1 py-1'>
					<Menu.Item>
						<button
							className={styles.itemButton}
							onClick={() => setIsEdit(true)}
						>
							Edit
						</button>
					</Menu.Item>
				</div>
				<div className='px-1 py-1'>
					<Menu.Item>
						<button
							className={styles.itemButton}
							onClick={() => setIsDelete(true)}
						>
							Delete
						</button>
					</Menu.Item>
				</div>
			</Menu.Items>
		</Menu>
	);
}
