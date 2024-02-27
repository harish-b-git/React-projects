import { useState } from 'react';
import QRCode from 'react-qr-code';

export default function QrCodeGenerator(){

    const[qrCode,setQrCode] =useState('')
    const[input,setInput] = useState('')

    function handleGenerateQrCode(){
        setQrCode(input)
        setInput('')
    }
    return<div style={{display: 'flex',margin:"30px"}}>
        
        <div>
        <h1>QR Code Generator</h1>
            <input onChange={(e) => setInput(e.target.value)} type="text" name="qr-code" value={input} placeholder="Enter your value here" />
            &nbsp;
            <button disabled={input && input.trim() !== ''? false : true} onClick={handleGenerateQrCode}>Generate</button>
        </div>
        <div style={{marginLeft: '20px'}}>
            <QRCode 
            id='qr-code-value'
            value={qrCode}
            size={300}
            bgColor='#fff'
            />
        </div>
    </div>
}