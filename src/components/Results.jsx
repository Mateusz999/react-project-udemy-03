import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function Results ({ input }) {
    const resultData = calculateInvestmentResults(input);
    const initialInvestment = 
        resultData[0].valueEndOfYear - 
        resultData[0].interest - 
        resultData[0].annualInvestment;

    console.log(resultData)
    return (    <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interests (Year) </th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
              {resultData.map((el)=> {
                const totalInterest = el.valueEndOfYear - el.annualInvestment * el.year - initialInvestment;
                const totalAmountInvested = el.valueEndOfYear - totalInterest;
                return (<tr key={el.year}>
                    <td>{el.year}</td>
                    <td>{formatter.format(el.valueEndOfYear)}</td>
                    <td>{formatter.format(el.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>)})}
            </tbody>
        </table>
    )
}