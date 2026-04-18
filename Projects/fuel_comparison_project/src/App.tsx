import { useState, type SyntheticEvent } from 'react';
import './App.css'
import logoImg from './assets/logo.png'

function App() {
  interface infoProps {
    title: string,
    ethPrice: string;
    gasPrice: string;
  }

  const [ethInput, setEthInput] = useState("");
  const [gasInput, setGasInput] = useState("");
  const [info, setInfo] = useState<infoProps>();

  function covertPrice(price: string): string {
    price = price.replace(',', '.');

    if (!price.includes('.')) {
      return price + '.00'
    }

    const priceArray: string[] = price.split('.');
    price = priceArray[0] + '.';

    for (let index = 0; index < 2; index++) {
      if (!priceArray[1][index]) {
        price += '0';
      } else {
        price += priceArray[1][index];
      }
    }

    return price;
  }

  function compute(event: SyntheticEvent) {
    event.preventDefault(); // prevents the alert from reloading the page
    const eth = Number(ethInput.replace(',', '.'));
    const gas = Number(gasInput.replace(',', '.'));

    if (isNaN(eth) || isNaN(gas) || eth === 0 || gas === 0) {
      alert("Please enter valid numbers!");
      return;
    }

    const result = (eth / gas);

    if (result <= .7) {
      setInfo({
        title: 'Ethanol',
        ethPrice: covertPrice(ethInput),
        gasPrice: covertPrice(gasInput)
      })
    } else {
      setInfo({
        title: 'Gasoline',
        ethPrice: covertPrice(ethInput),
        gasPrice: covertPrice(gasInput)
      })
    }
  }

  return (
    <div>
      <main className='container'>
        <img className='logo' src={logoImg} alt='app logo' />
        <h1 className='title'>Which is the best option?</h1>

        <form className='form' onSubmit={compute}>
          <label>Ethanol (price per liter):</label>
          <input
            className='input'
            type="number"
            placeholder='1.20'
            min='.1'
            step='.01'
            inputMode='decimal'
            value={ethInput}
            onChange={(e) => setEthInput(e.target.value)}
            required />

          <label>Gasoline (price per liter):</label>
          <input
            className='input'
            type="number"
            placeholder='1.44'
            min='0.1'
            step='0.01'
            inputMode='decimal'
            value={gasInput}
            onChange={(e) => setGasInput(e.target.value)}
            required />

          <button className='button' type='submit'>Evaluate</button>
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className='result'>
            <h2 className='result-title'>Recommended: {info?.title}</h2>
            <span>Ethanol price: ${info?.ethPrice}</span>
            <span>Gasoline price: ${info?.gasPrice}</span>
          </section>
        )}
      </main>
    </div>
  );
}

export default App
