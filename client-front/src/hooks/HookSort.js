import React from 'react';

export const useSortGoods = (items = []) => {
  const [isDescSort, setIsDescSort] = React.useState(true);

  const sortedGoods = React.useMemo(() => {
    const sortebleGoods = [...items];

    sortebleGoods.sort((a, b) => {
      if (+a.price < +b.price) return isDescSort ? 1 : -1;
      if (+a.price > +b.price) return isDescSort ? -1 : 1;

      return 0;
    });
    return sortebleGoods;
  }, [items, isDescSort]);

  return {
    isDescSort,
    setIsDescSort,
    sortedGoods,
  };
};
