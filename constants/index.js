import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

//categories
export const categories = [
	{ id: 1, source: '/categories/trending.jpg', alt: 'trending' },
	{ id: 2, source: '/categories/islands.jpg', alt: 'islands' },
	{ id: 3, source: '/categories/arctic.jpg', alt: 'arctic' },
	{ id: 4, source: '/categories/windmills.jpg', alt: 'windmills' },
	{ id: 5, source: '/categories/tropical.jpg', alt: 'tropical' },
	{ id: 6, source: '/categories/campers.jpg', alt: 'campers' },
	{ id: 7, source: '/categories/cabins.jpg', alt: 'cabins' },
	{ id: 8, source: '/categories/omg.jpg', alt: 'omg' },
	{ id: 9, source: '/categories/surfing.jpg', alt: 'surfing' },
	{ id: 10, source: '/categories/amazing_pools.jpg', alt: 'amazing_pools' },
	{ id: 11, source: '/categories/design.jpg', alt: 'design' },
	{ id: 12, source: '/categories/national_parks.jpg', alt: 'national_parks' },
	{ id: 13, source: '/categories/amazing_views.jpg', alt: 'amazing_views' },
	{ id: 14, source: '/categories/caves.jpg', alt: 'caves' },
	{ id: 15, source: '/categories/beach.jpg', alt: 'beach' },
	{ id: 16, source: '/categories/tiny_homes.jpg', alt: 'tiny_homes' },
];

//footer
export const supportLinks = [
	{
		id: 1,
		title: 'Support',
		items: [
			{ id: 1, content: 'Help Center' },
			{ id: 2, content: 'AirCover' },
			{ id: 3, content: 'Anti-discrimination' },
			{ id: 4, content: 'Disability support' },
			{ id: 5, content: 'Cancellation options' },
			{ id: 6, content: 'Report neighborhood concern' },
		],
	},
	{
		id: 2,
		title: 'Hosting',
		items: [
			{ id: 1, content: 'Airbnb your home' },
			{ id: 2, content: 'AirCover for Hosts' },
			{ id: 3, content: 'Hosting resources' },
			{ id: 4, content: 'Community forum' },
			{ id: 5, content: 'Hosting responsibly' },
			{ id: 6, content: 'Airbnb-friendly apartments' },
		],
	},
	{
		id: 3,
		title: 'Airbnb',
		items: [
			{ id: 1, content: 'Newsroom' },
			{ id: 2, content: 'New features' },
			{ id: 3, content: 'Careers' },
			{ id: 4, content: 'Investors' },
			{ id: 5, content: 'Gift cards' },
			{ id: 6, content: 'Airbnb.org emergency stays' },
		],
	},
];

export const footerLinks = [
	{ id: 1, content: `© ${new Date().getFullYear()} Airbnb, Inc.` },
	{ id: 2, content: 'Terms' },
	{ id: 3, content: 'Sitemap' },
	{ id: 4, content: 'Privacy' },
	{ id: 5, content: 'Your Privacy Choices' },
];

export const socials = [
	{ id: 1, ariaLabel: 'Redirect to Facebook', icon: <FaFacebookSquare size={20} /> },
	{ id: 2, ariaLabel: 'Redirect to Twitter', icon: <FaTwitterSquare size={20} /> },
	{ id: 3, ariaLabel: 'Redirect to Instagram', icon: <FaInstagramSquare size={20} /> },
];
