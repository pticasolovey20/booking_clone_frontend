import { cn } from '@/utils';

import Link from 'next/link';

import { FiGlobe } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const supportingLinks = [
	{
		id: 1,
		title: 'Support',
		items: [
			{ id: 1, content: 'Help Center' },
			{ id: 2, content: 'AirCover' },
			{ id: 3, content: 'Anti-discrimination' },
			{ id: 4, content: 'Disability support' },
			{ id: 5, content: 'Cancellation options' },
			{ id: 6, content: 'Report neighborhood concern' },
		],
	},
	{
		id: 2,
		title: 'Hosting',
		items: [
			{ id: 1, content: 'Airbnb your home' },
			{ id: 2, content: 'AirCover for Hosts' },
			{ id: 3, content: 'Hosting resources' },
			{ id: 4, content: 'Community forum' },
			{ id: 5, content: 'Hosting responsibly' },
			{ id: 6, content: 'Airbnb-friendly apartments' },
		],
	},
	{
		id: 3,
		title: 'Airbnb',
		items: [
			{ id: 1, content: 'Newsroom' },
			{ id: 2, content: 'New features' },
			{ id: 3, content: 'Careers' },
			{ id: 4, content: 'Investors' },
			{ id: 5, content: 'Gift cards' },
			{ id: 6, content: 'Airbnb.org emergency stays' },
		],
	},
];

const footerLinks = [
	{ id: 1, content: `© ${new Date().getFullYear()} Airbnb, Inc.` },
	{ id: 2, content: 'Terms' },
	{ id: 3, content: 'Sitemap' },
	{ id: 4, content: 'Privacy' },
	{ id: 5, content: 'Your Privacy Choices' },
];

const socials = [
	{ id: 1, icon: <FaFacebookSquare size={20} /> },
	{ id: 2, icon: <FaTwitterSquare size={20} /> },
	{ id: 3, icon: <FaInstagramSquare size={20} /> },
];

export const Footer = ({ styles }) => {
	return (
		<footer className='w-full flex justify-center bg-[#F7F7F7]'>
			<div className={cn(styles, 'w-full flex flex-col items-center px-8')}>
				<div className='w-full flex flex-col lg:flex-row items-center justify-between border-b border-gray-200'>
					{supportingLinks.map(({ id, title, items }) => (
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

							{id !== supportingLinks.length && (
								<div className='lg:hidden w-full h-px bg-gray-300' />
							)}
						</div>
					))}
				</div>

				<div
					className={cn(
						'w-full py-6',
						'flex flex-col-reverse lg:flex-row',
						'justify-between items-start md:items-center gap-2'
					)}
				>
					<ul className='flex flex-wrap gap-2'>
						{footerLinks.map(({ id, content }) => (
							<li key={id} className='flex items-center gap-2'>
								<Link href='/' className='text-sm hover:underline'>
									{content}
								</Link>

								{id !== footerLinks.length && (
									<div className='h-[2px] w-[2px] rounded-full bg-black' />
								)}
							</li>
						))}
					</ul>

					<div className='flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-sm font-semibold'>
						<div className='flex items-center gap-2'>
							<Link href='/' className='flex items-center gap-1 hover:underline'>
								<FiGlobe />
								<span>English (US)</span>
							</Link>

							<Link href='/' className='flex items-center hover:underline'>
								<BsCurrencyDollar />
								<span>USD</span>
							</Link>
						</div>

						<ul className='flex flex-wrap gap-3'>
							{socials.map(({ id, icon }) => (
								<li key={id}>
									<Link href='/'>{icon}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};
