import React from "react"
import coffee02 from "../image/coffee02.jpg"
import { NavLink } from "react-router-dom";

class screen03 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prodect: "아이스 아메리카노",
            basket: [],
            amount: 0
        }
    }
    render() {
        const { basket, amount } = this.state;
        return (
            <div className="screen03">

                <img src={coffee02} />
                <div className="bottom-bar">
                    <div className="buy_input">
                        <button onClick={() => this._basket(0)}>장바구니에 담기</button>
                        <button onClick={this._buy}>사기</button>
                        <NavLink to="/">돌아가기</NavLink>
                    </div>
                    <div className="board">
                        <ul>
                            <li className="menu">메뉴</li>
                            <li className="state">{basket}</li>
                        </ul>
                        <ul>
                            <li className="amount">수량</li>
                            <li className="state">{amount}개</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    _basket = async () => {
        const { basket, prodect, amount } = this.state;
        if (basket != prodect) {
            await this.setState({
                basket: prodect
            })
        }
        await this.setState((state) => {
            return { amount: this.state.amount + 1 }
        })

        alert("장바구니에 추가되었습니다")
    }

    _buy = async () => {
        const { basket, prodect, amount } = this.state;
        if (0 < basket.length) {
            await alert(`${prodect} ${amount}개 구매 되었습니다`)
            this.setState({
                basket: [],
                prodect: "해아이스 아메리카노",
                amount: 0
            })
            this.props.history.push(`/`)
        } else {
            alert("장바구니에 담은것이 없습니다")
        }
    }

}

export default screen03;