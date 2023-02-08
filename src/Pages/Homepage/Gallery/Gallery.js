import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Image2 from '../../../Assets/Images/image2.jpg'
import Image6 from '../../../Assets/Images/image6.jpg'
import Image13 from '../../../Assets/Images/image13.jpg'
import Image15 from '../../../Assets/Images/image15.jpg'
import Image5 from '../../../Assets/Images/image5.jpg'
import Image7 from '../../../Assets/Images/image7.jpg'
import Image8 from '../../../Assets/Images/image8.jpg'
import Image10 from '../../../Assets/Images/image10.jpg'
import Image14 from '../../../Assets/Images/image14.jpg'
import Image16 from '../../../Assets/Images/image16.jpg'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: "100%", height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: Image2,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: Image8,
    title: '2',
  },
  {
    img: Image10,
    title: '3',
  },
  {
    img: Image6,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: "https://swall.teahub.io/photos/small/279-2793542_thumb-image-banner-beauty-parlour-images-hd.png",
    title: '5',
    cols: 2,
  },
  {
    img: Image15,
    title: '6',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: Image7,
    title: '7',
  },
  {
    img: Image14,
    title: '8',
  },
  {
    img: Image13,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: Image5,
    title: '9',
  },
  {
    img: Image16,
    title: '10',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRNnv_M73cUZOwCukWXdx15Suc_OiJsqjZ9A&usqp=CAU',
    title: '11 ',
    cols: 2,
  },
];