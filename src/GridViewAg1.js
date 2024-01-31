import React from 'react';

const GridView = ({ item }) => {
 return (
    <div className="grid-item">
      <img src={item.url} alt={item.title} />
    </div>
 );
};

export default GridView;