const { Post } = require("../models");

const postdata = [
	{
		title: 'Lorem ipsum dolor sit amet.',
		contents: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		user_id: 2
	},
	{
		title: 'Ut enim ad minim veniam,',
		contents: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		user_id: 1
	},
	{
		title:
			'Duis aute irure dolor in reprehenderit',
		contents:
			'in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		user_id: 3
	},
	{
		title: 'Excepteur sint occaecat cupidatat non proident,',
		contents: 'sunt in culpa qui officia deserunt mollit anim id est laborum.',
		user_id: 2
	},
	{
		title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
		contents: 'totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
		user_id: 2
	},
	{
		title: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,',
		contents: 'sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
		user_id: 1
	}
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;