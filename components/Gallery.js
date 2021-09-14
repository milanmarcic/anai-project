import ImageGallery from 'react-image-gallery';
import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    
    
  },
  {
    original: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
   
  },
  {
    original: 'https://images.unsplash.com/photo-1488345979593-09db0f85545f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    
  },
  {
    original: 'https://images.unsplash.com/photo-1483137140003-ae073b395549?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    
  },
  {
    original: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80',
    
  },
  {
    original: 'https://images.unsplash.com/photo-1552373438-9be21778554d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    
  },
  {
    original: 'https://images.unsplash.com/photo-1583106617217-406e2c5656fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    
  },
  {
    original: 'https://images.unsplash.com/photo-1554424518-336ec861b705?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80',
    
  },
  {
    original: 'https://images.unsplash.com/photo-1483691278019-cb7253bee49f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    
  },
];



function Gallery() {
  
  
  return (
    <div className="pt-8 bg-gray-100  pb-8">
      
      <ImageGallery showThumbnails={true} items={images} 
      showPlayButton={false}
      showBullets={true}
      showThumbnails={false}
      autoPlay={true}/>
      
      </div>
      
    );
  }

  
export default Gallery;