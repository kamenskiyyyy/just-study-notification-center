import * as ReactDOMServer from 'react-dom/server';
import {SendMessageProps} from "../types";
import React = require('react');
import {DocumentRenderer} from "@keystone-6/document-renderer";

export const renderContent = (content: SendMessageProps['content']) => {
    return  ReactDOMServer.renderToString(<DocumentRenderer document={content} />);
}
