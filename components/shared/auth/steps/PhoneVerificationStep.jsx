export const PhoneVerificationStep = ({ handleNextStep }) => {
	return (
		<div className='w-full flex flex-col justify-end h-[200px]'>
			<button
				onClick={handleNextStep}
				className='w-full text-white font-semibold py-3 my-3 rounded-lg bg-accent'
			>
				Continue
			</button>
		</div>
	);
};
