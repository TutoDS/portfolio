import lottie from 'lottie-web';
import React, { ReactNode, useEffect } from 'react';

type Props = {
	className?: string;
	icon: ReactNode;
};

const LottieIcon = ({ className, icon, ...props }: Props) => {
	useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector('#icon')!,
			animationData: icon,
			loop: true,
			autoplay: true
		});
		// eslint-disable-next-line
	}, []);

	return <div className={`${className || ''}`} {...props} id={'icon'}></div>;
};

export default LottieIcon;
