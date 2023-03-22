const Index = ({faqs}) => {
    return (<div>
            <h1>Faq</h1>
            <ul>
                {faqs.data.map((faq) => (<li key={faq.id}>{faq.attributes.question}--{faq.attributes.answer}</li>))}
            </ul>
        </div>);
};

export async function getStaticProps() {
    const res = await fetch("http://localhost:1337/api/faqs");
    const faqs = await res.json();
    return {
        props: {
            faqs,
        },
    };
}

export default Index;
