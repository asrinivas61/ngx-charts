/// <reference types="core-js" />
import { EventEmitter, OnChanges } from '@angular/core';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { BaseChart } from '../common/base-chart.component';
export declare class AreaChart extends BaseChart implements OnChanges {
    dims: ViewDimensions;
    xSet: any;
    xDomain: any;
    yDomain: any;
    seriesDomain: any;
    xScale: any;
    yScale: any;
    transform: string;
    colors: Function;
    clipPathId: string;
    clipPath: string;
    scaleType: string;
    series: any;
    margin: number[];
    hoveredVertical: any;
    view: any;
    results: any;
    scheme: any;
    legend: any;
    state: any;
    customColors: any;
    xAxis: any;
    yAxis: any;
    autoScale: any;
    showXAxisLabel: any;
    showYAxisLabel: any;
    xAxisLabel: any;
    yAxisLabel: any;
    timeline: any;
    gradient: boolean;
    clickHandler: EventEmitter<{}>;
    ngOnChanges(): void;
    update(): void;
    getXDomain(): any[];
    getYDomain(): number[];
    getSeriesDomain(): any;
    getXScale(): any;
    getYScale(): any;
    getScaleType(values: any): string;
    isDate(value: any): boolean;
    updateDomain(domain: any): void;
    updateHoveredVertical(item: any): void;
    hideCircles(): void;
    click(data: any, series: any): void;
    trackBy(index: any, item: any): any;
    setColors(): void;
}