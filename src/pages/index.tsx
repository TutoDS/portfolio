import React from 'react';
import scrollLottie from 'assets/icons/scroll.json';
import LottieIcon from 'components/icons/LottieIcon';
import SkillsSection from 'components/ui/sections/SkillsSection';
import Timeline from 'components/ui/sections/Timeline';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	// const sectionRef = useRef<null | HTMLElement>(null);

	// const executeScroll = () =>
	// 	sectionRef.current != null &&
	// 	sectionRef.current.scrollIntoView({
	// 		behavior: 'smooth'
	// 	});

	return (
		<>
			<div className='relative pt-16 pb-32 flex content-center items-center justify-center min-h-[75vh]'>
				<div
					className='absolute top-0 w-full h-full bg-center bg-cover'
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
					}}
				>
					<span
						id='blackOverlay'
						className='w-full h-full absolute opacity-75 bg-black'
					></span>
				</div>
				<div className='container relative mx-auto'>
					<div className='items-center flex flex-wrap'>
						<div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
							<div className='pr-12'>
								<h1 className='text-white font-semibold text-5xl'>
									Dê asas ao seu projeto!
								</h1>
								<p className='mt-4 text-lg text-gray-300'></p>
							</div>

							<LottieIcon
								icon={scrollLottie}
								className={
									'w-[20px] inline-flex justify-center'
								}
							/>
						</div>
					</div>
				</div>

				<div
					className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
					style={{ height: '70px' }}
				>
					<svg
						className='absolute bottom-0 overflow-hidden'
						xmlns='http://www.w3.org/2000/svg'
						preserveAspectRatio='none'
						version='1.1'
						viewBox='0 0 2560 100'
						x='0'
						y='0'
					>
						<polygon
							className='fill-slate-200 dark:fill-gray-900'
							points='2560 0 2560 100 0 100'
						></polygon>
					</svg>
				</div>
			</div>

			<SkillsSection />

			<Timeline />
			<div className={'mx-auto container p-4'}>
				<h1 className={''}>Hello!</h1>

				<div
					className={
						'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
					}
				>
					{/* {projects.map((project, index) => (
						<ProjectCard key={index} project={project} />
					))} */}
				</div>
			</div>
		</>
	);
};

export default Home;
