import '../../css/Weddings.css';
import weddingimage from '../../assets/img/weddingImagen.png';



const Weddings = () =>{
    return(
        <section className="weddings">
        <div className="weddings__container">
          <div className="weddings__text-container">
            <h2 className="weddings__tittle">
              weddings
            </h2>
            <p className="weddings__paragraph">

              En más de una década, he trabajado personalmente con más de 300 parejas increíbles. Me encanta documentar la historia de amor única de cada pareja y presentarla de la manera más bella posible a través de mi lente. Me acerco a las bodas con un enfoque editorial distinto mientras infundo mi formación arquitectónica en mis imágenes.
            </p> 
              

              <p className="weddings__paragraph">Mi estudio se centra principalmente en bodas de lujo internacionales y de destino. Pero ninguna celebración de amor es demasiado grande o demasiado pequeña. He trabajado con parejas desde fugas íntimas hasta celebraciones de lujo a gran escala. Además, mis increíbles clientes me han llevado a algunos de los lugares más increíbles del mundo, como Italia, México, Taiwán, Tailandia, Shanghái y todo Estados Unidos.</p>

              <p className="weddings__paragraph">Dondequiera que te lleve tu historia de amor, me encantaría documentar tu celebración.
              </p>
            
          </div>
          <div className="weddings__img-container">
            <img src={weddingimage} alt="" className="weddings__img"/>
          </div>
        </div>
      </section>
    );
}

export default Weddings;