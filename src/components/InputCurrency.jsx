import React, { useState, useEffect } from 'react'
import axios from 'axios'

const InputCurrency = () => {
    const [inputCurrency, setInputCurrency] = useState('')
    const [outputCurrency, setOutputCurrency] = useState('')
    const [amount, setAmount] = useState('')
    const [result, setResult] = useState(null)
    const [rates, setRates] = useState(null)
    const apiKey = import.meta.env.VITE_API_KEY

    useEffect(() => {
        const fetchRates = async () => {
            if (!inputCurrency || !outputCurrency) return;
            
            try {
                const response = await axios.get('https://api.freecurrencyapi.com/v1/latest', {
                    params: {
                        apikey: apiKey,
                        base_currency: inputCurrency,
                        currencies: outputCurrency
                    }
                });
                setRates(response.data.data);
            } catch (error) {
                console.error('Error fetching currency rates:', error);
            }
        };

        fetchRates();
    }, [inputCurrency, outputCurrency, apiKey]);

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (inputCurrency && outputCurrency && amount && rates) {
            const rate = rates[outputCurrency];
            const convertedAmount = amount * rate;
            setResult({
                from: amount,
                fromCurrency: inputCurrency,
                to: convertedAmount.toFixed(2),
                toCurrency: outputCurrency
            });
        } else {
            alert('Please fill all fields and wait for rates to load');
        }
    }

    return (
        <div className='text-white'>
            <form onSubmit={handleSubmit}>
                <div className='text-white w-full flex flex-col justify-start items-center'>
                    <h1>Select the Currency you wish to convert</h1>
                    <select 
                        value={inputCurrency} 
                        onChange={(e) => setInputCurrency(e.target.value)} 
                        className='mt-5 w-full rounded bg-slate-500 outline-none p-1'
                    >
                        <option value='' disabled>Select the Currency</option>
                        <option value="USD">USD - United States Dollar</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="JPY">JPY - Japanese Yen</option>
                        <option value="GBP">GBP - British Pound Sterling</option>
                        <option value="AUD">AUD - Australian Dollar</option>
                        <option value="CAD">CAD - Canadian Dollar</option>
                        <option value="CHF">CHF - Swiss Franc</option>
                        <option value="CNY">CNY - Chinese Yuan</option>
                        <option value="HKD">HKD - Hong Kong Dollar</option>
                        <option value="NZD">NZD - New Zealand Dollar</option>
                        <option value="SEK">SEK - Swedish Krona</option>
                        <option value="SGD">SGD - Singapore Dollar</option>
                        <option value="INR">INR - Indian Rupee</option>
                        <option value="RUB">RUB - Russian Ruble</option>
                        <option value="ZAR">ZAR - South African Rand</option>
                        <option value="BRL">BRL - Brazilian Real</option>
                        <option value="MXN">MXN - Mexican Peso</option>
                        <option value="KRW">KRW - South Korean Won</option>
                        <option value="TRY">TRY - Turkish Lira</option>
                        <option value="AED">AED - United Arab Emirates Dirham</option>
                    </select>
                    
                    <input 
                        type='number' 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder='Enter the Amount' 
                        className='mt-5 w-full p-1 rounded bg-slate-500 text-white outline-none' 
                    />
                    
                    <h1 className='mt-10'>Convert your Currency Into</h1>
                    <select 
                        value={outputCurrency}
                        onChange={(e) => setOutputCurrency(e.target.value)}
                        className='mt-5 w-full rounded bg-slate-500 outline-none p-1'
                    >
                        <option value='' disabled>Select the Currency</option>
                        <option value="USD">USD - United States Dollar</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="JPY">JPY - Japanese Yen</option>
                        <option value="GBP">GBP - British Pound Sterling</option>
                        <option value="AUD">AUD - Australian Dollar</option>
                        <option value="CAD">CAD - Canadian Dollar</option>
                        <option value="CHF">CHF - Swiss Franc</option>
                        <option value="CNY">CNY - Chinese Yuan</option>
                        <option value="HKD">HKD - Hong Kong Dollar</option>
                        <option value="NZD">NZD - New Zealand Dollar</option>
                        <option value="SEK">SEK - Swedish Krona</option>
                        <option value="SGD">SGD - Singapore Dollar</option>
                        <option value="INR">INR - Indian Rupee</option>
                        <option value="RUB">RUB - Russian Ruble</option>
                        <option value="ZAR">ZAR - South African Rand</option>
                        <option value="BRL">BRL - Brazilian Real</option>
                        <option value="MXN">MXN - Mexican Peso</option>
                        <option value="KRW">KRW - South Korean Won</option>
                        <option value="TRY">TRY - Turkish Lira</option>
                        <option value="AED">AED - United Arab Emirates Dirham</option>
                    </select>
                    
                    <button 
                        type="submit"
                        className='py-1 px-3 hover:bg-slate-400 rounded bg-slate-500 mt-7'
                    >
                        CONVERT
                    </button>
                </div>
            </form>
            
            {result && (
                <div className='mt-20 w-full flex justify-center items-center text-sm'>
                    <h3 className='p-1 rounded bg-slate-500'>
                        {result.to} {result.toCurrency}
                    </h3>
                </div>
            )}
        </div>
    )
}

export default InputCurrency