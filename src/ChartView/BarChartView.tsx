import * as React from "react";
import {VictoryAxis, VictoryBar, VictoryChart, VictoryTheme} from "victory";
import {ReactNode} from "react";
import {ChartViewInterface} from "./ChartViewInterface";

type BarData = {categories:string[];values:{x: string, y:number}[];};
export class BarChartView extends React.Component <ChartViewInterface,ChartViewInterface> {

    readonly state: ChartViewInterface = {...this.props};

    constructor(props: ChartViewInterface) {
        super(props);
    }

    private dataByCategory(): BarData{
        const categories: string[] = Array.from(new Set(this.state.data.map(d=>d.value as string)));
        return {
            categories: categories,
            values: categories.map(c=>({
                x:c,
                y:this.state.data.filter(d=> d.value === c).length
            }))
        };
    }

    render():ReactNode {
        const barData: BarData = this.dataByCategory();
        return (
            <VictoryChart
                domainPadding={{ x: 60 }}
                padding={{left:75}}
            >
                <VictoryBar
                    barWidth={40}
                    style={{
                        data: {
                            fill: "#5e94c3",
                            stroke: "#325880",
                            strokeWidth: 1
                        }//5e94c3
                    }}
                    horizontal={true}
                    data={barData.values}
                />
                <VictoryAxis />
                <VictoryAxis
                    dependentAxis={true}
                    crossAxis={true}
                    style={{
                        grid: {
                            stroke: "#999999",
                            strokeDasharray: "1 3"
                        }
                    }}
                />
            </VictoryChart>
        );
    }

}