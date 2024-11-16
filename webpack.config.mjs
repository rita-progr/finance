const webpack = require('webpack');

import fs from 'fs';
import netBrowserify from 'net-browserify';
import cryptoBrowserify from 'crypto-browserify';
import pathBrowserify from 'path-browserify';
import streamBrowserify from 'stream-browserify';
import tlsBrowserify from 'tls-browserify';
import dnsJs from 'dns.js';
import osBrowserify from 'os-browserify';
import urlBrowserify from 'url-browserify';

const module = {
    rules: [
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
    ],
    resolve: {
        fallback: {
            fs: fs,
            net: netBrowserify,
            crypto: cryptoBrowserify,
            path: pathBrowserify,
            stream: streamBrowserify,
            tls: tlsBrowserify,
            dns: dnsJs,
            os: osBrowserify,
            url: urlBrowserify,
        },
    },
};

export default module;