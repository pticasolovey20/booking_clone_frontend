export const Empty = () => {
	return (
		<section className='h-[calc(100vh-350px)] flex justify-center items-center p-8'>
			<div className='flex flex-col gap-2'>
				<h1 className='text-2xl font-extrabold'>Oops! Nohting found</h1>
				<p className='text-2xl'>We can not seem to find the room you are looking for.</p>
				<span className='font-semibold'>Try to change filters</span>
			</div>
		</section>
	);
};
