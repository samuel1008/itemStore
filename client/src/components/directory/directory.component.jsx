import React, { useState }from 'react';

//import menu item component
import '../menu-item/menu-item.component';

//import styles
import './directory.styles.css';
import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {

  const itemData = [
    {
      title: 'First Data Global',
      imageUrl: 'https://picsum.photos/id/1015/3000/2000',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'Chase Paymentech',
      imageUrl: 'https://picsum.photos/id/1016/1922/1280',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'AmexDirect',
      imageUrl: 'https://picsum.photos/id//1019/2736/1824',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'CtV',
      imageUrl: 'https://picsum.photos/id/1041/2592/1458',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'First Data Nashville',
      imageUrl: 'https://picsum.photos/id/1042/1728/2592',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ];
  

  const dsiplayItemData = itemData.map(({title, imageUrl, id, size}) => (

    <MenuItem key={id} title={title} imageUrl={imageUrl}  size={size}/>

  ))


  return (
    <div className='directory-menu'>    
      {dsiplayItemData}
    </div>
  )

}

export default Directory;