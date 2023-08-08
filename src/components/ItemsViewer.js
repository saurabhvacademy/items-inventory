import React, { useState } from 'react';
import ShowGrid from "../components/UI/Grid";
import './itemsViewer.css'



function ItemsViewer(props) {
    let items = props.data?props.data:[];
    let gridConfig = {
        cols: [
          {
            key: 'name',
            heading: 'Name'
          },
          {
            key: 'HSN',
            heading: 'HSN'
          },
          {
            key: 'totalBaughtCount',
            heading: 'Items Bought'
          },
          {
            key: 'totalSoldCount',
            heading: 'Items Sold'
          },
          {
            key: 'costPrice',
            heading: 'CP'
          },
          {
            key: 'salePrice',
            heading: 'SP'
          },
          {
            key: 'unitLabel',
            heading: 'Unit'
          }
        ]
      }
    return <div>
        <div className="gridContainer"><ShowGrid data={items} gridConfig={gridConfig}></ShowGrid></div>
    </div>

}

export default ItemsViewer;