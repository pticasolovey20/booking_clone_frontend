import { cn } from '@/utils';

export const Header = ({ children, styles }) => {
	return (
		<header
			className={cn(
				'w-full fixed top-0 flex justify-center',
				'transition-all duration-300 shadow-md bg-white z-20'
			)}
		>
			<div className={cn(styles, 'w-full flex flex-col justify-between')}>{children}</div>
		</header>
	);
};
