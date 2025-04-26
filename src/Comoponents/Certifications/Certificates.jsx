import React from 'react'
import './Certificates.css' 
import theme_pattern from '../../assets/theme_pattern.svg'
import certificate1 from '../../assets/certificate1.jpeg'
import certificate2 from '../../assets/certificate2.jpeg'
import certificate3 from '../../assets/certficate3.jpeg'
import certificate4 from '../../assets/certificate4.jpeg'
import certificate5 from '../../assets/certificate5.jpeg'
import certificate6 from '../../assets/certificate6.jpeg'

const Certificates = () => {
  return (
    <div className='certificate'>
        <div className="certificate-title">
                <h1>My Certifications</h1>
                <img src={theme_pattern} alt="" />
         </div>

         <div className="four-certificate">
            <div className="cert-card">
                <img src={certificate1} alt="Certificate 1" />
                <div className="cert-info">Internship | Jan 2025</div>
            </div>

            <div className="cert-card">
                <img src={certificate2} alt="Certificate 2" />
                <div className="cert-info">Basic to Advance CSS| Jan 2025</div>
            </div>

            <div className="cert-card">
                <img src={certificate3} alt="Certificate 3" />
                <div className="cert-info">Google Analytics| 2024</div>
            </div>

            <div className="cert-card">
                <img src={certificate4} alt="Certificate 4" />
                <div className="cert-info">SIH Hackathon | Agu 2024</div>
            </div>

            <div className="cert-card">
                <img src={certificate5} alt="Certificate 4" />
                <div className="cert-info">Google Analytics Advance | 2024</div>
            </div>

            <div className="cert-card">
                <img src={certificate6} alt="Certificate 4" />
                <div className="cert-info">Training in Web Development | Agu 2024</div>
            </div>
        </div>

    </div>
  )
}

export default Certificates
