export const Header = ({ children }) => {
	return (
		<header className='w-full sticky top-0 flex justify-center bg-primary z-20'>
			<div className='w-full flex flex-col justify-between'>{children}</div>
		</header>
	);
};
