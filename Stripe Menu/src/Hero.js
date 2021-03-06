import React from 'react';
import { useGlobalContext } from './context';

function Hero() {
  const { setSubMenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={() => setSubMenu(false)} onFocus={() => {}}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept
            payments, send payouts, and manage their businesses online.
          </p>
          <button type="button" className="btn">
            start now
          </button>
        </article>
      </div>
    </section>
  );
}

export default Hero;
