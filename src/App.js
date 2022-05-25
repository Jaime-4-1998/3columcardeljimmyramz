import sedan from './images/icon-sedans.svg'
import suv from './images/icon-suvs.svg'
import luxu from './images/icon-luxury.svg'
function App() {
  return (
    <main>
      <section className="container">
        <section className="card__container card__orange">
          <div className="content__img">
            <img src={sedan} className="img__card" loading="lazy" alt="eljimmyramz Jaime Ramirez" title="eljimmyramz Jaime Ramirez"  />
          </div>
          <h2 className="card__name">Sedans</h2>
          <div className="card__parr">
            <p>
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
          </div>
          <div className="card__linkcont">
            <a href='/' className="link__card color__link__orange">Learn More</a>
          </div>
        </section>

        <section className="card__container card__green">
          <div className="content__img">
            <img src={suv} className="img__card" loading="lazy" alt="eljimmyramz Jaime Ramirez" title="eljimmyramz Jaime Ramirez"  />
          </div>
          <h2 className="card__name">SUVs</h2>
          <div className="card__parr">
            <p>
            Take an SUV for its spacious interior, power, and versatility. 
            Perfect for your next family vacation and off-road adventures.
            </p>
          </div>
          <div className="card__linkcont">
            <a href='/' className="link__card color__link__green">Learn More</a>
          </div>
        </section>
        
        <section className="card__container card__dark">
          <div className="content__img">
            <img src={luxu} className="img__card" loading="lazy" alt="eljimmyramz Jaime Ramirez" title="eljimmyramz Jaime Ramirez"  />
          </div>
          <h2 className="card__name">Luxury</h2>
          <div className="card__parr">
            <p>
            Cruise in the best car brands without the bloated prices. 
            Enjoy the enhanced comfort of a luxury rental and arrive in style.
            </p>
          </div>
          <div className="card__linkcont">
            <a href='/' className="link__card color__link__dark">Learn More</a>
          </div>
        </section>

      </section>
    </main>
  );
}

export default App;
