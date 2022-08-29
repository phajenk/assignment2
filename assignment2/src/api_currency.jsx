import { useEffect, useState } from "react";
import './api_currency.css'

export default function Currency() {

  
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('https://api.currencyfreaks.com/latest?apikey=28a1414b61944d2db8aa88e572c665a3')
      .then(res => res.json())
      .then(data => {
        setData(data.rates)
      })
  }, [])
  
  return (
    <div className="CurrencyTable">
      <div className="table">
    <table>
      <thead>
        <tr>
          <th>Currency</th>
          <th>We Buy</th>
          <th>Exchange Rate</th>
          <th>We Sell</th>
        </tr>
      </thead>
        {
          <tbody>
              <tr key='CAD'>
                <td>CAD</td>
                <td>{parseFloat((data.CAD*1.05)).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
                <td>{parseFloat(data.CAD).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
                <td>{parseFloat((data.CAD*0.95)).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
              </tr>
              <tr key='IDR'>
                <td>IDR</td>
                <td>{parseFloat((data.IDR*1.05)).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
                <td>{parseFloat(data.IDR).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
                <td>{parseFloat((data.IDR*0.95)).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
              </tr>
              <tr key='JPY'>
                <td>JPY</td>
                <td>{parseFloat((data.JPY*1.05)).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
                <td>{parseFloat(data.JPY).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
                <td>{parseFloat((data.JPY*0.95)).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
              </tr>
              <tr key='CHF'>
                <td>CHF</td>
                <td>{parseFloat((data.CHF*1.05)).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
                <td>{parseFloat(data.CHF).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
                <td>{parseFloat((data.CHF*0.95)).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
              </tr>
              <tr key='EUR'>
                <td>EUR</td>
                <td>{parseFloat((data.EUR*1.05)).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
                <td>{parseFloat(data.EUR).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
                <td>{parseFloat((data.EUR*0.95)).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
              </tr>
              <tr key='GBP'>
                <td>GBP</td>
                <td>{parseFloat((data.GBP*1.05)).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
                <td>{parseFloat(data.GBP).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
                <td>{parseFloat((data.GBP*0.95)).toLocaleString(undefined, {maximumFractionDigits:5})}</td>
              </tr>
      </tbody>
        }
    </table>
    </div>
    <div className="footer">
      Rates are based from 1 USD.
      <br></br>
        This application uses API from https://currencyfreaks.com
    </div>
    </div>
  )
}
