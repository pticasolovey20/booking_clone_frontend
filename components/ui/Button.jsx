import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md whitespace-nowrap text-sm font-senibold duration-300',

	{
		variants: {
			variant: {
				default: 'text-white bg-[#222222] hover:bg-black',
			},

			size: {
				default: 'rounded-md py-3 px-6',
			},
		},

		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button';
	return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});

Button.displayName = 'Button';

export { Button, buttonVariants };
