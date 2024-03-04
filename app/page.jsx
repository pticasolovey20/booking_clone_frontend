'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchRooms } from '@/axios/fetchData';
import { cn } from '@/utils';

import { RoomsList } from '@/components/shared/rooms/RoomsList';
import { RoomSkeleton } from '@/components/shared/rooms/RoomSkeleton';
import { Empty } from '@/components/shared/rooms/Empty';

const HomePage = () => {
	const { isLoading, data: rooms } = useQuery({
		queryKey: ['rooms'],
		queryFn: () => fetchRooms(),
	});

	return (
		<>
			{!isLoading && !!rooms.length && <RoomsList rooms={rooms} />}
			{isLoading && <RoomSkeleton amount={10} />}
			{!isLoading && !rooms?.length && <Empty />}

			{!isLoading && !!rooms.length && (
				<div className='w-full flex flex-col items-center justify-center gap-2'>
					<span className='font-semibold text-lg'>
						Continue viewing the category «some category»
					</span>

					<button
						type='button'
						title='Show More'
						className={cn(
							'text-white font-semibold',
							'py-3 px-6 rounded-lg',
							'bg-[#222222] hover:bg-black duration-300'
						)}
					>
						Show More
					</button>
				</div>
			)}
		</>
	);
};

export default HomePage;
