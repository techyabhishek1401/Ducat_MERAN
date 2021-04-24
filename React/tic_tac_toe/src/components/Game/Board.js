import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import Square from './Suqare'
export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null)); // [null,O,null,null,null,null,null,null,null,]
    const [isXNext, setIsXNext] = useState(false);
    const clicked = (id) => {
        console.log("id:", id)
        let squares_copy = [...squares];
        squares_copy[id] = isXNext ? 'X' : '0';
        setIsXNext(!isXNext);
        setSquares(squares_copy);
        console.log("squares:", squares_copy)
        setTimeout(() => findWinner(), 30)

    };

    const findWinner = () => {

        let winner;
        let square_arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]];
        for (let i = 0; i < square_arr.length; i++) {
            let [a, b, c] = square_arr[i];
            if (squares[a] && squares[b] && squares[c])
                if (squares[a] == squares[b] && squares[b] == squares[c] && squares[a] == squares[c]) {
                    winner = squares[a]
                    alert(`${winner} is a winner`)
                }
        }
    }




    return (
        <div className="board">
            <Row>
                <Col className="border"><Square num={squares[0]} index="0" onClicked={clicked} /></Col>
                <Col className="border"><Square num={squares[1]} index="1" onClicked={clicked} /></Col>
                <Col className="border"><Square num={squares[2]} index="2" onClicked={clicked} /></Col>
            </Row>
            <Row>
                <Col className="border"><Square num={squares[3]} index="3" onClicked={clicked} /></Col>
                <Col className="border"><Square num={squares[4]} index="4" onClicked={clicked} /></Col>
                <Col className="border"><Square num={squares[5]} index="5" onClicked={clicked} /></Col>
            </Row>  <Row>
                <Col className="border"><Square num={squares[6]} index="6" onClicked={clicked} /></Col>
                <Col className="border"><Square num={squares[7]} index="7" onClicked={clicked} /></Col>
                <Col className="border"><Square num={squares[8]} index="8" onClicked={clicked} /></Col>
            </Row>

        </div>
    )
}
