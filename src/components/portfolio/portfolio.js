import PortfolioDetails from "./portfolioDetails";


function Portfolio() {
    let protoNamesArr = [{ _id: 1, name: "Angular" }, { _id: 2, name: "React" }, { _id: 3, name: "Java" }, { _id: 4, name: "Javascript" }, { _id: 5, name: "Typescript" }, { _id: 6, name: "Node.js" },]
    return (
        <>
            <div className="portfolio-section">
                <h1>Portfolio</h1>
                <div className="portfolio-details">
                    {protoNamesArr.map((proto) => (
                        <PortfolioDetails key={proto._id} protoName={proto.name} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Portfolio;
