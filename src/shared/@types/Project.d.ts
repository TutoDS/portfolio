import { SkillType } from './Skill';
import { ToolType } from './Tool';

export type ProjectType = {
	title: string;
	path: string;
	image: string;
	skills: SkillType[];
	tools?: ToolType[];
};
