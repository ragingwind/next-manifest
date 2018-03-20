import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'

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
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/static/favicon.ico" />
					<meta name="theme-color" content="#000000" />
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
