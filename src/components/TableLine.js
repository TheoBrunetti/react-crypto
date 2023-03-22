import React from "react";

const TableLine = ({ coin, index }) => {
    return (
        <div className="table-line">
            <div className="infos-container">
                <p>{index + 1}</p>
                <div className="img">
                    <img src={coin.image} height="20" alt="logo" />
                </div>
                <div className="infos">
                    <div className="chart-img">
                        <img src="./assets/chart-icon.svg" alt="chart-icon" />
                    </div>
                    <h4>{coin.name}</h4>
                    <span>- {coin.symbol.toUpperCase()}</span>
                </div>
            </div>
        </div>
    );
};

export default TableLine;
