import * as React from "react";
import * as ReactDom from "react-dom";

import {ChartObjectInterface} from "./ChartView/ChartViewInterface";
import {PieChartView} from "./ChartView/PieChartView";
import {HistogramChartView} from "./ChartView/HistogramChartView";
import {BarChartView} from "./ChartView/BarChartView";

export enum ChartType {
    pie = "pie",
    histogram = "histogram",
    barplot = "barplot"
}

export class ChartPlot {
    private readonly elementId: string;
    private readonly data: ChartObjectInterface[];
    private readonly chartType: ChartType;
    constructor(elementId:string, chartType: ChartType, data: ChartObjectInterface[]) {
        this.elementId = elementId;
        this.data = data;
        this.chartType = chartType;
        this.plot();
    }

    private plot(): void{
        switch (this.chartType){
            case ChartType.pie:
                ReactDom.render(
                    <PieChartView data={this.data}/>,
                    document.getElementById(this.elementId)
                );
                break;

            case ChartType.histogram:
                ReactDom.render(
                    <HistogramChartView data={this.data}/>,
                    document.getElementById(this.elementId)
                );
                break;

            case ChartType.barplot:
                ReactDom.render(
                    <BarChartView data={this.data}/>,
                    document.getElementById(this.elementId)
                );
                break;
        }
    }
}