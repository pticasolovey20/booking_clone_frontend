import { cn } from '@/utils';

export const Button = ({ label, onClick, styles }) => {
	return (
		<button type='button' onClick={onClick} className={cn(styles)}>
			{label}
		</button>
	);
};
