import Header from 'components/ui/Header';
import HeroSection from 'components/ui/sections/HeroSection';
import SkillsSection from 'components/ui/sections/SkillsSection';
import Timeline from 'components/ui/sections/Timeline';
import { MutableRefObject, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
	const skillsRef = useRef() as MutableRefObject<HTMLDivElement>;

	return (
		<>
			<Helmet>
				<title>Home Page</title>
			</Helmet>

			<Header />

			<HeroSection />

			<section id='about'>teste</section>

			<SkillsSection />

			<Timeline />
		</>
	);
};

export default Home;
