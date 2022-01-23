const SkeletonProjectCard = () => (
	<>
		<div
			className={
				'w-full min-h-[250px] shadow-md rounded-lg dark:bg-slate-800 bg-slate-500 animate-pulse'
			}
		></div>
		<div className={'relative px-4 -mt-16'}>
			<div
				className={
					'dark:bg-gray-700 bg-slate-100 dark:text-slate-200 p-6 rounded-lg shadow-lg flex flex-col gap-2'
				}
			>
				<div className={'flex items-center gap-2'}>
					<span
						className={
							'animate-pulse rounded-full px-2 inline-block dark:bg-slate-100 bg-slate-600 w-12 h-4'
						}
					></span>
				</div>
				<div
					className={
						'mt-1 w-full h-4 rounded-lg shadow animate-pulse bg-slate-600 dark:bg-slate-100'
					}
				></div>
				<div className={'mt-3'}>
					<div
						className={
							'animate-pulse shadow rounded-lg dark:bg-slate-100 bg-slate-600 h-6 w-16'
						}
					></div>
				</div>
			</div>
		</div>
	</>
);

export default SkeletonProjectCard;
