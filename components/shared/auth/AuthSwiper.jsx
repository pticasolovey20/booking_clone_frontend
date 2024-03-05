'use client';

import { useState } from 'react';
import { cn } from '@/utils';

import { MdOutlineChevronLeft, MdOutlineClose } from 'react-icons/md';

import { PhoneStep } from '@/components/shared/auth/steps/PhoneStep';
import { PhoneVerificationStep } from '@/components/shared/auth/steps/PhoneVerificationStep';
import { BasicInformationStep } from '@/components/shared/auth/steps/BasicInformationStep';

const steps = [
	{ id: 1, component: <PhoneStep /> },
	{ id: 2, component: <PhoneVerificationStep /> },
	{ id: 3, component: <BasicInformationStep /> },
];

const Wrapper = (Component, props) => {
	// eslint-disable-next-line react/display-name
	return () => <Component {...props} />;
};

export const AuthSwiper = ({ handleClose }) => {
	const [currentStep, setCurrentStep] = useState(1);

	const handlePrevStep = () => {
		setCurrentStep((prev) => (prev > 1 ? prev - 1 : 1));
	};

	const handleNextStep = () => {
		setCurrentStep((prev) => (prev < steps.length ? prev + 1 : handleClose()));
	};

	return (
		<div className='flex flex-col w-full h-full overflow-y-scroll'>
			<div className='relative w-full border-b p-5'>
				{currentStep !== 1 ? (
					<button
						type='button'
						aria-label='Go back'
						onClick={handlePrevStep}
						className='p-1.5 rounded-full hover:bg-secondary duration-300'
					>
						<MdOutlineChevronLeft size={20} />
					</button>
				) : (
					<button
						type='button'
						aria-label='Close modal'
						onClick={handleClose}
						className='p-1.5 rounded-full hover:bg-secondary duration-300'
					>
						<MdOutlineClose size={20} />
					</button>
				)}

				<h3
					className={cn(
						'absolute right-1/2 top-1/2',
						'translate-x-1/2 -translate-y-1/2',
						'font-bold select-none'
					)}
				>
					Log in or sign up
				</h3>
			</div>

			<div
				className={cn(
					'flex-1 w-full p-6',
					'flex flex-col items-center',
					'select-none overflow-auto'
				)}
			>
				<div className='w-full h-full'>
					{steps.map(({ id, component }) => {
						const WrappedComponent = Wrapper(component.type, { handleNextStep });

						return (
							<div
								key={id}
								className={cn(id === currentStep ? 'block' : 'hidden', 'w-full h-full')}
							>
								<WrappedComponent />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
