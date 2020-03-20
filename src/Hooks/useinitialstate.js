import { useState, useEffect } from 'react';

function useinitialState(Api) {
    const [ videos, setViedos ] = useState([]);
  
    useEffect( () => {
      fetch(Api)
        .then(response => response.json())
        .then(data => setViedos(data));
    }, []);
    return videos;
}

export default useinitialState