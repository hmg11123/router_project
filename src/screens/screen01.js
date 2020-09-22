import React from "react";
import { NavLink } from "react-router-dom";

class screen01 extends React.Component {
    render() {
        return (
            <div className="screen01">
                <div className="screen01_title">
                    <span>메뉴</span>
                    <span>가격</span>
                </div>
                <div className="screen01_menu01">
                    <NavLink to="/screen02">
                        <span>헤이즐넛</span>
                        <span>4000원</span>
                    </NavLink>
                </div>
                <div className="screen01_menu02">
                    <NavLink to="/screen03">
                        <span>아이스아메리카노</span>
                        <span>5000원</span>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default screen01;