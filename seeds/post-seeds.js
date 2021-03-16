const { Post } = require("../models");

const postdata = [
	{
		title: 'Donec posuere metus vitae ipsum.',
		content: 'https://buzzfeed.com',
		user_id: 2
	},
	{
		title: 'Morbi non quam nec dui luctus rutrum.',
		content: 'https://nasa.gov/',
		user_id: 1
	},
	{
		title:
			'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
		content:
			'https://europa.eu/',
		user_id: 3
	},
	{
		title: 'Nunc purus.',
		content: 'http://espn.com',
		user_id: 2
	},
	{
		title: 'Pellentesque eget nunc.',
		content: 'http://google.com',
		user_id: 2
	},
	{
		title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		content: 'https://mtsu.edu/',
		user_id: 1
	}
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;