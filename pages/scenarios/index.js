const Index = ({scenarios}) => {
    return (
        <div className="container">
            <h1>Mes scénarios</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Titre</th>
                    <th scope="col">Description</th>
                </tr>
                </thead>
                <tbody>
                {scenarios.data.map((scenario) => (
                    <tr key={scenario.id}>
                        <td>{scenario.attributes.title}</td>
                        <td>{scenario.attributes.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
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
