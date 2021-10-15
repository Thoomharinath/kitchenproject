import {FaPinterestP, FaFacebookF} from 'react-icons/fa'
import {SiInstagram} from 'react-icons/si'
import {BsTwitter} from 'react-icons/bs'
import './index.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img
          src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1634124547/Group_7420_gpgewg.jpg"
          alt="website-footer-logo"
          className="logi"
        />

        <h1 className="kitchen-name">Tasty Kitchens </h1>
      </div>
      <p className="footer-para">
        The only thing we are serious about is food.
      </p>
      <div className="font-container">
        <FaPinterestP className="pinterest" testid="pintrest-social-icon" />
        <SiInstagram className="insta" testid="instagram-social-icon" />
        <BsTwitter className="twitter" testid="twitter-social-icon" />
        <FaFacebookF className="facebook" testid="facebook-social-icon" />
      </div>
    </div>
  )
}
