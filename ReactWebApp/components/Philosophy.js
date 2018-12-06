
import React from 'react';

import styles from './Philosophy.scss';

export default class Philosophy extends React.Component {

  render() {

    return (
      <div className={styles.default}>
        <div className={styles.belt}>
          <h3>philosophy.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in neque suscipit, auctor turpis nec, tristique nibh. Nullam a neque erat.</p>
          <p>Vivamus lectus velit, porttitor sed nisl id, aliquet sodales magna. Praesent non est id ligula hendrerit malesuada eget a arcu. In maximus viverra ex, a volutpat erat ultricies id. Aliquam a ante porttitor, laoreet sem et, venenatis lacus. Fusce volutpat leo felis, lacinia vestibulum metus tincidunt nec. Aenean ultricies in augue ut tincidunt. Ut sit amet tortor quis libero interdum interdum quis ut erat. Maecenas faucibus dictum leo mattis mollis.</p>
        </div>
      </div>
    )

  }

}