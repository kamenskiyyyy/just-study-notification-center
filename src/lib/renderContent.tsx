import * as ReactDOMServer from 'react-dom/server';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import {SendMessageProps} from "../types";
import React = require('react');


export const renderContent = (content: SendMessageProps['content']) => {
    // @ts-ignore
    return  ReactDOMServer.renderToString(<DocumentRenderer document={content.document} />);
}
