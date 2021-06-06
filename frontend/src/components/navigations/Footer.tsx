import React from 'react'
import { Link } from 'react-router-dom'


interface FooterProps  {

};

const Footer: React.FC<FooterProps>  = ({ 
    ...props

}) => {

    return (
        <footer className='footer row'>
            <div className="footer-container">
                <div className="footer-column">
                    <div className="footer-title">About</div>
                    <ul>
                        <li className="footer-items"><Link to='#'> About us </Link></li>
                        <li className="footer-items"><Link to='#'> Privacy policy </Link></li>
                        <li className="footer-items"><Link to='#'> Terms of service </Link></li>
                    </ul>
  
                </div>
                <div className="footer-column">
                    <div className="footer-title">Community</div>
                    <ul>
                        <li className="footer-items"><Link to='#'> Careers </Link></li>
                        <li className="footer-items"><Link to='#'> Invite friends </Link></li>
                        <li className="footer-items"><Link to='#'> Blog </Link></li>
                        <li className="footer-items"><Link to='#'> For business </Link></li>
                    </ul>

                </div>
                <div className="footer-column">
                    <div className="footer-title">Support</div>
                    <ul>
                        <li className="footer-items"><Link to='#'> Help center</Link></li>

                    </ul>
                </div>
            </div>
            <div className="footer-container row"> 
                <div className="footer-legal">Copyright by Timetaaable 2020</div>
            </div>

        </footer>

    )
};
export { Footer };