import React from 'react'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="footer-section">
                <div className="logo">
                    <div className="logo-img">
                        <img src="/footerlogo.png"/>
                    </div>
                    <div className="footer-text">
                        <p>Türkiye'nin anime ve çizgi film Kanalı. Her türlü görüş ve önerileriniz için <a
                            href="mailto:info@anizm.tv">info@anizm.tv</a> adresine e-posta göndererek <a href="/">anizm.tv</a>'nin
                            gelişmesine katkıda
                            bulunabilirsiniz.</p>
                    </div>
                </div>
            </div>
        )
    }
}