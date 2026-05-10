import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { type CoinProps } from '../../types/coin'
import styles from './detail.module.css'

export function Detail() {
  interface ResponseData {
    data: CoinProps
  }

  interface ErrorData {
    error: string
  }

  type DataProps = ResponseData | ErrorData

  const { crypto } = useParams()

  const [coin, setCoin] = useState<CoinProps>()

  const navigate = useNavigate()

  useEffect(() => {
    getCoin()
  }, [crypto])

  async function getCoin() {
    try {
      fetch(`https://rest.coincap.io/v3/assets/${crypto}?apiKey=3daac2e18ee60b612deff00caf48252fb3501ad07b2bef2c11b9a945a31e89b9`)
        .then(response => response.json())
        .then((d: DataProps) => {
          if ("error" in d) {
            console.log(d);
            window.alert(`Sorry, coin "${crypto}" was not found.`)
            navigate('/', { replace: true })
            return
          }

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
          const compactNumber = Intl.NumberFormat('en-US', {
            notation: 'compact',
            maximumFractionDigits: 2
          })

          const resultCoin: CoinProps = {
            id: d.data.id,
            rank: d.data.rank,
            symbol: d.data.symbol,
            name: d.data.name,
            supply: compactNumber.format(Number(d.data.supply)),
            maxSupply: compactNumber.format(Number(d.data.maxSupply)),
            marketCapUsd: priceFmtCompact.format(Number(d.data.marketCapUsd)),
            volumeUsd24Hr: priceFmtCompact.format(Number(d.data.volumeUsd24Hr)),
            priceUsd: priceFmt.format(Number(d.data.priceUsd)),
            changePercent24Hr: Number(d.data.changePercent24Hr).toFixed(3),
            vwap24Hr: priceFmt.format(Number(d.data.vwap24Hr)),
            explorer: d.data.explorer,
            tokens: d.data.tokens
          }

          setCoin(resultCoin)
          console.log(coin);
        })
    } catch (error) {
      console.log(error);
    }
  }

  if (!coin) {
    return (
      <div className={styles.container}>
        <h4 className={styles.center}>Loading details...</h4>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <section className={styles.content}>

        <img className={styles.coinLogo} src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`} alt="cryptocurrency logo" />
        <h1>{coin.name} | {coin.symbol}</h1>
        <p><strong>Price:</strong> {coin.priceUsd}</p>

        <a>
          <strong>Market Value:</strong> {coin.marketCapUsd}
        </a>
        <a>
          <strong>Trading Volume (24hr):</strong> {coin.volumeUsd24Hr}
        </a>
        <a>
          <strong>24hr Changes:</strong>
          <span className={coin.changePercent24Hr.includes('-') ? styles.tdLoss : styles.tdProfit}>
            {coin.changePercent24Hr.includes('-') ? ` ${coin.changePercent24Hr}%` : ` +${coin.changePercent24Hr}%`}
          </span>
        </a>
        <a>
          <strong>Supply:</strong> {coin.supply}
        </a>
        <a>
          <strong>Max Supply:</strong> {coin.maxSupply}
        </a>
        <a>
          <strong>Volume-Weighted Average Price:</strong> {coin.vwap24Hr}
        </a>

      </section>

      <a className={styles.coinPage} href={coin.explorer}>Coin Page</a>
    </div>
  )
}

export default Detail