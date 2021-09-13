import { Route } from "react-router-dom";

import React from "react";

function AppRoute (props) {
    const {page: Component, layout: Layout, ...rest} = props;
    return (
        <Route
          {...rest}
          render={(appProps) => {
            return Layout ? (
              <Layout {...appProps} {...rest}>
                {Component ? <Component {...appProps} {...rest} /> : null}
              </Layout>
            ) : Component ? (
              <Component {...appProps} />
            ) : null;
          }}
        />
      );
    
}

export default AppRoute;
