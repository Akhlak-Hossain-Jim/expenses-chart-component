import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  min-height: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 23px;
  @media (max-width: 768px) {
    padding: 67px 16px 66px;
    gap: 16px;
    min-height: 100vh;
  }
`;

export const Header = styled.header`
  background: var(--red);
  box-shadow: 0px 4px 15px 5px rgba(238, 236, 236, 0.71);
  border-radius: 20px;
  padding: 27px 39px 26px 32px;
  width: min(540px, 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  @media (max-width: 548px) {
    padding: 20px 24px 22px 20px;
    border-radius: 12px;
  }
  .left {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: var(--text-p);
    @media (max-width: 548px) {
      gap: 4px;
    }
    & > p {
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
      letter-spacing: -0.03em;
      text-transform: uppercase;
      @media (max-width: 548px) {
        font-size: 15px;
        line-height: 20px;
      }
    }
    & > h1 {
      font-weight: 700;
      font-size: 32px;
      line-height: 42px;
      @media (max-width: 548px) {
        font-size: 24px;
        line-height: 31px;
      }
    }
  }
  .right {
    width: 72px;
    @media (max-width: 548px) {
      width: 60px;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const Main = styled.main`
  background: var(--text-p);
  box-shadow: 0px 4px 15px 5px rgba(238, 236, 236, 0.71);
  border-radius: 20px;
  padding: 32px 40px 40px;
  width: min(540px, 100%);
  @media (max-width: 548px) {
    padding: 24px 20px;
  }
  h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    color: var(--d-brown);
    @media (max-width: 548px) {
      font-size: 24px;
      line-height: 31px;
    }
  }
  .chart {
    margin-top: 57px;
    margin-bottom: 60px;
    padding-top: 9px;
    height: 159px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: 17px;
    align-items: flex-end;
    @media (max-width: 548px) {
      grid-column-gap: 12px;
      margin-top: 44px;
      margin-bottom: 50px;
    }
  }
  .bottom {
    padding-top: 16px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    @media (max-width: 548px) {
      padding-top: 12px;
    }
    &_left {
      text-align: left;
      & > p {
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        letter-spacing: 0.01em;
        color: var(--m-brown);
        @media (max-width: 548px) {
          font-size: 15px;
          line-height: 20px;
        }
      }
      & > h2 {
        padding-top: 2px;
        font-weight: 700;
        font-size: 47px;
        line-height: 61px;
        letter-spacing: 0.01em;
        color: var(--d-brown);
        @media (max-width: 548px) {
          padding-top: 5px;
          font-size: 29px;
          line-height: 38px;
          letter-spacing: 0.02em;
        }
      }
    }
    &_right {
      text-align: right;
      padding-bottom: 8px;
      @media (max-width: 548px) {
        padding-bottom: 0px;
      }
      & > h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        text-align: right;
        letter-spacing: 0.01em;
        color: var(--d-brown);
        @media (max-width: 548px) {
          font-size: 15px;
          line-height: 20px;
        }
      }
      & > p {
        padding-top: 1px;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: var(--m-brown);
        @media (max-width: 548px) {
          font-size: 15px;
          line-height: 20px;
        }
      }
    }
  }
`;

export const ChartBar = styled.div`
  background: var(--red);
  height: ${(props) => `${props.height}%`};
  border-radius: 7px;
  position: relative;
  &.active {
    background: var(--cyan);
  }
  .bar_amount {
    display: none;
  }
  &:hover {
    background: var(--red-hover);
    &.active {
      background: var(--cyan-hover);
    }
    .bar_amount {
      display: flex;
      position: absolute;
      top: -48px;
      left: 50%;
      transform: translateX(-50%);
      padding: 8px 8px 9px;
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
      background-color: var(--d-brown);
      color: var(--text-p);
      border-radius: 6px;
    }
  }
  .bar_day {
    position: absolute;
    bottom: -28px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: var(--m-brown);
    @media (max-width: 548px) {
      bottom: -26px;
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export const Line = styled.div`
  margin: 16px 0;
  width: 100%;
  height: 2px;
  background: var(--line-bg);
  border-radius: 2px;
  @media (max-width: 548px) {
    margin: 12px 0;
  }
`;
