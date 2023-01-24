import React from "react";
import "./src/styles/global.css";

import { RecoilRoot } from "recoil";
import Layout from './src/components/Layout';

export const wrapRootElement = ({element, data}) => <RecoilRoot {...data}>{element}</RecoilRoot>;
export const wrapPageElement = ({element, data}) => <Layout {...data} >{element} </Layout>

