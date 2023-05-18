import {Inter} from 'next/font/google'
import Link from 'next/link'

const inter = Inter({subsets: ['latin']})

const Home = ({scenarios}) => {
    return (
        <section id="slideshow">
            <div className="entire-content">
                <div className="content-carrousel">
                    {scenarios.data.map((scenario) => (
                        <figure id={scenario.id} key={scenario.id} className="shadow">
                            <li key={scenario.id}>{scenario.attributes.title}</li>
                            <Link key={scenario.id} href={`/scenarios/${scenario.id}`}><img key={scenario.id} src={`http://localhost:1337${scenario.attributes.file.url}`}
                            />
                            </Link>
                            {/*http://localhost:1337/uploads/escape_game_iss_thomas_pesquet_espace_d820ebdcc7.png*/}
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export async function getStaticProps() {
    const res = await fetch("http://localhost:1337/api/scenarios" + "?populate=*");
    const scenarios = await res.json();
    return {
        props: {
            scenarios,
        },
    };
}

export default Home;
