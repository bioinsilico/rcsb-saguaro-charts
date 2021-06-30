import * as React from "react";
import {VictoryAxis, VictoryChart, VictoryHistogram, VictoryTheme} from "victory";
import {ReactNode} from "react";
import {ChartViewInterface} from "./ChartViewInterface";

export class HistogramChartView extends React.Component <ChartViewInterface,ChartViewInterface> {

    readonly state: ChartViewInterface = {...this.props};

    constructor(props: ChartViewInterface) {
        super(props);
    }

    private data(): {x:number;}[]{
        return this.state.data.map(d=>({x: d.value as number}));
    }

    render():ReactNode {
        const histogramData: {x:number;}[] = this.data()
        return (
            <VictoryChart>
                <VictoryHistogram
                    data={histogramData}
                    style={{
                        data: {
                            fill: "#5e94c3",
                            stroke: "#325880",
                            strokeWidth: 1
                        }
                    }}
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
