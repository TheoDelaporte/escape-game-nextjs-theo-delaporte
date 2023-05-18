const Index = ({faqs}) => {
    return (
        <div className="container">
            <h1>FAQ</h1>
            <div className="accordion" id="faqAccordion">
                {faqs.data.map((faq) => (
                    <div className="accordion-item" key={faq.id}>
                        <h2 className="accordion-header" id={`faqHeading${faq.id}`}>
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#faqCollapse${faq.id}`}
                                aria-expanded="false"
                                aria-controls={`faqCollapse${faq.id}`}
                            >
                                {faq.attributes.question}
                            </button>
                        </h2>
                        <div
                            id={`faqCollapse${faq.id}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`faqHeading${faq.id}`}
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                {faq.attributes.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
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
