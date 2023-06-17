import { ResponsiveBar } from "@nivo/bar";

const theme = {
  axis: {
    ticks: {
      text: {
        fontFamily: "'DM Sans',sans-serif",
        fontSize: 12,
        fill: "hsl(28, 10%, 53%)",
      },
    },
  },
};

const BarChart = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={["amount"]}
    indexBy="day"
    enableLabel={false}
    enableGridY={false}
    axisLeft={null}
    margin={{ top: 10, right: -15, bottom: 30, left: -15 }}
    padding={0.3}
    borderRadius={4}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={({ data }) => data.color}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 0,
      tickPadding: 12,
      tickRotation: 0,
      legend: "",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    theme={theme}
    isFocusable={true}
    role="application"
    ariaLabel="Expenses bar chart"
    tooltip={({ value }) => (
      <div
        style={{
          borderRadius: "8px",
          position: "absolute",
          top: "0px",
          right: "50%",
          transform: "translateX(50%) translateY(-115%)",
          padding: 10,
          color: "#fff",
          fontWeight: "bold",
          fontFamily: "'DM Sans',sans-serif",
          background: "hsl(25, 47%, 15%)",
        }}
      >
        ${value}
      </div>
    )}
  />
);

export default BarChart;
