'use client';

import { cn } from '@/utils';

import { CategoryList } from '@/components/shared/categories/CategoryList';
import { FilterButton } from '@/components/shared/filters/FilterButton';
import { Switch } from '@/components/ui/switch';

export const CategoryBar = () => {
	const handleCheck = (prev) => console.log(`cheked: ${prev}`);

	return (
		<div className='h-20 w-full px-6 md:px-8 xxl:px-20 flex items-center justify-between gap-6 shadow-md'>
			<CategoryList />

			<div className='hidden md:flex shrink-0 items-center gap-4 text-[12px] font-semibold'>
				<FilterButton />

				<div
					className={cn(
						'h-12 flex items-center justify-between gap-2 py-3 px-4',
						'rounded-xl border border-border cursor-pointer'
					)}
				>
					<span>Display total before taxes</span>
					<Switch onCheckedChange={handleCheck} />
				</div>
			</div>
		</div>
	);
};
