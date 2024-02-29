'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchRooms } from '@/axios/fetchRooms';

import { CardList } from '@/components/shared/cards/CardList';
import { CardSkeleton } from '@/components/shared/cards/CardSkeleton';
import { Button } from '@/components/ui/button';

const HomePage = () => {
	const { isLoading, data: rooms } = useQuery({
		queryKey: ['rooms'],
		queryFn: () => fetchRooms(),
	});

	return (
		<>
			{!isLoading && !!rooms.length && <CardList rooms={rooms} />}
			{isLoading && <CardSkeleton amount={10} />}

			{!isLoading && !!rooms.length && (
				<div className='w-full flex flex-col items-center justify-center gap-2'>
					<span className='font-semibold text-lg'>
						Continue viewing the category «some category»
					</span>

					<Button className='font-semibold'>Show More</Button>
				</div>
			)}
		</>
	);
};

export default HomePage;
