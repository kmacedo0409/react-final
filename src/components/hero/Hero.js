import '../../css/Hero.css';
import montaña from '../../assets/img/montaña.png';
import herodos from '../../assets/img/heroDos.jpg';
import herosiete from '../../assets/img/heroSiete.jpg';



const Hero = () => {


  return (
    <article className="hero" id="hero">
            <div id="control" className="carousel slide carousel-fade" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={montaña} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={herodos} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={herosiete} className="d-block w-100" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#control" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#control" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <h1 class="hero_tittle"> Una sola fotografía puede contener múltiples imágenes.</h1>


        </article>
  );
}


export default Hero;