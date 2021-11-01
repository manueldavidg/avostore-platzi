import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

//Esto en caso de que traigamos cosas del server
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument