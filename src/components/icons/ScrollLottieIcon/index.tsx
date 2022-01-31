import darkScroll from 'assets/icons/dark-scroll.json';
import whiteScroll from 'assets/icons/scroll.json';
import lottie from 'lottie-web';
import { MutableRefObject, useEffect, useRef } from 'react';

type Props = {
	className?: string;
	color?: 'dark' | 'light';
};

const ScrollLottieIcon = ({ className, color = 'light', ...props }: Props) => {
	const iconRef = useRef() as MutableRefObject<HTMLDivElement>;

	useEffect(() => {
		lottie.loadAnimation({
			container: iconRef.current!,
			animationData: color === 'dark' ? darkScroll : whiteScroll,
			loop: true,
			autoplay: true
		});
	}, []);

	return <div className={`${className || ''}`} {...props} ref={iconRef} />;
};

export default ScrollLottieIcon;
