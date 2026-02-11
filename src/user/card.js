import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import Placeholder from 'react-bootstrap/Placeholder';
import {Link} from "react-router-dom";
import "./card.css";
import one from "./one.jpeg";
import two from "./two.jpeg";


function CardExample() {
   

  return (
    <div>
    <div className="d-flex justify-content-around">
      <nav>
        <Link to='/type1' className="card-link"
          state={{
          image: one,
          title: "ruby cotton towel",
          price: 1999,
          description: "Crafted from premium 100% cotton, this towel delivers unmatched softness, high absorbency, and long-lasting durability.",

          image2: two,
          title2: "emerald cotton towel",
          price2: 1899,
          description2: "Experience the perfect blend of softness and durability with our 100% cotton towel, designed to elevate your comfort and absorbency.",

          image3: one,
          title3: "king cotton towel",
          price3: 1999,
          description3: "Indulge in the ultimate luxury with our 100% cotton towel, offering unparalleled softness, superior absorbency, and long-lasting durability for a truly indulgent experience.",

    }}
        >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="one.jpeg" /> 
        <Card.Body>
          <Card.Title>100% cotton</Card.Title>
          <Card.Text>
            The most premium quality cotton towel you will ever find.
          </Card.Text>
          <Button variant="primary">Explore</Button>
        </Card.Body>
      </Card>
      </Link>
      </nav>
      















      <nav>
        <Link to='/type2' className="card-link"
         state={{
          image: two,
          title: " nigga towel",
          price: 899,
          description: "A luxurious towel with a soft texture and high absorbency.",

          image2: two,
          title2: "nigesh towel",
          price2: 799,
          description2: "A premium towel with a smooth texture and excellent absorbency.",

          image3: two,
          title3: "nigru towel",
          price3: 999,
          description3: "A premium towel with a luxurious feel and superior absorbency.",

    }}
        >
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="one.jpeg" /> 
        <Card.Body>
          <Card.Title>filament</Card.Title>
          <Card.Text>
            Feels luxurious on skin, even after many washes
          </Card.Text>
          <Button variant="primary">Explore</Button>
        </Card.Body>
      </Card>
      </Link>
      </nav>
      
    </div>
    <br/><br/>
    








    <div className="d-flex justify-content-around">
      <nav>
        <Link to='/type3' className="card-link"
        state={{
          image: two,
          title: " badie towel",
          price: 999,
          description: "A premium towel with a soft texture and high absorbency.",

          image2: two,
          title2: "typeshi towel",
          price2: 899,
          description2: "A luxurious towel with a smooth texture and excellent absorbency.",

          image3: two,
          title3: "fine shyt towel",
          price3: 1499,
          description3: "A premium towel with a luxurious feel and superior absorbency.",

    }}
        >
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="one.jpeg" /> 
        <Card.Body>
          <Card.Title>Mixed Cotton</Card.Title>
          <Card.Text>
            A perfect blend of cotton and polyester for durability and comfort.
          </Card.Text>
          <Button variant="primary">Explore</Button>
        </Card.Body>
      </Card>
      </Link>
      </nav>
    













    <nav>
        <Link to='/type4' className="card-link"
        state={{
          image: two,
          title: " millionare towel",
          price: 1899,
          description: "Experience the perfect blend of softness and durability with our 100% cotton towel, designed to elevate your comfort and absorbency.",

          image2: two,
          title2: "billionare towel",
          price2: 1999,
          description2: "A luxurious towel with a soft texture and high absorbency.",

          image3: two,
          title3: "trillionare towel",
          price3: 2999,
          description3: "A premium towel with a luxurious feel and superior absorbency.",

    }}
        >
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="one.jpeg" /> 
        <Card.Body>
          <Card.Title>Carbon Towels</Card.Title>
          <Card.Text>
            Luxary redefined with carbon fiber infused towels.
          </Card.Text>
          <Button variant="primary">Explore</Button>
        </Card.Body>
      </Card>
      </Link>
      </nav>
    </div>
    
    </div>
  );
}

export default CardExample;