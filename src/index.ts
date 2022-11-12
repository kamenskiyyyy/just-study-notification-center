import {Event, SendMessageProps} from "./types";
import {mailer} from "./lib/nodemailer";
import {FROM} from "./config";
import {getHTML} from "./mailTemplate";

module.exports.handler = async function (event: Event) {
    const messages = event.messages

    for (const message of messages) {
        const info = JSON.parse(message.details.message.body) as SendMessageProps;

        console.info(info)

        const renderHTML = getHTML(info.template)

        await mailer.sendMail({
            to: info.email,
            from: FROM,
            subject: info.title,
            html: renderHTML(info.title, info.body, info.link),
        });
    }

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/plain'
        },
        isBase64Encoded: false,
        body: `Сообщение доставлено`
    }
};
