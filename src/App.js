import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card } from 'react-bootstrap';
import Name from './component/Name';
import Price from './component/Price';
import Description from './component/Description';
import Image from './component/Image';
import productData from './product';

function App() {
  const firstName = 'YourFirstName';
  return (
    
    <div className="App">
       <Card style={{ width: '18rem' }}>
        <Image image={productData.image} />
        <Card.Body>
          <Name name={productData.name} />
          <Price price={productData.price} />
          <Description description={productData.description} />
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : 'there'}!</p>
      {firstName && <Image image={productData.image} />}
      <Name/>
      <Price/>
      <Description/>
      <Image/>
    </div>
    
  );
}

export default App;
