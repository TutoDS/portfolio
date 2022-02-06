import Header from 'components/ui/Header';
import AboutSection from 'components/ui/sections/AboutSection';
import HeroSection from 'components/ui/sections/HeroSection';
import SkillsSection from 'components/ui/sections/SkillsSection';
import Timeline from 'components/ui/sections/Timeline';
import { Helmet } from 'react-helmet-async';

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Home Page</title>
			</Helmet>

			<Header />

			<HeroSection />

			<AboutSection id='about' />

			<SkillsSection />

			<Timeline />
		</>
	);
};

export default Home;
