import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <section className="nu-hero"> 
        <div className="nu-hero-content">
            <span className='nu-hero-title'>
                <h1>O futuro é a razão que a gente faz planos.</h1>
                <p>Escolha o futuro. Comece a controlar melhor sua vida financeira com o Nubank.</p>
            </span>
            <div className="nu-hero-content-form">
                <h2>Peça sua conta e cartão de crédito do Nubank</h2>
                <input type="text" placeholder="Primary label"/>
                <button>
                    continuar 
                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0001 8H1.00012M17.0001 8L10.5001 14.5M17.0001 8L10.5001 1.5" stroke="#111111" stroke-opacity="0.2" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Hero