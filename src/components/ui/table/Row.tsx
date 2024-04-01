import { Request } from '@/dto/userRequests';
import styles from './table.module.scss';
import moment from 'moment';
import ActionMenu from './ActionMenu';
import { useState } from 'react';
import Modal from '../modal/Modal';
import EditForm from '@/components/form/EditForm';
import { deleteRequest, editRequest } from '@/lib/features/requestSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'next/navigation';

type RowProps = {
	rowData: Request;
	isAllUsersRequests: boolean;
};
export default function Row({ rowData, isAllUsersRequests }: RowProps) {
	const { userId } = useParams();

	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [isDelete, setIsDelete] = useState<boolean>(false);
	const dispatch = useDispatch();
	const {
		cityFrom,
		cityTo,
		parcelType: type,
		dateDispatch: dateOfDispatch,
		description,
		createdAt,
	} = rowData;

	const handleEditData = (newData: Request) => {
		dispatch(
			editRequest({
				newData,
				userId: userId as string,
				requestId: rowData.id,
			})
		);
		setIsEdit(false);
	};

	const handleDeleteData = () => {
		dispatch(
			deleteRequest({ userId: userId as string, requestId: rowData.id })
		);
		setIsDelete(false);
	};
	return (
		<>
			<tr className={styles.tr}>
				<td className={styles.td}>{cityFrom}</td>
				<td className={styles.td}>{cityTo}</td>
				<td className={styles.td}>{type}</td>
				<td className={styles.td}>
					{moment.unix(dateOfDispatch).format('MM/DD/YYYY')}
				</td>
				<td className={styles.td}>{description}</td>
				<td className={styles.td}>
					{moment.unix(createdAt).format('MM/DD/YYYY')}
				</td>
				{!isAllUsersRequests && (
					<td className={styles.td}>
						<ActionMenu setIsEdit={setIsEdit} setIsDelete={setIsDelete} />
					</td>
				)}
			</tr>
			<Modal isOpen={isEdit} closeModal={() => setIsEdit(false)}>
				<EditForm
					type={rowData.type}
					onSubmit={handleEditData}
					data={rowData}
				/>
			</Modal>
			<Modal isOpen={isDelete} closeModal={() => setIsDelete(false)}>
				<div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
					<div className='sm:flex sm:items-start'>
						<p className='text-sm text-gray-500'>
							Are you sure you want to delete this request?
						</p>
					</div>
				</div>
				<div className='px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
					<button className={styles.deleteButton} onClick={handleDeleteData}>
						Delete
					</button>
					<button
						className={styles.cancelButton}
						onClick={() => setIsDelete(false)}
					>
						Cancel
					</button>
				</div>
			</Modal>
		</>
	);
}
