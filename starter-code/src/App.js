import React, { Component } from 'react';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random'
import BoxColor from './BoxColor'
import CreditCard from './CreditCard'
import Rating from './Rating'

class App extends Component {
  render() {
    return (
      <div className="App">


        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
        <IdCard lastName="Doe" firstName="John" gender="male" height={1.78} picture="https://randomuser.me/api/portraits/men/44.jpg" />

        <IdCard lastName="Obrien" firstName="Dolores" gender="female" height={1.72} picture="https://randomuser.me/api/portraits/women/44.jpg" />

        <h1>Greetings</h1>

        <Greetings lang="de" greeting="Hallo" name="Ludwig" />
        <Greetings lang="fr" greeting="Bonjour" name="François" />


        <h1>Random Numbers</h1>

        <Random min={1} max={6} />
        <Random min={1} max={100} />


        <h1>Box Color</h1>
        <BoxColor r={255} g={0} b={0} />

        <BoxColor r={128} g={255} b={0} />


        <h1>Credit Card</h1>


        <CreditCard

          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222" />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />


        <h1>Rating</h1>

        <Rating />

      </div>

    );
  }
}

export default App;
