import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            squares : Array(9).fill(null),
            isNextX: true
        }
    }
    renderSquare(i) {
        return (
            <Square value={this.state.squares[i]}
        onClick = {() => this.handleClick(i)} />
        )
    }
    
    handleClick = (i) => {
        //복사본 생성
        const squares = this.state.squares.slice();
        squares[i] = this.state.isNextX ? 'X' : 'O';
        this.setState({
            squares: squares,
            isNextX: !this.state.isNextX
        });
        
    }

    render() {
        const status = 'Next player: ' + (this.state.isNextX ? 'X' : 'O');
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;