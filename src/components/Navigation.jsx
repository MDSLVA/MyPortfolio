import React from 'react';

function Navigation({ onNavigationClick }) {
  const navigationLinks = [
    { section: 'aboutMe', label: 'About Me' },
    { section: 'portfolio', label: 'Portfolio' },
    { section: 'contactMe', label: 'Contact Me' },
    { section: 'resume', label: 'Resume' },
  ];

  return (
    <nav>
      <ul>
        {navigationLinks.map((link) => (
          <li
            key={link.section}
            onClick={() => onNavigationClick(link.section)}
            className="navigation-link" 
          >
            {link.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
