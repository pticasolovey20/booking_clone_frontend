import { PhoneForm } from '@/components/shared/auth/forms/PhoneForm';
import Image from 'next/image';

export const PhoneStep = ({ handleNextStep }) => {
	return (
		<div className='w-full flex flex-col gap-4'>
			<div className='flex flex-col gap-2'>
				<h3 className='text-2xl font-medium mb-4'>Welcome to Airbnb</h3>
				<PhoneForm handleNextStep={handleNextStep} />
			</div>

			<div className='flex items-center gap-4'>
				<div className='h-px w-full bg-tertiary' />
				<span className='text-sm'>or</span>
				<div className='h-px w-full bg-tertiary' />
			</div>

			<div className='flex flex-col gap-4 text-sm font-medium'>
				<button type='button' className='relative w-full px-6 py-3 rounded-lg border border-black'>
					<Image
						src='/svg/facebook.svg'
						alt='facebook'
						height={20}
						width={20}
						className='absolute left-6'
					/>
					Continue with Facebook
				</button>

				<button type='button' className='relative w-full px-6 py-3 rounded-lg border border-black'>
					<Image
						src='/svg/google.svg'
						alt='google'
						height={20}
						width={20}
						className='absolute left-6'
					/>
					Continue with Google
				</button>

				<button type='button' className='relative w-full px-6 py-3 rounded-lg border border-black'>
					<Image
						src='/svg/apple.svg'
						alt='apple'
						height={20}
						width={20}
						className='absolute left-6'
					/>
					Continue with Apple
				</button>

				<button type='button' className='relative w-full px-6 py-3 rounded-lg border border-black'>
					<Image
						src='/svg/email.svg'
						alt='email'
						height={20}
						width={20}
						className='absolute left-6'
					/>
					Continue with email
				</button>
			</div>
		</div>
	);
};
