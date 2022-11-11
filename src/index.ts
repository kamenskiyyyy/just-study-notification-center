import {Event} from "./types";

module.exports.handler = async function (event: Event, context) {

    event.messages.forEach((message) => {
        console.log(JSON.parse(message.details.message.body) )
    })

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/plain'
        },
        isBase64Encoded: false,
        body: `Сообщение доставлено`
    }
};
