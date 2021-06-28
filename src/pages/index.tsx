import { Main } from "../components/Main";

// const isWeekDay = (numberDay: number) => numberDay <= 5;

// // const numberDay = new Date().getDay();
// // !!! Remove this hardcoded line in production
// const numberDay = 1;

const Index = () => {
  // return isWeekDay(numberDay) ? (
  //   <Main numberDay={numberDay} />
  // ) : (
  //   <WeekendMessage />
  // );
  return <Main />;
};

export default Index;
