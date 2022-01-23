import React from 'react';
import styles from './styles.module.scss';

const LoadingIndicator = () => {
	return (
		<div
			className={`${styles.loader} ease-linear rounded-full border-8 border-t-8 dark:border-gray-200 border-gray-400 h-[100px] w-[100px]`}
		></div>
	);
};

export default LoadingIndicator;
