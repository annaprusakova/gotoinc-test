import { columnNames } from '@/data/columnsName';
import Column from './Column';

export default function Table() {
	return (
		<table className='w-full caption-bottom text-sm'>
			<thead className='[&amp;_tr]:border-b'>
				<tr className='hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors'>
					{columnNames.map((columnName, index) => (
						<Column key={index} name={columnName} />
					))}
				</tr>
			</thead>
			<tbody className='[&amp;_tr:last-child]:border-0'>
				<tr className='hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors'>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle font-medium'>
						#3210
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
						Olivia Martin
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle md:table-cell'>
						Online Store
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle md:table-cell'>
						February 20, 2022
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 text-right align-middle'>
						$42.25
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle sm:table-cell'>
						Shipped
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 text-right align-middle'>
						<button
							className='inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
							type='button'
							id='radix-:r16:'
							aria-haspopup='menu'
							aria-expanded='false'
							data-state='closed'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								className='h-4 w-4'
							>
								<circle cx='12' cy='12' r='1'></circle>
								<circle cx='19' cy='12' r='1'></circle>
								<circle cx='5' cy='12' r='1'></circle>
							</svg>
							<span className='sr-only'>Actions</span>
						</button>
					</td>
				</tr>
				<tr className='hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors'>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle font-medium'>
						#3209
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
						Ava Johnson
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle md:table-cell'>
						Shop
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle md:table-cell'>
						January 5, 2022
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 text-right align-middle'>
						$74.99
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle sm:table-cell'>
						Paid
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 text-right align-middle'>
						<button
							className='inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
							type='button'
							id='radix-:r18:'
							aria-haspopup='menu'
							aria-expanded='false'
							data-state='closed'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								className='h-4 w-4'
							>
								<circle cx='12' cy='12' r='1'></circle>
								<circle cx='19' cy='12' r='1'></circle>
								<circle cx='5' cy='12' r='1'></circle>
							</svg>
							<span className='sr-only'>Actions</span>
						</button>
					</td>
				</tr>
				<tr className='hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors'>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle font-medium'>
						#3204
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
						Michael Johnson
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle md:table-cell'>
						Shop
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle md:table-cell'>
						August 3, 2021
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 text-right align-middle'>
						$64.75
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle sm:table-cell'>
						Unfulfilled
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 text-right align-middle'>
						<button
							className='inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
							type='button'
							id='radix-:r1a:'
							aria-haspopup='menu'
							aria-expanded='false'
							data-state='closed'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								className='h-4 w-4'
							>
								<circle cx='12' cy='12' r='1'></circle>
								<circle cx='19' cy='12' r='1'></circle>
								<circle cx='5' cy='12' r='1'></circle>
							</svg>
							<span className='sr-only'>Actions</span>
						</button>
					</td>
				</tr>
				<tr className='hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors'>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle font-medium'>
						#3203
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
						Lisa Anderson
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle md:table-cell'>
						Online Store
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle md:table-cell'>
						July 15, 2021
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 text-right align-middle'>
						$34.50
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle sm:table-cell'>
						Shipped
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 text-right align-middle'>
						<button
							className='inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
							type='button'
							id='radix-:r1c:'
							aria-haspopup='menu'
							aria-expanded='false'
							data-state='closed'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								className='h-4 w-4'
							>
								<circle cx='12' cy='12' r='1'></circle>
								<circle cx='19' cy='12' r='1'></circle>
								<circle cx='5' cy='12' r='1'></circle>
							</svg>
							<span className='sr-only'>Actions</span>
						</button>
					</td>
				</tr>
				<tr className='hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors'>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle font-medium'>
						#3202
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
						Samantha Green
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle md:table-cell'>
						Shop
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle md:table-cell'>
						June 5, 2021
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 text-right align-middle'>
						$89.99
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle sm:table-cell'>
						Paid
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 text-right align-middle'>
						<button
							className='inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
							type='button'
							id='radix-:r1e:'
							aria-haspopup='menu'
							aria-expanded='false'
							data-state='closed'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								className='h-4 w-4'
							>
								<circle cx='12' cy='12' r='1'></circle>
								<circle cx='19' cy='12' r='1'></circle>
								<circle cx='5' cy='12' r='1'></circle>
							</svg>
							<span className='sr-only'>Actions</span>
						</button>
					</td>
				</tr>
				<tr className='hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors'>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle font-medium'>
						#3201
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
						Adam Barlow
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle md:table-cell'>
						Online Store
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle md:table-cell'>
						May 20, 2021
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 text-right align-middle'>
						$24.99
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle sm:table-cell'>
						Unfulfilled
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 text-right align-middle'>
						<button
							className='inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
							type='button'
							id='radix-:r1g:'
							aria-haspopup='menu'
							aria-expanded='false'
							data-state='closed'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								className='h-4 w-4'
							>
								<circle cx='12' cy='12' r='1'></circle>
								<circle cx='19' cy='12' r='1'></circle>
								<circle cx='5' cy='12' r='1'></circle>
							</svg>
							<span className='sr-only'>Actions</span>
						</button>
					</td>
				</tr>
				<tr className='hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors'>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle font-medium'>
						#3207
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
						Sophia Anderson
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle md:table-cell'>
						Shop
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle md:table-cell'>
						November 2, 2021
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 text-right align-middle'>
						$99.99
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle sm:table-cell'>
						Paid
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 text-right align-middle'>
						<button
							className='inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
							type='button'
							id='radix-:r1i:'
							aria-haspopup='menu'
							aria-expanded='false'
							data-state='closed'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								className='h-4 w-4'
							>
								<circle cx='12' cy='12' r='1'></circle>
								<circle cx='19' cy='12' r='1'></circle>
								<circle cx='5' cy='12' r='1'></circle>
							</svg>
							<span className='sr-only'>Actions</span>
						</button>
					</td>
				</tr>
				<tr className='hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors'>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle font-medium'>
						#3206
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle'>
						Daniel Smith
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle md:table-cell'>
						Online Store
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle md:table-cell'>
						October 7, 2021
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 text-right align-middle'>
						$67.50
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 hidden p-4 align-middle sm:table-cell'>
						Shipped
					</td>
					<td className='[&amp;:has([role=checkbox])]:pr-0 p-4 text-right align-middle'>
						<button
							className='inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
							type='button'
							id='radix-:r1k:'
							aria-haspopup='menu'
							aria-expanded='false'
							data-state='closed'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
								className='h-4 w-4'
							>
								<circle cx='12' cy='12' r='1'></circle>
								<circle cx='19' cy='12' r='1'></circle>
								<circle cx='5' cy='12' r='1'></circle>
							</svg>
							<span className='sr-only'>Actions</span>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
