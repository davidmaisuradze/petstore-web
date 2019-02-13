import React from 'react';
import Head from 'next/head';
import App, {Container} from 'next/app';
import {Provider} from "react-redux";
import withRedux from 'next-redux-wrapper';

import store from '../store/store.init';

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        return {
            pageProps: {
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
            }
        }
    }

    render() {
        const {Component} = this.props;
        return (
            <Container>
                <Head>
                    <title>App</title>
                </Head>
                <Provider store={this.props.store}>
                    <Component {...this.props.pageProps}/>
                </Provider>
            </Container>
        )
    }
}

export default withRedux(store, {
    debug: typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
})(MyApp);