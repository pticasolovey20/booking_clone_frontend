export const dropIn = {
	hidden: {
		y: '100vh',
		opacity: 0,
	},

	visible: {
		y: '0',
		opacity: 1,
		transition: {
			duration: 0.1,
			type: 'spring',
			damping: 50,
			stiffness: 500,
		},
	},

	exit: {
		y: '100vh',
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
};
