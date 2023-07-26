import React from 'react'

function ScreenComponent({ result, entries }) {

    return (
        <>
            <div className="screen">
                <p className="history">
                    <span className='equalSign'>=</span>
                    <span className='result' >{result}</span>
                </p>
                <textarea className='entries' readOnly value={entries}> </textarea>
            </div>
        </>
    )
}

export default ScreenComponent