import Header from 'components/ui/Header';
import SkillsSection from 'components/ui/sections/SkillsSection';
import Timeline from 'components/ui/sections/Timeline';
import { Helmet } from 'react-helmet-async';
import styles from './styles.module.scss';

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Home Page</title>
			</Helmet>

			<Header />

			<section className='mb-16 group text-center'>
				<h1 className='mb-2 font-mono text-4xl text-gray-100 md:text-6xl'>
					hi, I&apos;m <br className='block md:hidden' />
					<span className='relative'>
						<span className='h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent'>
							vanntile
							<span className='text-3xl md:text-5xl'>👋</span>
						</span>
						<span
							className={`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-gray-900 w-full animate-type will-change`}
						></span>
					</span>
				</h1>
			</section>

			<SkillsSection />

			<Timeline />
		</>
	);
};

export default Home;
