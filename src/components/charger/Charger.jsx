import React, {Suspense, useEffect} from 'react';
import Map from '../../common/components/map/Map';
import styles from './Charger.module.css';
import ChargerList from './ChargerListwWthPagination';

function Charger() {
  let data = [];
  useEffect(() => {
    console.log('Page is render!...');
    window.addEventListener('load', console.log('loaded...'));
  }, []);
  return (
    <>
      <div className={styles.chargerContainer}>
        <Suspense fallback={'Charger Loading...'}>
          <div className={styles.chargerList}>
            <ChargerList data={data} />
          </div>
        </Suspense>
      </div>
      <div>
        <Suspense fallback={'Map Loading...'}>
          <div className={styles.map}>
            <Map />
          </div>
        </Suspense>
      </div>
    </>
  );
}

export default Charger;
