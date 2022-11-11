import {StringValue} from "aws-sdk/clients/elbv2";

export interface SendMessageProps {
    email: string[];
    body: JSON;
    title: string;
    type: 'email';
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
                        dataType: StringValue,
                        stringValue: StringValue
                    }
                },
                md5_of_message_attributes: string
            }
        }
    }[]
}
