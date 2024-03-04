import Link from 'next/link';
import { supportLinks } from '@/constants';

export const SupportLinks = () => {
	return (
		<div className='w-full flex flex-col lg:flex-row items-center justify-between border-b border-separator'>
			{supportLinks.map(({ id, title, items }) => (
				<div key={id} className='w-full flex flex-col'>
					<div className='flex flex-col gap-2 py-8 lg:py-12'>
						<h4 className='text-sm font-semibold'>{title}</h4>

						<ul className='flex flex-col gap-2'>
							{items.map(({ id, content }) => (
								<li key={id}>
									<Link href='/' className='text-sm hover:underline'>
										{content}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{id !== supportLinks.length && <div className='lg:hidden w-full h-px bg-tertiary' />}
				</div>
			))}
		</div>
	);
};
