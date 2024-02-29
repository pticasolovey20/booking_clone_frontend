export const Header = ({ children }) => {
	return (
		<header className='sticky top-0 w-full flex justify-center bg-primary z-20'>
			<div className='w-full flex flex-col justify-between'>{children}</div>
		</header>
	);
};
