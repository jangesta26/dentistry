import React from 'react';

const Video = () => {
  return (
    <div 
      style={{ 
        position: 'relative', 
        paddingBottom: '56.25%', // 16:9 aspect ratio
        height: 0,
        overflow: 'hidden',
        width: '100%',
        marginTop: '20px', // Add margin to separate from content above
      }}
      className='rounded-md'
    >
      <iframe
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%' 
        }}
        src="https://www.youtube.com/embed/69Uvrc0eu0c"
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
