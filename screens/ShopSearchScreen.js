import React from 'react';
import ProductListBlock from '../components/ProductListBlock';
import useWindowDimensions from '../utils/useWindowDimensions';
import { ScreenContainer, withTheme } from '@draftbit/ui';

const ShopSearchScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      scrollable={false}
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
    >
      <ProductListBlock />
    </ScreenContainer>
  );
};

export default withTheme(ShopSearchScreen);
