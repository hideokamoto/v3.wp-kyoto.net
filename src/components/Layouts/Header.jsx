import React from 'react';

// Router
import {
  Link,
} from 'react-router-dom';

// Semantic UI
import {
  Divider,
  Header,
} from 'semantic-ui-react';

const AppHeader = (props) => {
  return (
    <div className="App-header">
      <Header
        as='h2'
        textAlign='center'
      >
        <Header.Content>
          <Link to="/">WP-Kyoto</Link>
        </Header.Content>
        <Header.Subheader>
          WordPressとかAWSのブログ
        </Header.Subheader>
      </Header>
      <Divider/>
    </div>
  );
}

export default AppHeader;