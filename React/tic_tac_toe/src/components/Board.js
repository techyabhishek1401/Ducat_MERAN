import React, { useState } from 'react'
import Square from './Square';
import { Container, Row, Col } from 'react-bootstrap'
export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(false)

    return (
        <Container style={{ width: '300px' }}>
            <Row>
                <Col> <Square value={squares[0]} /></Col>
                <Col> <Square value={squares[1]} /></Col>
                <Col> <Square value={squares[2]} /></Col>
            </Row>
            <Row>
                <Col> <Square value={squares[3]} /></Col>
                <Col> <Square value={squares[4]} /></Col>
                <Col> <Square value={squares[5]} /></Col>
            </Row>
            <Row>
                <Col> <Square value={squares[6]} /></Col>
                <Col> <Square value={squares[7]} /></Col>
                <Col> <Square value={squares[8]} /></Col>
            </Row>

        </Container>
    )
}
