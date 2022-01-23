import { Icon } from '@iconify/react';
import { ToolType } from 'shared/@types/Tool';

type Props = {
	tool: ToolType;
	className?: string;
};

const ToolIcon = ({ tool, className, ...props }: Props) => {
	const renderIcon = () => {
		switch (tool) {
			case 'GitHub':
				return <Icon className={`${className || ''}`} icon={'simple-icons:github'} />;

			case 'GitLab':
				return <Icon className={`${className || ''}`} icon={'simple-icons:gitlab'} />;

			case 'Bitbucket':
				return <Icon className={`${className || ''}`} icon={'simple-icons:bitbucket'} />;

			case 'Visual Studio Code':
				return (
					<Icon className={`${className || ''}`} icon={'simple-icons:visualstudiocode'} />
				);

			case 'WebStorm':
				return <Icon className={`${className || ''}`} icon={'simple-icons:webstorm'} />;

			case 'Insomnia':
				return <Icon className={`${className || ''}`} icon={'simple-icons:insomnia'} />;

			case 'Postman':
				return <Icon className={`${className || ''}`} icon={'simple-icons:postman'} />;

			case 'Jira':
				return <Icon className={`${className || ''}`} icon={'simple-icons:jira'} />;

			case 'ClickUp':
				return <Icon className={`${className || ''}`} icon={'simple-icons:clickup'} />;

			case 'Slack':
				return <Icon className={`${className || ''}`} icon={'simple-icons:slack'} />;

			case 'Trello':
				return <Icon className={`${className || ''}`} icon={'simple-icons:trello'} />;

			case 'Adobe Photoshop':
				return (
					<Icon className={`${className || ''}`} icon={'simple-icons:adobephotoshop'} />
				);

			case 'Adobe Illustrator':
				return (
					<Icon className={`${className || ''}`} icon={'simple-icons:adobeillustrator'} />
				);

			case 'Affinity Designer':
				return (
					<Icon className={`${className || ''}`} icon={'simple-icons:affinitydesigner'} />
				);

			case 'Affinity Photo':
				return (
					<Icon className={`${className || ''}`} icon={'simple-icons:affinityphoto'} />
				);

			case 'Adobe XD':
				return <Icon className={`${className || ''}`} icon={'simple-icons:adobexd'} />;

			case 'Figma':
				return <Icon className={`${className || ''}`} icon={'simple-icons:figma'} />;

			case 'Canva':
				return <Icon className={`${className || ''}`} icon={'simple-icons:canva'} />;

			case 'Netlify':
				return <Icon className={`${className || ''}`} icon={'simple-icons:netlify'} />;

			case 'Vercel':
				return <Icon className={`${className || ''}`} icon={'simple-icons:vercel'} />;
		}
	};

	return <div {...props}>{renderIcon()}</div>;
};

export default ToolIcon;
