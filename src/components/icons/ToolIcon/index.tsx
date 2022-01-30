import React from 'react';
import {
	SiAdobeillustrator,
	SiAdobephotoshop,
	SiAdobexd,
	SiAffinitydesigner,
	SiAffinityphoto,
	SiBitbucket,
	SiCanva,
	SiClickup,
	SiFigma,
	SiGithub,
	SiGitlab,
	SiInsomnia,
	SiJira,
	SiNetlify,
	SiPostman,
	SiSlack,
	SiTrello,
	SiVercel,
	SiVisualstudiocode,
	SiWebstorm
} from 'react-icons/si';
import { ToolType } from 'shared/@types/Tool';

type Props = {
	tool: ToolType;
	className?: string;
};

const ToolIcon = ({ tool, className, ...props }: Props) => {
	const renderIcon = () => {
		switch (tool) {
			case 'GitHub':
				return <SiGithub className={`${className || ''}`} />;

			case 'GitLab':
				return <SiGitlab className={`${className || ''}`} />;

			case 'Bitbucket':
				return <SiBitbucket className={`${className || ''}`} />;

			case 'Visual Studio Code':
				return <SiVisualstudiocode className={`${className || ''}`} />;

			case 'WebStorm':
				return <SiWebstorm className={`${className || ''}`} />;

			case 'Insomnia':
				return <SiInsomnia className={`${className || ''}`} />;

			case 'Postman':
				return <SiPostman className={`${className || ''}`} />;

			case 'Jira':
				return <SiJira className={`${className || ''}`} />;

			case 'ClickUp':
				return <SiClickup className={`${className || ''}`} />;

			case 'Slack':
				return <SiSlack className={`${className || ''}`} />;

			case 'Trello':
				return <SiTrello className={`${className || ''}`} />;

			case 'Adobe Photoshop':
				return <SiAdobephotoshop className={`${className || ''}`} />;

			case 'Adobe Illustrator':
				return <SiAdobeillustrator className={`${className || ''}`} />;

			case 'Affinity Designer':
				return <SiAffinitydesigner className={`${className || ''}`} />;

			case 'Affinity Photo':
				return <SiAffinityphoto className={`${className || ''}`} />;

			case 'Adobe XD':
				return <SiAdobexd className={`${className || ''}`} />;

			case 'Figma':
				return <SiFigma className={`${className || ''}`} />;

			case 'Canva':
				return <SiCanva className={`${className || ''}`} />;

			case 'Netlify':
				return <SiNetlify className={`${className || ''}`} />;

			case 'Vercel':
				return <SiVercel className={`${className || ''}`} />;
		}
	};

	return <div {...props}>{renderIcon()}</div>;
};

export default ToolIcon;
