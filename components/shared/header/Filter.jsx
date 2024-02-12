import { cn } from '@/utils';

import { LuSettings2 } from 'react-icons/lu';

export const Filter = () => {
	return (
		<div
			className={cn(
				'h-12 flex items-center gap-2 py-3 px-4',
				'rounded-xl border border-gray-300 cursor-pointer'
			)}
		>
			<LuSettings2 size={20} strokeWidth={3} />
			<span>Filters</span>
		</div>
	);
};
