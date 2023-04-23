import Carousel from 'react-bootstrap/Carousel';

function Carrousel(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-200 adv"
          src={props.adv1}
          alt="First slide"
        />        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-200 adv"
          src={props.adv2}
          alt="Second slide"
        />        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-200 adv"
          src={props.adv3}
          alt="Third slide"
        />        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-200 adv"
          src={props.adv4}
          alt="Third slide"
        />        
      </Carousel.Item>
    </Carousel>
  );
}

/*function Carrousel(props){
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={props.adv1} class="d-block w-200" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={props.adv2} class="d-block w-200" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={props.adv3} class="d-block w-200" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );  
}*/

export default Carrousel;