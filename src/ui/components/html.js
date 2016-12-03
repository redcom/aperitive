// @flow

import React from 'react';

type Props = {
  content: string,
  state: Object,
  assetMap: Object,
  aphroditeCss: Object,
};

const Html = ({ content, state, assetMap, aphroditeCss }: Props) => {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>
      Aperitive isomorphic fullstack based on: graphql, apollo-client, apollo-server, react, webpack
      </title>
      {!__DEV__ &&
        <link
          rel="stylesheet"
          type="text/css"
          href={`/assets/${assetMap['bundle.css']}`}
        />
      }
      {__DEV__ &&
        <style dangerouslySetInnerHTML={{ __html:
          require('../styles.scss')._getCss(),
        }}/>
      }
      <link rel="shortcut icon" href="/favicon.ico"/>
      <style data-aphrodite>{aphroditeCss.content}</style>
    </head>
    <body>
    <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
    <script
      dangerouslySetInnerHTML={{ __html: `window.__APOLLO_STATE__=${JSON.stringify(state)};` }}
      charSet="UTF-8"
    />
    <script src={`/assets/${assetMap['vendor.js']}`} charSet="utf-8" />
    <script src={`/assets/${assetMap['bundle.js']}`} charSet="utf-8" />
    </body>
    </html>
  );
};

export default Html;
