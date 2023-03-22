import {Inter} from 'next/font/google'
import Link from 'next/link'

const inter = Inter({subsets: ['latin']})

const Home = ({scenarios}) => {
    return (
        // {firstImg?.data?.map(firstImage => (
        //     <img src={"http://localhost:1337" + firstImage.attributes?.url}/>
        // ))}
        <section id="slideshow">
            <div className="entire-content">
                <div className="content-carrousel">
                    {scenarios.data.map((scenario) => (
                        <figure id={scenario.id} key={scenario.id} className="shadow">
                            <li key={scenario.id}>{scenario.attributes.title}</li>
                            console.log(scenario.attributes.file.attributes?.url);
                            <Link key={scenario.id} href="/scenarios"><img key={scenario.id} src={"http://localhost:1337/" + scenario.attributes.file.attributes?.url}
                            />
                            </Link>
                        </figure>
                    ))}

                    {/*<figure className="shadow">*/}
                    {/*    <Link href="/faq"><img*/}
                    {/*        src="https://images.pexels.com/photos/21261/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb"/>*/}
                    {/*    </Link>*/}
                    {/*</figure>*/}

                </div>
            </div>
        </section>
    );
};

// export async function getStaticPaths() {
//     const res = await fetch("http://localhost:1337/api/scenarios");
//     const scenarios = await res.json();
//     const paths = scenarios.data.map((scenario) => ({
//         params: { id: scenario.id.toString() },
//     }));
//
//     return { paths, fallback: false };
// }
//
// export async function getStaticProps({ params }) {
//     const res = await fetch("http://localhost:1337/api/scenarios/"+params.id+"?populate=*");
//     const scenarios = await res.json();
//     return {
//         props: {
//             scenarios,
//         },
//     };
// }


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


// export async function getStaticProps() {
//     const res = await fetch("http://localhost:1337/api/faqs");
//     const faqs = await res.json();
//     return {
//         props: {
//             faqs,
//         },
//     };
// }
//
// export default function Home(faqs) {
//     return (
//         <>
//             <section id="slideshow">
//                 <div className="entire-content">
//                     <div className="content-carrousel">
//
//                         <figure className="shadow">
//                             {/*{faqs.data.map((faq) => (<li key={faq.id}>{faq.attributes.question}--{faq.attributes.answer}</li>))}*/}
//                             <Link href="/faq"><img
//                                 src="https://images.pexels.com/photos/758733/pexels-photo-758733.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
//                             </Link>
//                         </figure>
//
//
//                         <figure className="shadow">
//                             <Link href="/faq"><img
//                                 src="https://images.pexels.com/photos/21261/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb"
//                                 href=""/>
//                             </Link>
//                         </figure>
//
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }
