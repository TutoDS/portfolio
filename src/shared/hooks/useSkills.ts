import { SkillAreaType } from 'shared/@types/Skill';
import skills from 'shared/data/skills';

const useProgressHistory = (area: SkillAreaType) => {
	const data = skills;

	return data.filter((skill) => skill.area === area);
};

export default useProgressHistory;
