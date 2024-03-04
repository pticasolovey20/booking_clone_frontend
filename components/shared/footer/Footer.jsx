export const Footer = ({ children }) => {
	return (
		<footer className='w-full flex flex-col items-center bg-secondary'>
			<div className='max-w-[1300px] w-full flex flex-col items-center px-8 xl:px-20'>
				{children}
			</div>
		</footer>
	);
};
