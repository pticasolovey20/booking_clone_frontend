import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PhoneSchema } from '@/schemas/Auth';

import Link from 'next/link';

export const PhoneForm = ({ handleNextStep }) => {
	const { handleSubmit } = useForm({
		resolver: zodResolver(PhoneSchema),
		mode: 'onTouched',
		defaultValues: {
			country: '',
			phone: '',
		},
	});

	const onSubmit = () => handleNextStep();

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full'>
			<div className='flex flex-col gap-[1px] rounded-lg border border-border'>
				<div className='h-14' />
				<div className='h-px w-full bg-tertiary' />
				<div className='h-14' />
			</div>

			<p className='text-[12px] tracking-tight mt-2'>
				We&#8217;ll call or text you to confirm your number. Standard message and data rates apply.{' '}
				<Link href='/' className='font-semibold underline'>
					Privacy Policy
				</Link>
			</p>

			<button
				type='submit'
				className='w-full text-white font-semibold py-3 my-3 rounded-lg bg-accent'
			>
				Continue
			</button>
		</form>
	);
};
