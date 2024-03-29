import { Heading } from '@/components/ui';
import Table from '@/components/ui/table/Table';
import { mockData } from '@/data/mock';

export default function AllRequests() {
	const requests = mockData.filter((elem) => elem.requests);
	return (
		<div>
			<Heading text={`The list of all users requests`} />
			<div className='rounded-lg border p-2 shadow-sm'>
				<div className='relative w-full overflow-auto'>
					{/* {requests ? <Table requests={requests} /> : <span>No data yet</span>} */}
				</div>
			</div>
		</div>
	);
}
