import {DocumentRendererProps} from "@keystone-6/document-renderer/dist/declarations/src";

export interface SendMessageProps {
    email: string[] | string;
    body?: string;
    title: string;
    type?: 'email';
    template?: 'base' | 'lesson';
    link?: string;
    content: DocumentRendererProps['document']
}

export interface Event {
    messages: {
        event_metadata: {
            event_id: string,
            event_type: string,
            created_at: string
        },
        details: {
            queue_id: string,
            message: {
                message_id: string,
                md5_of_body: string,
                body: string,
                attributes: {
                    SentTimestamp: number
                },
                message_attributes: {
                    messageAttributeKey: {
                        dataType: string,
                        stringValue: string
                    }
                },
                md5_of_message_attributes: string
            }
        }
    }[]
}
