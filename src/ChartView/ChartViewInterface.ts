
export interface ChartObjectInterface {
    objectId: string
    value: string|number;
}

export interface ChartViewInterface {
    data: ChartObjectInterface[];
}