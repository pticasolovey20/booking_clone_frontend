'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/utils';

const Switch = React.forwardRef(({ className, ...props }, ref) => (
	<SwitchPrimitives.Root
		ref={ref}
		{...props}
		aria-label='Toggle taxes'
		className={cn(
			'peer h-6 w-9 inline-flex shrink-0 items-center',
			'rounded-full border-2 border-transparent transition-colors cursor-pointer',
			'data-[state=checked]:bg-black data-[state=unchecked]:bg-tertiary-foreground',
			className
		)}
	>
		<SwitchPrimitives.Thumb
			className={cn(
				'group block h-5 w-5 rounded-full bg-white transition-transform pointer-events-none',
				'data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0.25'
			)}
		/>
	</SwitchPrimitives.Root>
));

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
