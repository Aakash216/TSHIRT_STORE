import React from 'react';
import UserNavbar from "../core/userNavbar"

import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export
} from 'devextreme-react/pie-chart';

import { Chart, SeriesTemplate, CommonSeriesSettings, Title, Height } from 'devextreme-react/chart';

import { Loss, Growth } from './helper/data';

class userchart extends React.Component {
  constructor(props) {
    super(props);

    this.pointClickHandler = this.pointClickHandler.bind(this);
    this.legendClickHandler = this.legendClickHandler.bind(this);
  }

  render() {
    return (
      <div className="row">
         <div className="col-lg-12 col-md-12 col-sm-12">
      <UserNavbar/>
        <div className = "row">
            <div className= "col-lg-6 col-md-6 col-sm-6 mt-5">
       <PieChart
        id="" style={{width:"300px", height: "300px"}}
        dataSource={Loss}
        palette="Bright"
        title="Loss"

        onPointClick={this.pointClickHandler}
        onLegendClick={this.legendClickHandler}
      >
        <Series
          argumentField="country"
          valueField="area"
        >
          <Label visible={false}>
            <Connector visible={false} width={1} />
          </Label>
        </Series>

        <Size width={500} />
        <Export enabled={false} />
      </PieChart>
      </div>
       <div className="col-lg-6 col-md-6 col-sm-6 mt-5">
<Chart
id="chart" style={{width:"500px", height: "300px"}}
title="Growth"
palette="Soft"
dataSource={Growth}>
<CommonSeriesSettings
  argumentField="number"
  valueField="age"
  type="bar"
  ignoreEmptyPoints={true}
/>
<SeriesTemplate nameField="age" />
<Title
  
/>
</Chart>
</div>
</div>
</div>
</div>
    );
  }

  pointClickHandler(e) {
    this.toggleVisibility(e.target);
  }

  legendClickHandler(e) {
    let arg = e.target;
    let item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    this.toggleVisibility(item);
  }

  toggleVisibility(item) {
    item.isVisible() ? item.hide() : item.show();
  }
}

export default userchart;

