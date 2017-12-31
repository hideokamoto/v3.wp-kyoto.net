import React from 'react';

// Semantic UI
import {
  Container,
} from 'semantic-ui-react';

// component
import Header from './Header';

const AppLayouts = (props) => {
  return (
    <div className="App">
      <Header />
      <Container>
        <main>
          {props.children}
        </main>
      </Container>
    </div>
  );
}

export default AppLayouts;