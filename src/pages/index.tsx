import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main>
				<Hero />
				<About />
				<Menu />
				<Team />
				<Testimonial />
			</main>
			<footer></footer>
		</>
	);
}
