import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'


interface phrasesProps {
  id: number
  category: string
  phrases: string[]
}


function App() {
  const [textPhase, setTextPhase] = useState<string>("")
  const [currentCategory, setCurrentCategory] = useState<number>(0)

  const allPhrases: phrasesProps[] = [{
    id: 1,
    category: "Motivação",
    phrases: [
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ]
  },
  {
    id: 2,
    category: "Bom Dia",
    phrases: [
      'Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!',
      'A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!',
      'Escreva em seu coração: todo dia é o melhor dia do ano.',
      'Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol.',
    ]
  },
  {
    id: 3,
    category: "Boa Noite",
    phrases: [
      'Boa noite durma bem',
      'Teste frase boa noite'
    ]
  }]


  function handleCategorySwitch(index: number) {
    setCurrentCategory(index)
  }

  function handlePhraseGen() {
    const phrases = allPhrases[currentCategory].phrases
    const randInt = Math.floor(Math.random() * phrases.length)

    setTextPhase('" {} "'.replace("{}", phrases[randInt]))
  }


  return (
    <div className='container'>
      <img className='logo' src={logoImg} alt="Logo frases" />

      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        {allPhrases.map((p, index) =>
          <button
            className='category-button'
            key={p.id}
            style={{
              borderWidth: p.category === allPhrases[currentCategory].category ? 4 : 0,
            }}
            onClick={() => handleCategorySwitch(index)}>
            {p.category}
          </button>)}
      </section>

      <button className='button-phrase' onClick={handlePhraseGen}>Gerar Frase</button>

      {textPhase && textPhase !== "" && <p className='text-phrase'>{textPhase}</p>}
    </div>
  )
}

export default App
