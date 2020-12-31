import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render () {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        </Head>
        <body>
          {/* GOOGLE TAG MANAGER */}
          {/* <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5Z75ZBR"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            >
            </iframe>
          </noscript> */}
          {/* END GOOGLE TAG MANAGER */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
