import * as ReactDOMServer from 'react-dom/server';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import {SendMessageProps} from "../types";
import React = require('react');
import {CustomRenderer} from "../component-blocks/CustomRenderer/CustomRenderer";

export const renderContent = (content: SendMessageProps['content']) => {
    return  ReactDOMServer.renderToString(<CustomRenderer document={content} />);
}
