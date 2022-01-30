import { ProjectType } from 'shared/@types/Project';
import slugify from 'shared/functions/slugify';

const projects: ProjectType[] = [
	{
		title: 'Gadgets & Coisas',
		path: slugify('Gadgets & Coisas'),
		image: 'https://source.unsplash.com/random',
		skills: ['WordPress', 'Elementor']
	}
];

export default projects;
