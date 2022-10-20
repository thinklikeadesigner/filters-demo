import React from 'react';
import ListItem from './ListItem';
import './styles.css';

type Props = {
  list: any[];
};

const List = ({ list }: Props) =>
  // props: Props
  {
    return (
      <div className="list-wrap">
        {list.map((item: any) => (
          <ListItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    );
  };

export default List;
