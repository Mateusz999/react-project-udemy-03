import { useState } from "react"


export default function UserInput ({onChangeInput, userInput}) {




    return ( <section   id="user-input">
        <div className="input-group">
            <p>
                <label >Inital Inversment</label>
                <input
                    value={userInput.initialInvestment}
                    type="number" 
                    onChange={(event) => onChangeInput('initialInvestment',event.target.value)}
                />
            </p>
            <p>
                <label >Annual Inversment</label>
                <input 
                    value={userInput.annualInvestment}
                    type="number" 
                    onChange={(event) => onChangeInput('annualInvestment',event.target.value)}
                />
            </p>
        </div>
        
        <div className="input-group">
            <p>
                <label >Expected Return</label>
                <input 
                    value={userInput.expectedReturn}
                    type="number" 
                    onChange={(event) => onChangeInput('expectedReturn',event.target.value)}
                />
            </p>
            <p>
                <label >Duration</label>
                <input 
                    value={userInput.duration}
                    type="number" 
                    onChange={(event) => onChangeInput('duration',event.target.value)} 
                />
            </p>
        </div>
        
        
     

     

    </section>

    )
}