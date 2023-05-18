import { useRouter } from 'next/router';

const Scenario = ({ scenario }) => {
    const attributes = scenario.data.attributes;
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <div className="container">
            <div className="card bg-light shadow">
                <div className="card-body">
                    <h5 className="card-title">{attributes.title}</h5>
                    <p className="card-text">{attributes.description}</p>
                    <p className="card-text">Durée : {attributes.duration} min</p>
                    <p className="card-text">Nombre de joueurs conseillé : {attributes.numberPlayer}</p>
                    <p className="card-text">Difficulé : {attributes.difficulty}</p>
                    <button className="btn btn-warning" onClick={handleGoBack}>
                        Retourner à la page précèdente
                    </button>
                </div>
            </div>
        </div>
    );
};

export async function getStaticPaths() {
    const res = await fetch("http://localhost:1337/api/scenarios");
    const scenarios = await res.json();
    const paths = scenarios.data.map((scenario) => ({
        params: { id: scenario.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch("http://localhost:1337/api/scenarios/" + params.id);
    const scenario = await res.json();
    return { props: { scenario } };
}

export default Scenario;