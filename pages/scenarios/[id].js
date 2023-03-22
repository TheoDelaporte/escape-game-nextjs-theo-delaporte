const Scenario = ({scenario}) => {
    const attributes = scenario.data.attributes;
    return (<div>
            <h1>Mon scénario</h1>
            <p>{attributes.title}</p>
            <p>{attributes.description}</p>
        </div>);
};

export async function getStaticPaths() {
    const res = await fetch("http://localhost:1337/api/scenarios");
    const scenarios = await res.json();
    const paths = scenarios.data.map((scenario) => ({
        params: {id: scenario.id.toString()},
    }));

    return {paths, fallback: false};
}

export async function getStaticProps({params}) {
    const res = await fetch("http://localhost:1337/api/scenarios/" + params.id);
    const scenario = await res.json();
    return {props: {scenario}};
}

export default Scenario;
