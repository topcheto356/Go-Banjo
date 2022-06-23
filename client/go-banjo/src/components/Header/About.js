import React from 'react';

const About = () => {
	return (
		<section className='about'>
			<div className='about__heading'>
				<h2 className='heading-secondary'>Find your dream house</h2>
			</div>

			<div className='about__container'>
				<div className='about__info'>
					<div className='about__info-first'>
						<h2 className='heading-secondary'>Epic houses</h2>
						<p className='paragraph'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
							numquam, incidunt laborum dignissimos dolor itaque quibusdam quo
							harum. Assumenda ex magni officiis adipisci praesentium amet.
							Magni natus amet veritatis laboriosam?
						</p>
					</div>
					<div className='about__info-second'>
						<h2 className='heading-secondary'>Epic houses</h2>
						<p className='paragraph'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
							numquam, incidunt laborum dignissimos dolor itaque quibusdam quo
							harum. Assumenda ex magni officiis adipisci praesentium amet.
							Magni natus amet veritatis laboriosam?
						</p>
					</div>
				</div>
				<div className='about__photos'>
					<img
						className='about__photos-first'
						src='https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607'
						alt=''
					/>
					<img
						className='about__photos-second'
						src='https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607'
						alt=''
					/>
					<img
						className='about__photos-third'
						src='https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607'
						alt=''
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
