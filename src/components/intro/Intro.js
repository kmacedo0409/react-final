import '../../css/Intro.css';

const Intro = () =>{
    return(
        <section className="intro">
            <div className="intro__container">
              <div className="intro__tittle-container">
                <h2 className="intro__tittle">
                  ¡Capturamos tus mejores momentos!
                </h2>
                <a href="#" className="intro__btn">Cotizar</a>
                
              </div>
              <div className="intro_paragraph-container">
                <p className="intro__paragraph">
                  Muchas gracias, por tomar parte de tu tiempo y haber llegado hasta aca.
                    Fotografiamos bodas y tenemos la seguridad que la mejor manera de contar las historias de una boda son a traves de la fotografía.
                    Nos encanta la idea que en los próximos años al mirarlas nuevamente te des cuenta del tesoro que describe la historia de tu familia y del valor incalculable que estas tienen.
                    Es este sentimiento de nostalgia el que nos inspira.
                </p>
              </div>
            </div>
        </section>
    );
}

export default Intro;