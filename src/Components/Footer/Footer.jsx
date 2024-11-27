import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div class="footer">
        

        <div class="call">
            <h4>Questions? Call</h4>
            <a>000-800-919-1694</a>
        </div>

       <div class="end">

            <div class="one">
                <a>FAQ</a>
                <a>Investor Relations</a>
                <a>Privacy</a>
                <a>Speed Test</a>
            </div>

            <div class="two">
                <a>Help Center</a>
                <a>Jobs</a>
                <a>Cookie Preferences</a>
                <a>Legal Notices</a>
            </div>

            <div class="three">
                <a>Account</a>
                <a>Ways to Watch</a>
                <a>Corporate Information</a>
                <a>Only on Netflix</a>
            </div>

            <div class="four">
                <a>Media Centre</a>
                <a>Terms of Use</a>
                <a>Contact Us</a>
            </div>

        </div>
        <button id="lang-select2">
            {/* <img src="images/Language icon.svg"/> */}
        <select class="select">
            <option>English</option>
            <option>हिंदी</option>
        </select>
        {/* <img src="https://w7.pngwing.com/pngs/934/782/png-transparent-arrow-chevron-computer-icons-font-awesome-or-angle-hand-black-thumbnail.png"/> */}
        </button>
       
       <h4 id="text">Netflix India</h4>

    </div>

    )
}

export default Footer
