import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  StackLayout,
} from "@progress/kendo-react-layout";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import {
  Chart,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartValueAxis,
  ChartValueAxisItem,
} from "@progress/kendo-react-charts";

import { process } from "@progress/kendo-data-query";

import React, { useState } from "react";
import myData from "../resources/netflix_dataset.json";
import DonutData from "../resources/donut-data.json";
// const data = [1, 1, 2, 3, 5, 8, 13];
const chartData = [
  { name: "fibonacci", data: [1, 1, 2, 3, 5, 8, 13] },
  { name: "square", data: [1, 4, 9, 16, 25, 36, 49] },
];
function Home() {
  const [dataState, setDataState] = useState({ take: 10, skip: 0 });
  return (
    <div id="home" className="home-page">
      <StackLayout>
        <div className="k-flex-70">
          <Card className="card-container">
            <CardHeader>
              <CardTitle>Chart A</CardTitle>
            </CardHeader>
            <CardBody>
              <Chart>
                <ChartValueAxis>
                  <ChartValueAxisItem
                    title={{ text: "Values" }}
                    min={0}
                    max={60}
                  />
                </ChartValueAxis>
                <ChartCategoryAxis>
                  <ChartCategoryAxisItem categories={[1, 2, 3, 4, 5, 6, 7]} />
                </ChartCategoryAxis>
                <ChartSeries>
                  {chartData.map((item, index) => (
                    <ChartSeriesItem
                      key={index}
                      tooltip={{ visible: true }}
                      data={item.data}
                      name={item.name}
                    />
                  ))}
                </ChartSeries>
              </Chart>
            </CardBody>
          </Card>
        </div>
        <div className="k-flex-30">
          <Card className="card-container">
            <CardHeader>
              <CardTitle>Chart b</CardTitle>
            </CardHeader>
            <CardBody>
              <Chart>
                <ChartSeries>
                  <ChartSeriesItem
                    type="donut"
                    data={DonutData}
                    field="share"
                    categoryField="kind"
                    tooltip={{ visible: "true" }}
                  >
                    <ChartSeriesLabels
                      color="white"
                      background="none"
                      content={(e) => e.category}
                    />
                  </ChartSeriesItem>
                </ChartSeries>
                <ChartLegend visible={false} />
              </Chart>
            </CardBody>
          </Card>
        </div>
      </StackLayout>
      <Card className="card-container">
        <CardHeader>
          <CardTitle>Grid Data</CardTitle>
        </CardHeader>
        <CardBody>
          <Grid
            style={{ height: "500px" }}
            data={process(myData, dataState)}
            {...dataState}
            onDataStateChange={(e) => {
              setDataState(e.dataState);
            }}
            pageable={true}
            sortable={true}
            filterable={true}
          >
            <GridColumn field="type" title="Type" filterable={false} />
            <GridColumn field="name" title="Name" />
            <GridColumn field="genre" title="Genre" />
            <GridColumn field="released_at" title="Date" filter="date" />
            <GridColumn
              field="imdb_rating"
              title="IMDB Rating"
              filter="numeric"
            />
          </Grid>
        </CardBody>
      </Card>
    </div>
  );
}

export default Home;
