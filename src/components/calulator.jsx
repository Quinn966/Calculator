import React from 'react';
import './calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { useState } from 'react';

export default function Calculator() {
    const [num, setNum] = useState('')
    const [oldNum, setOldNum] = useState('')
    const [operator, setOperator] = useState('')
    const newOldNum = useState('')


    function inputNum(e) {
        let input = e.target.value
        if (num === 0) {
            setNum(input)
        } else {
            setNum(num + input)
        }        
    }

    function clear() {
        setNum(0)
    }

    function clear2() {
        setOldNum(0)
    }

    function percentage() {
        setNum(num / 100)
    }

    function positiveNegative() {
        if (num > 0) {
            setNum(-num)
        } else {
            setNum(Math.abs(num))
        }
    }

    function operatorHandler(e) {
        let operator = e.target.value
        setOperator(operator)
        setOldNum(num)
        setNum(0)
    }

    function calculate() {
        if (operator === '/') {
            setNum(parseFloat(oldNum) / parseFloat(num))
        } else if (operator === '*') {
            setNum(parseFloat(oldNum) * parseFloat(num))
        } else if (operator === '-') {
            setNum(parseFloat(oldNum) - parseFloat(num))
        } else if (operator === '+') {
            setNum(parseFloat(oldNum) + parseFloat(num))
        }


        console.log(oldNum)
        console.log(num)
        console.log(operator)
    }


    function del() {
        const del = num.substring(0, num.length - 1);
        setNum(del)
    }



    return (
        <div>
            <Box m={5} />
            <Container maxWidth='xs'>
                <div className='wrapper'>
                    <Box m={9} />
                    <h2 className='display2'>{oldNum + operator + num}</h2>
                    <h1 className='display'>{num}</h1>
                    <button className='AC' onClick={clear} onDoubleClick={clear2}>AC</button>
                    <button className='special' onClick={positiveNegative}>+/-</button>
                    <button className='special' onClick={percentage}>%</button>
                    <button className='special' onClick={operatorHandler} value={'/'}>÷</button>
                    <button className='numbers' onClick={inputNum} value={7}>7</button>
                    <button className='numbers' onClick={inputNum} value={8}>8</button>
                    <button className='numbers' onClick={inputNum} value={9}>9</button>
                    <button className='special' onClick={operatorHandler} value={'*'}>x</button>
                    <button className='numbers' onClick={inputNum} value={4}>4</button>
                    <button className='numbers' onClick={inputNum} value={5}>5</button>
                    <button className='numbers' onClick={inputNum} value={6}>6</button>
                    <button className='special' onClick={operatorHandler} value={'-'} >-</button>
                    <button className='numbers' onClick={inputNum} value={1}>1</button>
                    <button className='numbers' onClick={inputNum} value={2}>2</button>
                    <button className='numbers' onClick={inputNum} value={3}>3</button>
                    <button className='special' onClick={operatorHandler} value={'+'}>+</button>
                    <button className='numbers' onClick={inputNum} value={0}>0</button>
                    <button className='numbers' onClick={inputNum} value={'.'}>,</button>
                    <button className='numbers' onClick={del}>⌫</button>
                    <button className='Equal' onClick={calculate} value={'='}>=</button>
                </div>
            </Container>
        </div>

    )
}


