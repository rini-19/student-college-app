import React, { Component } from "react";
import axios from "axios";
import Chart from "react-apexcharts";

class ChartByCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    await axios
      .get("http://localhost:5000/api/college_byCourses")
      .then((res) => {
        this.setState({
          labels: res.data["courses"],
          series: res.data["count"],
        });
      })
      .catch((err) => {
        console.log(err, "Error in loading data");
      });
  };

  render() {
    const data = {
      series: this.state.series,
      options: {
        labels: this.state.labels,
        title: {
          text: "Chart by Courses",
          align: "left",

          style: {
            fontSize: "20px",
            fontWeight: "bold",
            color: "#263238",
          },
        },

        responsive: [
          {
            breakpoint: 863,
            options: {
              chart: {
                width: 500,
              },
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 450,
            options: {
              chart: {
                width: 400,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };

    return (
      <div>
          {/* <Typography color="textSecondary" align="center">
                in courses
            </Typography> */}
        {this.state.labels && this.state.series && (
          <div className="donut">
            <Chart
              options={data["options"]}
              series={data["series"]}
              type="donut"
              width="600"
            />
          </div>
        )}
      </div>
    );
  }
}
export default ChartByCourse;