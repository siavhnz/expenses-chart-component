import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import data from "../../data.json";
import BarChart from "./BarChart";
import { useEffect, useState } from "react";

const Expenses = () => {
  const [barChartData, setBarChartData] = useState([]);

  useEffect(() => {
    //load data from a server instead
    const maxValue = Math.max(...data.map((item) => item.amount));
    
    const expensesData = data.map((item) => {
      return {
        ...item,
        color:
          item.amount === maxValue ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)",
      };
    });

    setBarChartData(expensesData);
  }, []);

  return (
    <div className="expense-chart mx-4 mt-16 md:mt-0 flex flex-col gap-y-4 overflow-hidden sm:w-[33.9rem] sm:gap-y-6">
      <div className="flex justify-between p-5 bg-soft-red rounded-xl sm:rounded-3xl sm:pt-6 sm:pb-7 sm:px-8">
        <div className="flex flex-col text-white font-DM-Sans gap-y-1 sm:gap-y-3">
          <p className="text-[0.94rem] sm:text-lg">My balance</p>
          <div className="font-bold font text-2xl sm:text-[2rem]">$921.48</div>
        </div>
        <div className="pr-1 pt-2 sm:pr-1 sm:pt-4">
          <Logo className="w-[3.75rem] sm:w-20" />
        </div>
      </div>
      <div className="bg-very-pale-orange rounded-xl p-5 pb-7 sm:rounded-3xl sm:px-10 sm:pt-8 sm:pb-11">
        <h1 className="font-DM-Sans text-dark-brown text-[1.55rem] leading-10 sm:text-[2rem] sm:font-bold">
          Spending - Last 7 days
        </h1>
        <div className="h-[14.2rem] pt-10 sm:pt-14 sm:h-[15.5rem] font-DM-Sans">
          {barChartData.length > 0 && <BarChart data={barChartData} />}
        </div>
        <div className="font-DM-Sans flex justify-between pt-5 border-t-2 border-t-medium-brown border-opacity-50 mt-6 sm:mt-8">
          <div className="flex flex-col gap-y-1 sm:gap-y-2 sm:pt-2">
            <p className="text-medium-brown text-[0.94rem] sm:text-lg">
              Total this month
            </p>
            <div className="text-dark-brown font-bold text-3xl sm:text-5xl">
              $478.33
            </div>
          </div>
          <div className="self-end -mb-1">
            <div className="text-right text-dark-brown font-bold text-sm sm:text-lg">
              +2.4%
            </div>
            <p className="text-medium-brown text-[0.94rem] sm:text-lg">
              from last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
