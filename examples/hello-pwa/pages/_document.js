import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'
import Manifest from '../../../manifest'

export default class extends Document {
	static getInitialProps({renderPage}) {
		return {
			...renderPage(),
			styles: flush()
		}
  }

	render() {
    return (
      <html lang="en">
				<Head>
          <Manifest themeColor="#F0F0F0" />
					<title>Hello PWA</title>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
