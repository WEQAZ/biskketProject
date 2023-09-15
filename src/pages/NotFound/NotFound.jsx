import React from 'react'
import {useLocation} from 'react-router-dom';

const NotFound = () => {
    const location = useLocation();
  return (
    <div>
      NOT FOUND 
      <div>
        {
            location.pathname
        }
      </div>
    </div>
  )
}

export default NotFound
