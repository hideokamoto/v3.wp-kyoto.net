import React from 'react';

// Semantic UI
import {
  Advertisement,
} from 'semantic-ui-react';

const AdAmazonLeaderBoard = (props) => {
  const search = props.search || 'WordPress';
  return (
    <Advertisement unit='leaderboard' centered>
      <iframe
        src={`https://rcm-fe.amazon-adsystem.com/e/cm?f=ifr&t=wp-kyoto-22&o=9&p=48&l=st1&mode=kindle-jp&search=${search}&fc1=000000&lt1=_top&lc1=A43907&bg1=FFFFFF`}
        width="728"
        height="90"
        scrolling="no"
        title={`show kindle book searched by ${search}.`}
      />
    </Advertisement>
  );
}

export default AdAmazonLeaderBoard;