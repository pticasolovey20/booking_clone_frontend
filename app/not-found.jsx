'use client';

import { useEffect } from 'react';
import { cn } from '@/utils';

import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => (document.body.style.overflow = 'unset');
	}, []);

	return (
		<section className='fixed inset-0 w-full flex justify-center items-center bg-primary z-30'>
			<div className='flex max-w-[992px] w-full p-8'>
				<div className='hidden md:flex relative aspect-square basis-[30%] grow shrink'>
					<Image
						fill
						priority
						alt='oops'
						src='https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif'
						className='object-contain'
						sizes='(width:100%), (height:100%)'
					/>
				</div>

				<div className='flex flex-col justify-center basis-[40%] grow shrink gap-4 text-[#484848]'>
					<h1 className='text-6xl font-extrabold'>Oops!</h1>
					<p className='text-2xl'>We can not seem to find the page you are looking for</p>

					<Link
						href='/'
						className={cn(
							'text-center text-white font-semibold',
							'max-w-[200px] py-3 px-6 rounded-lg',
							'bg-[#222222] hover:bg-black duration-300'
						)}
					>
						Back to Home
					</Link>
				</div>
			</div>
		</section>
	);
};

export default NotFoundPage;
