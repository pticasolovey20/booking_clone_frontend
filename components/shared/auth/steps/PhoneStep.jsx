import { PhoneForm } from '@/components/shared/auth/forms/PhoneForm';

export const PhoneStep = ({ handleNextStep }) => {
	return (
		<div className='w-full flex flex-col gap-2'>
			<div className='flex flex-col gap-2'>
				<h3 className='text-2xl font-medium mb-4'>Welcome to Airbnb</h3>
				<PhoneForm handleNextStep={handleNextStep} />
			</div>

			<div className='flex items-center gap-4'>
				<div className='h-px w-full bg-tertiary' />
				<span className='text-sm'>or</span>
				<div className='h-px w-full bg-tertiary' />
			</div>

			<div className='flex flex-col gap-4'>
				<button type='button' className='w-full text-sm font py-3 rounded-lg border border-black'>
					Continue with Facebook
				</button>

				<button type='button' className='w-full text-sm font py-3 rounded-lg border border-black'>
					Continue with Google
				</button>

				<button type='button' className='w-full text-sm font py-3 rounded-lg border border-black'>
					Continue with Apple
				</button>

				<button type='button' className='w-full text-sm font py-3 rounded-lg border border-black'>
					Continue with email
				</button>
			</div>
		</div>
	);
};
