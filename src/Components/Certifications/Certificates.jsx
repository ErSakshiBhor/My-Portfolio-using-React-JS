// import React, { useState } from 'react'
// import './Certificates.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import certificate1 from '../../assets/certificate1.jpeg'
// import certificate2 from '../../assets/certificate2.jpeg'
// import certificate3 from '../../assets/certficate3.jpeg'
// import certificate4 from '../../assets/certificate4.jpeg'
// import certificate5 from '../../assets/certificate5.jpeg'
// import certificate6 from '../../assets/certificate6.jpeg'
// import certificate7 from '../../assets/certficate7.jpg'

// const Certificates = () => {
//   const [showAll, setShowAll] = useState(false);

//   const certificates = [
//     { img: certificate1, text: 'Internship | Jan 2025' },
//     { img: certificate2, text: 'Basic to Advance CSS | Jan 2025' },
//     { img: certificate3, text: 'Google Analytics | 2024' },
//     { img: certificate4, text: 'SIH Hackathon | Aug 2024' },
//     { img: certificate5, text: 'Google Analytics Advance | 2024' },
//     { img: certificate6, text: 'Training in Web Development | Aug 2024' },
//     { img: certificate7, text: 'AI Tools Workshop | 2025' },
//     // { img: certificate8, text: 'Django Workshop | 2025' },
//     // add more if needed
//   ];

//   const visibleCertificates = showAll ? certificates : certificates.slice(0, 6);

//   return (
//     <div className='certificate'>
//       <div className="certificate-title">
//         <h1>My Certifications</h1>
//         {/* <img src={theme_pattern} alt="" /> */}
//       </div>

//       <div className="four-certificate">
//         {visibleCertificates.map((cert, index) => (
//           <div className="cert-card" key={index}>
//             <img src={cert.img} alt={`Certificate ${index + 1}`} />
//             <div className="cert-info">{cert.text}</div>
//           </div>
//         ))}
//       </div>


//       <div style={{ textAlign: 'center', marginTop: '-5rem' }}>
//         <button className="see-more-button" onClick={() => setShowAll(prev => !prev)}>
//           {showAll ? 'Show Less' : 'See More'}
//         </button>
//       </div>


//     </div>
//   );
// };

// export default Certificates


import React, { useState } from 'react';
import './Certificates.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import certificate1 from '../../assets/certificate1.jpeg';
import certificate2 from '../../assets/certificate2.jpeg';
import certificate3 from '../../assets/certficate3.jpeg';
import certificate4 from '../../assets/certificate4.jpeg';
import certificate5 from '../../assets/certificate5.jpeg';
import certificate6 from '../../assets/certificate6.jpeg';
import certificate7 from '../../assets/certficate7.jpg';

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCertIndex, setSelectedCertIndex] = useState(null);

  const certificates = [
    { img: certificate1, text: 'Internship | Jan 2025' },
    { img: certificate2, text: 'Basic to Advance CSS | Jan 2025' },
    { img: certificate3, text: 'Google Analytics | 2024' },
    { img: certificate4, text: 'SIH Hackathon | Aug 2024' },
    { img: certificate5, text: 'Google Analytics Advance | 2024' },
    { img: certificate6, text: 'Training in Web Development | Aug 2024' },
    { img: certificate7, text: 'AI Tools Workshop | 2025' },
  ];

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 6);

  const handleClick = (index) => {
    setSelectedCertIndex(index === selectedCertIndex ? null : index);
  };

  return (
    <div className='certificate'>
    {selectedCertIndex !== null && <div className="certificate-overlay" onClick={() => setSelectedCertIndex(null)} />}

      <div className="certificate-title">
        <h1>My Certifications</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="four-certificate">
        {visibleCertificates.map((cert, index) => (
          <div
            className={`cert-card ${selectedCertIndex === index ? 'enlarged' : selectedCertIndex !== null ? 'blurred' : ''}`}
            key={index}
            onClick={() => handleClick(index)}
          >
            <img src={cert.img} alt={`Certificate ${index + 1}`} />
            <div className="cert-info">{cert.text}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '-5rem' }}>
        <button className="see-more-button" onClick={() => setShowAll(prev => !prev)}>
          {showAll ? 'Show Less' : 'See More'}
        </button>
      </div>
    </div>
  );
};

export default Certificates;
