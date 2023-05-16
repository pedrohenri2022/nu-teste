import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="nu-header">
        <svg className="logo" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.58581 20.4181C1.52416 21.4305 1.58581 22.4432 1.58581 23.425V32.9986H6.96481V24.2229C6.96481 21.4919 6.9341 19.068 6.96481 18.5462C7.05648 16.2145 7.7025 14.6504 8.90127 13.3914H8.62466C6.01216 13.3914 3.55298 14.8949 2.3542 17.2269C1.8317 18.2396 1.64723 19.3135 1.58581 20.4181Z" fill="#820AD1"/>
            <path d="M13.912 11.2644C11.9141 11.2644 10.1926 12.0621 8.90173 13.3817C12.8977 13.3817 15.5104 16.1124 15.6333 20.44C15.664 21.422 15.6949 26.7609 15.6949 26.7609V32.9899H21.0739V24.5813C21.0739 22.0346 21.1046 19.8252 20.9202 18.3218C20.3977 14.0873 17.8159 11.2644 13.912 11.2644Z" fill="#820AD1"/>
            <path d="M42.2519 24.342C42.3133 23.3293 42.2519 22.3169 42.2519 21.3349V11.7615H36.8729V20.5372C36.8729 23.2679 36.9036 25.6921 36.8729 26.2136C36.7812 28.5763 36.1352 30.1095 34.9055 31.3992H35.1821C37.7946 31.3992 40.254 29.8957 41.4528 27.5637C42.0062 26.5205 42.1896 25.4459 42.2519 24.342Z" fill="#820AD1"/>
            <path d="M29.9257 33.4858C31.9238 33.4858 33.6451 32.6881 34.936 31.3685C30.9403 31.3685 28.3275 28.6375 28.2045 24.3102C28.1738 23.3282 28.143 20.8429 28.143 17.9893V11.7615H22.7638V20.1689C22.7638 22.7156 22.7331 24.925 22.9176 26.4284C23.4401 30.6629 26.0221 33.4858 29.9257 33.4858Z" fill="#820AD1"/>
        </svg>
        <svg className="hamburguer" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/></svg>
        <nav className="nu-menu">
            <a href="https://www.google.com/">Página Inicial</a>
            <a href="https://www.google.com/">Para você</a>
            <a href="https://www.google.com/">Para seu negócio</a>
            <a href="https://www.google.com/">O Nubank</a>
            <a href="https://www.google.com/">Perguntas</a>
        </nav>
    </header>
  )
}

export default Header