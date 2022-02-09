import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataPointValues = props.data.map((dataPoint) => dataPoint.value);
  const maxValue = [...dataPointValues].reduce((a, b) => a + b, 0);

  return (
    <div className="chart">
      {props.data.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
