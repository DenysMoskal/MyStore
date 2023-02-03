import React from 'react';
import ContentLoader from 'react-content-loader';

const CartSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="14" y="328" rx="0" ry="0" width="200" height="18" />
    <rect x="19" y="282" rx="0" ry="0" width="200" height="55" />
    <rect x="19" y="4" rx="15" ry="15" width="200" height="300" />
  </ContentLoader>
);

export default CartSkeleton;
