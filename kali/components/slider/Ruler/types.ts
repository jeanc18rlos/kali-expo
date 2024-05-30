export interface RNInfinityListSliderPropTypes {
  value: number;
  onValueChange: Function;
  renderThumb?: Function;
  thumbStyle?: Object;
  multiplicity: number;
  decimalPlaces?: number;
  arrayLength: number;
  scrollEnabled: boolean;
  mainContainerStyle?: Object;
  itemStyle?: Object;
  tenthItemStyle?: Object;
  initialPositionValue: number;
  maximumValue?: number;
  isDarkMode: boolean;
}

export interface RNInfinityListSliderState {
  width: number;
  items: Array<number>;
  oneItemWidth: number;
  value: number;
  isDarkMode: boolean;
}

export interface Element {
  index: number;
}
