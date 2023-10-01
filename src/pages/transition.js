import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
      new window.bootstrap.ScrollSpy(document.body, {
        target: '#sideNav',
        offset: 74,
      });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = Array.from(
      document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.forEach((responsiveNavItem) => {
      responsiveNavItem.addEventListener('click', () => {
        if (
          window.getComputedStyle(navbarToggler).display !== 'none' &&
          document.body.classList.contains('offcanvas-active')
        ) {
          navbarToggler.click();
        }
      });
    });
  }, []);

  return (
    <div className="App">
      {/* O restante do seu componente React */}
    </div>
  );
}

export default App;
