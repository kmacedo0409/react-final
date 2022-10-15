
import '../../css/CardsTeam.css';
import manuno from '../../assets/img/filter-image/man1.png';
import mandos from '../../assets/img/filter-image/man2.png';
import mantres from '../../assets/img/filter-image/man3.png';
import womanuno from '../../assets/img/filter-image/woman1.png';


const CardsTeam = () => {

  return (
    <section id="team" className="team">
          
          <div className="team__container">

            <h2 className="team__tittle">Our Team</h2>

            <div className="team__card-container">

              <div className="card">
                <div className="content">
                    <div className="imgBox">
                        <img src={manuno} alt="fotoman"/>
                    </div>
                    <div className="contentBox">
                        <h4>Jean Montes</h4>
                        <h5>Photographer Wedding</h5>
                    </div>
                    <div className="social">
                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                        <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                </div>

                <div className="card">
                  <div className="content">
                    <div className="imgBox">
                        <img src={mandos} alt="fotoman"/>
                    </div>
                    <div className="contentBox">
                        <h4>Jesús Bravo</h4>
                        <h5>Photographer Wedding</h5>
                    </div>
                    <div className="social">
                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                        <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              
                <div className="card">
                  <div className="content">
                    <div className="imgBox">
                        <img src={womanuno} alt="fotoman"/>
                    </div>
                    <div className="contentBox">
                        <h4>Karina Macedo</h4>
                        <h5>Style Wedding</h5>
                    </div>
                    <div className="social">
                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                        <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              
                <div className="card">
                  <div className="content">
                    <div className="imgBox">
                        <img src={mantres} alt="fotoman"/>
                    </div>
                    <div className="contentBox">
                        <h4>Johan Labra</h4>
                        <h5>Photographer Design</h5>
                    </div>
                    <div className="social">
                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                        <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
            </div>
          </div>

        </section>

  );
}

export default CardsTeam;