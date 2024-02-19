'use client';

import { useParams } from 'next/navigation';
import { ROOMS } from '@/constants';

import { Gallery } from '@/components/shared/Gallery';

const RoomDetailsPage = () => {
	const { id } = useParams();
	const currentRoom = ROOMS.find((place) => place.id === parseInt(id));

	return (
		<div className='w-full max-w-[1200px] flex flex-col md:gap-4 md:px-8 xxl:px-20'>
			<Gallery galleryImages={currentRoom?.galleryImages} />

			<div className='w-full h-[300px] px-8 md:px-0'>
				<h1 className='text-4xl font-semibold'>DESCRIPTION SECTION</h1>
			</div>
		</div>
	);
};

export default RoomDetailsPage;
