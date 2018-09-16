import React from 'react';
import GoogleMapReact from 'google-map-react';
import CSSModules from 'react-css-modules';
import styles from './css/map.css';

const GoogleMap = (props) => {
  return (
    <div style={{ height: '200px', width: '200px' }}>
      <GoogleMapReact
        // bootstrapURLKeys={ { key: 'AIzaSyAqTS_DsdWkkqZZfQNA19MuZwxJNBUA4qw'} }
        // zoom={11}
        // center={ 
        //   [53.95, 30.33] 
        // }
      >
      </GoogleMapReact>
    </div>
  );
};

export default CSSModules(GoogleMap, styles);
