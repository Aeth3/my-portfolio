// components/Loader.js
import React from 'react';
import styles from './loader.module.css'; // Use a named import for CSS module
import { DNA } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={styles.loaderOverlay}> {/* Use the imported style */}
      <DNA
        visible={true}
        height="150"
        width="150"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
