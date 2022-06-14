import React, { useEffect, useState } from "react";
import { AppContainer, ChartBar, Header, Line, Main } from "./style";
import DATA from "./data.json";

function App() {
  const thisWeek = [
    DATA[0],
    DATA[1],
    DATA[2],
    DATA[3],
    DATA[4],
    DATA[5],
    DATA[6],
  ];
  const [CurrentBallance, setCurrentBallance] = useState(921.48);
  const [TotalThisMonth, setTotalThisMonth] = useState(478.33);
  const [FromMonth, setFromMonth] = useState(+2.4);

  const heightValue = [...thisWeek].sort((a, b) => {
    return b.amount - a.amount;
  })[0];

  const countTotalThisMonth = (array) => {
    let total = 0;
    array.forEach((item) => (total = total + item.amount));
    return total;
  };

  useEffect(() => {
    setTotalThisMonth(countTotalThisMonth(DATA));
    setTotalThisMonth(478.33);
    setCurrentBallance(921.48);
    setFromMonth(+2.4);
  }, []);

  return (
    <AppContainer>
      <Header>
        <div className="left">
          <p>My balance</p>
          <h1>${CurrentBallance}</h1>
        </div>
        <div className="right">
          <img src="/logo.svg" alt="logo" />
        </div>
      </Header>
      <Main>
        <h1>Spending - Last 7 days</h1>
        <div className="chart">
          {React.Children.toArray(
            thisWeek.map((data) => (
              <ChartBar
                className={data.amount === heightValue.amount && "active"}
                height={(data.amount / heightValue.amount) * 100}
              >
                <div className="bar_amount">${data.amount}</div>
                <div className="bar_day">{data.day}</div>
              </ChartBar>
            ))
          )}
        </div>
        <Line />
        <div className="bottom">
          <div className="bottom_left">
            <p>Total this month</p>
            <h2>${TotalThisMonth}</h2>
          </div>
          <div className="bottom_right">
            <h3>{FromMonth}%</h3>
            <p>from last month</p>
          </div>
        </div>
      </Main>
    </AppContainer>
  );
}

export default App;
