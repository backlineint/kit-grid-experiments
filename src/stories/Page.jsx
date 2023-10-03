import React from 'react';

import Grid from '../Grid.jsx';

import '../index.css';
import './page.css';

const Row = ({children}) => {
  return(
    <section className="px-4 sm:px-6 lg:px-12">
      {children}
    </section>
  );
}

export const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <>
    <Grid
      // optional: default is `true`
      visibleByDefault={true}
      //
      // Sets of columns for each breakpoint
      // In this example the mobile columns have outside margin and borders
      // The others will touch to the outer edges of the window
      cols={[
        {
          breakpoint: `default`,
          columns: 6,
          className: `mx-4 border-l border-r border-red-500`,
        },
        { breakpoint: `sm`, columns: 12, className: `mx-6 border-l border-r border-red-500` },
        // { breakpoint: `md`, columns: 12, className: `` },
        { breakpoint: `lg`, columns: 12, className: `mx-12 border-l border-r border-red-500` },
        // { breakpoint: `xl`, columns: 12, className: `` },
        // { breakpoint: `2xl`, columns: 12, className: `` },
      ]}
    />
    <article>
      <nav className="px-4 sm:px-6 lg:px-12">Nav</nav>
      <Row>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </Row>
    </article>
    </>
  );
};
