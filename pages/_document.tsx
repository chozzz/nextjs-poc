import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document<any> {
  static async getInitialProps( ctx: DocumentContext ) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage( {
        // Useful for wrapping the whole react tree
        enhanceApp: ( App ) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: ( Component ) => Component
      } );

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps( ctx );

    return initialProps;
  }

  render() {
    const { locale = 'en-us' } = this.props,
      htmlLang = ( ( locale || 'en-us' ) as string ).split( /[^a-zA-Z]/g ).filter( Boolean )
      .map( ( part ) => part.toLowerCase().trim() )
      .join( '-' );

    return (
      <Html lang={ htmlLang }>
        <Head>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
