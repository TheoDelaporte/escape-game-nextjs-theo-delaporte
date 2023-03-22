const Index = ({scenarios}) => {
    return (
        <div>
            <h1>Mes scénarios</h1>
            <ul>
                {scenarios.data.map((scenario) => (
                    <li key={scenario.id}>{scenario.attributes.title}--{scenario.attributes.description}</li>
                ))}
            </ul>
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch("http://localhost:1337/api/scenarios");
    const scenarios = await res.json();
    return {
        props: {
            scenarios,
        },
    };
}

export default Index;
