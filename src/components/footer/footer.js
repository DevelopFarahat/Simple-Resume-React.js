


function Footer() {

    return (
        <>
            <footer>
                <div className="get-in-touch">
                    <h1>get in touch</h1>
                    <ul>
                        <li>
                            <i className="fa-solid fa-envelope"></i>
                            <a href="mailto:mohamed.farahat.attia@gmail.com" target="_blank" rel="noreferrer">mohamed.farahat.attia@gmail.com</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-phone"></i>
                            <a href="tel:+201150849567">01150849567</a>
                        </li>
                    </ul>

                </div>
                <div className="icon-social">
                    <div>
                        <a href="https://www.linkedin.com/in/mohamedfattia"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div>
                        <a href="https://github.com/DevlopFarahat"><i className="fa-brands fa-github-square">
                        </i></a>
                    </div>
                    <div>

                        <i className="fa-brands fa-twitter-square">
                        </i></div>
                </div>
            </footer>
        </>


    )
}

export default Footer;