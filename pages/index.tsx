import Head from 'next/head';

import Line from '@/components/Line';
import ContactUs from '@/components/pages/root/ContactUs';
import Hero from '@/components/pages/root/Hero';
import TechStack from '@/components/pages/root/TechStack';
import Testimonials from '@/components/pages/root/Testimonials';

const HomePage = () => {

    return (
        <>
            <Head>
                <meta
                    content="Sander's CodeHouse is a web development company based in the Netherlands. We create websites and web applications for small and medium sized businesses."
                    name="description"/>
                <title>Sander's CodeHouse</title>
            </Head>
            <div className="mx-auto max-w-4xl relative z-0">
                <Hero/>

                <Line/>

                <TechStack/>

                <Line/>

                {/*<Diensten prices={prices} tags={tags}/>*/}

                {/*<Line/>*/}

                <Testimonials/>

                <Line/>

                <ContactUs/>

            </div>
        </>
    );
};

export default HomePage;