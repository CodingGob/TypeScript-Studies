import { Link, useNavigate } from 'react-router-dom'
import styles from './home.module.css'
import { BsSearch } from 'react-icons/bs'
import { useEffect, useState, type SyntheticEvent } from 'react'
import { type CoinProps } from '../../types/coin'

export function Home() {
  interface DataProps {
    data: CoinProps[]
  }

  const [input, setInput] = useState<string>("")
  const [coins, setCoins] = useState<CoinProps[]>([])
  const [offset, setOffset] = useState<number>(0)

  const navigate = useNavigate()

  useEffect(() => {
    getData()
  }, [offset])

  async function getData() {
    fetch(`https://rest.coincap.io/v3/assets?limit=10&offset=${offset}&apiKey=3daac2e18ee60b612deff00caf48252fb3501ad07b2bef2c11b9a945a31e89b9`)
      .then(response => response.json())
      .then((d: DataProps) => {
        const priceFmt = Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 8
        })
        const priceFmtCompact = Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          notation: 'compact'
        })

        const formatedData = d.data.map(item => {
          const coin: CoinProps = {
            id: item.id,
            name: item.name,
            symbol: item.symbol,
            marketCapUsd: priceFmtCompact.format(Number(item.marketCapUsd)),
            priceUsd: priceFmt.format(Number(item.priceUsd)),
            volumeUsd24Hr: priceFmtCompact.format(Number(item.volumeUsd24Hr)),
            changePercent24Hr: Number(item.changePercent24Hr).toFixed(3),
            explorer: item.explorer,
            rank: item.rank,
            supply: item.supply,
            maxSupply: item.maxSupply,
            vwap24Hr: item.vwap24Hr,
            tokens: item.tokens
          }

          return coin;
        })

        setCoins([...coins, ...formatedData])
      })
  }

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()

    if (!input) {
      return
    }

    navigate(`/detail/${input}`)
  }

  function increaseDisplay() {
    setOffset(offset => offset + 10)
  }

  return (
    <main className={styles.container}>
      <form className={styles.form} action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={`Type the coin's name. Ex: Bitcoin`}
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type='submit'><BsSearch size={30} color='#fff' /></button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope='col'>Coin</th>
            <th scope='col'>Market Value</th>
            <th scope='col'>Price</th>
            <th scope='col'>Trading Volume</th>
            <th scope='col'>24hr Changes</th>
          </tr>
        </thead>

        <tbody id='tbody'>
          {coins.length > 0 && coins.map((coin, _) =>
            <tr className={styles.tr} key={coin.id}>

              <td className={styles.tdLabel} data-label='Coin'>
                <div className={styles.name}>
                  <img className={styles.coinLogo} src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`} alt="cryptocurrency logo" />
                  <Link to={`/detail/${coin.id}`}>
                    <span>{coin.name}</span> | {coin.symbol}
                  </Link>
                </div>
              </td>

              <td className={styles.tdLabel} data-label='Market Value'>
                {coin.marketCapUsd}
              </td>

              <td className={styles.tdLabel} data-label='Price'>
                {coin.priceUsd}
              </td>

              <td className={styles.tdLabel} data-label='Trading Volume'>
                {coin.volumeUsd24Hr}
              </td>

              <td className={coin.changePercent24Hr.includes('-') ? styles.tdLoss : styles.tdProfit} data-label='24hr Changes'>
                <span>{coin.changePercent24Hr.includes('-') ? ` ${coin.changePercent24Hr}%` : ` +${coin.changePercent24Hr}%`}</span>
              </td>

            </tr>)}
        </tbody>
      </table>

      <button className={styles.expandButton} onClick={increaseDisplay}>Show More</button>
    </main>
  )
}

export default Home