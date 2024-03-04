'use client';

import { useAppContext } from '@/context/AppContext';
import { cn } from '@/utils';

import { LuSettings2 } from 'react-icons/lu';

export const FilterButton = () => {
	const { handleFilterModalOpen } = useAppContext();

	return (
		<button
			aria-label='Toggle filters'
			onClick={handleFilterModalOpen}
			className={cn(
				'h-12 flex items-center gap-2 py-3 px-4',
				'rounded-xl border border-border cursor-pointer'
			)}
		>
			<LuSettings2 size={20} strokeWidth={3} />
			<span>Filters</span>
		</button>
	);
};
