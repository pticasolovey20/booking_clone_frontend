import { cn } from '@/utils';

import { CategoryList } from '@/components/shared/categories/CategoryList';
import { Filter } from '@/components/shared/header/Filter';
import { Switcher } from '@/components/ui/Switcher';

export const CategoryBar = () => {
	return (
		<div className='h-20 w-full px-6 md:px-8 xxl:px-20 flex items-center justify-between gap-6'>
			<CategoryList />

			<div className='hidden md:flex shrink-0 items-center gap-4 text-[12px] font-semibold'>
				<Filter />

				<div
					className={cn(
						'h-12 min-w-[240px] flex items-center justify-between gap-2 py-3 px-4',
						'rounded-xl border border-gray-300 cursor-pointer'
					)}
				>
					<span>Display total before taxes</span>

					{/* TO DO: change to real component */}
					<Switcher />
				</div>
			</div>
		</div>
	);
};
