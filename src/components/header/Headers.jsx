"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../assests/assests/Timzoid Logo Trans 3.svg";
import "../../css/style.css"
const Header = () => {
  const countries = [
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
    { code: 'EE', name: 'Estonia', flag: '🇪🇪' },
    // Add more countries as needed
  ];

  const [selectedCountry, setSelectedCountry] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setMenuOpen(false); // Close menu when select is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="heads">
      <div className="head_container">
      <div className="flex">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="Timzoid Logo" width={120} height={40} />
          </Link>
        </div>
        <div className={`navbar ${menuOpen ? 'open' : ''}`} onClick={closeMenu}>
          <ul>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        </div>
        <div className="selections" onClick={closeMenu}>
          <div className='selecting'>
            <select id="country" value={selectedCountry} onChange={handleCountryChange}>
              <option value="">Select</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {selectedCountry === country.code ? country.name : `${country.flag} ${country.name}`}
                </option>
              ))}
            </select>
            {selectedCountry && (
              <span className="flag">{countries.find(c => c.code === selectedCountry).flag}</span>
            )}
          </div>
          <div className="contact_link">
            <Link href="/contact">
              <button>
                speak with an agent 
              </button>
            </Link>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
