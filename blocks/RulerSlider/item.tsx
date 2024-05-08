import * as React from 'react';
import { View } from 'react-native';

import styles from './styles';

type ItemPropTypes = {
  oneColumnSize: number;
  borderWidth: number;
  index: number;
  style?: Object;
  tenthItemStyle?: Object;
};

class Item extends React.PureComponent<ItemPropTypes> {
  static defaultProps = {
    style: null,
    tenthItemStyle: null
  };

  render() {
    const { oneColumnSize, borderWidth, index, style, tenthItemStyle } =
      this.props;

    return (
      <View
        style={[
          styles.subBlock,
          { width: oneColumnSize, borderRightWidth: borderWidth },
          (index + 1) % 10 === 0 ? { height: 130 } : { height: 75 },
          style,
          (index + 1) % 10 === 0 ? tenthItemStyle : null
        ]}
      />
    );
  }
}

export default Item;
