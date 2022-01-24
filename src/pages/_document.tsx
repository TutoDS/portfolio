import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* Favicon */}
					<link
						rel='icon'
						type='image/svg+xml'
						href='/favicon.svg'
						media='(prefers-color-scheme: light)'
					/>
					<link
						rel='icon'
						type='image/svg+xml'
						href='/favicon-dark.svg'
						media='(prefers-color-scheme: dark)'
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
