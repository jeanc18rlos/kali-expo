import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 130,
    position: 'relative'
  },
  middleContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    justifyContent: 'center'
  },
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  defaultThumb: {
    position: 'absolute',
    left: '50%',
    borderLeftWidth: 1,
    height: 140,
    alignSelf: 'center',
    top: -10
  },
  mainBlock: {
    borderRightWidth: 2,
    height: 130,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  lastBlock: {
    borderRightWidth: 0
  },
  subBlock: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    flexDirection: 'row'
  },
  subBlockLine: {
    borderRightWidth: 1,
    height: '100%'
  },
  blocksContainer: {
    flexDirection: 'row'
  }
});

export const darkStyles = StyleSheet.create({
  defaultThumb: {
    borderColor: '#fff'
  },
  mainBlock: {
    borderColor: '#636363'
  },
  subBlock: {
    borderColor: '#636363'
  },
  subBlockLine: {
    borderColor: '#636363'
  }
});

export const lightStyles = StyleSheet.create({
  defaultThumb: {
    borderColor: '#000'
  },
  mainBlock: {
    borderColor: '#DBDBDB'
  },
  subBlock: {
    borderColor: '#DBDBDB'
  },
  subBlockLine: {
    borderColor: '#DBDBDB'
  }
});

export default styles;
