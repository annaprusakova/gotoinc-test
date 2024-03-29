import styles from './header.module.scss';

type HeaderProps = {
	pageTitle: string;
};
export default function Header({ pageTitle }: HeaderProps) {
	return (
		<header className={styles.header}>
			<div className='w-full flex-1'>
				<h1 className='text-lg font-semibold'>{pageTitle}</h1>
			</div>
		</header>
	);
}
