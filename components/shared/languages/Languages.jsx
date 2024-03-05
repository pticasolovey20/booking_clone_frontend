import { cn } from '@/utils';
import { MdOutlineClose } from 'react-icons/md';

export const Languages = ({ handleClose }) => {
	return (
		<div className='flex flex-col w-full h-full'>
			<div className='relative w-full border-b p-5'>
				<button
					type='button'
					aria-label='Close modal'
					onClick={handleClose}
					className='p-1.5 rounded-full hover:bg-secondary duration-300'
				>
					<MdOutlineClose size={20} />
				</button>
			</div>

			<div
				className={cn(
					'flex-1 w-full p-6',
					'flex flex-col items-center',
					'select-none overflow-y-scroll'
				)}
			>
				<span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ultricies
					interdum. Quisque aliquet arcu nec laoreet gravida. Nam non eros varius, placerat urna
					eleifend, dapibus justo. Pellentesque pellentesque, erat vel tincidunt laoreet, neque
					metus lobortis nisi, nec pellentesque enim ante hendrerit felis. Mauris lacinia euismod
					tincidunt. Nunc tristique diam convallis, ultrices nisi eget, gravida dui. Sed enim urna,
					commodo in libero tempus, facilisis commodo orci. Nulla in urna eget justo tempor maximus
					vitae in velit. Maecenas sagittis aliquet tortor et pharetra. Vivamus metus nulla,
					accumsan eu quam vitae, elementum congue velit. Curabitur ut lobortis eros. In sed feugiat
					metus. Quisque imperdiet, leo sollicitudin porta condimentum, nisi enim varius lacus, at
					cursus arcu leo a sapien. Vivamus scelerisque id tortor a lobortis. Nunc quis pharetra
					metus, at egestas nibh. Praesent volutpat nibh facilisis, interdum arcu vitae, vestibulum
					libero. Duis pharetra enim quis sapien dapibus mollis. Etiam vel arcu interdum, facilisis
					justo sit amet, maximus orci. Sed et odio condimentum, efficitur leo nec, tempor diam. Sed
					placerat mauris vitae arcu aliquam tempor. In dapibus nec sapien tempus dapibus. In vel
					magna tincidunt, fermentum ante in, fermentum magna. In mollis euismod leo, eu elementum
					diam lobortis id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
					inceptos himenaeos. Praesent mattis nulla in ligula egestas, ac pulvinar nulla
					convallis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt
					ultricies interdum. Quisque aliquet arcu nec laoreet gravida. Nam non eros varius,
					placerat urna eleifend, dapibus justo. Pellentesque pellentesque, erat vel tincidunt
					laoreet, neque metus lobortis nisi, nec pellentesque enim ante hendrerit felis. Mauris
					lacinia euismod tincidunt. Nunc tristique diam convallis, ultrices nisi eget, gravida dui.
					Sed enim urna, commodo in libero tempus, facilisis commodo orci. Nulla in urna eget justo
					tempor maximus vitae in velit. Maecenas sagittis aliquet tortor et pharetra. Vivamus metus
					nulla, accumsan eu quam vitae, elementum congue velit. Curabitur ut lobortis eros. In sed
					feugiat metus. Quisque imperdiet, leo sollicitudin porta condimentum, nisi enim varius
					lacus, at cursus arcu leo a sapien. Vivamus scelerisque id tortor a lobortis. Nunc quis
					pharetra metus, at egestas nibh. Praesent volutpat nibh facilisis, interdum arcu vitae,
					vestibulum libero. Duis pharetra enim quis sapien dapibus mollis. Etiam vel arcu interdum,
					facilisis justo sit amet, maximus orci. Sed et odio condimentum, efficitur leo nec, tempor
					diam. Sed placerat mauris vitae arcu aliquam tempor. In dapibus nec sapien tempus dapibus.
					In vel magna tincidunt, fermentum ante in, fermentum magna. In mollis euismod leo, eu
					elementum diam lobortis id. Class aptent taciti sociosqu ad litora torquent per conubia
					nostra, per inceptos himenaeos. Praesent mattis nulla in ligula egestas, ac pulvinar nulla
					convallis.
				</span>
			</div>
		</div>
	);
};
