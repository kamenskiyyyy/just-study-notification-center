exports.handler = async function (event, context) {
    console.log("event and context", event, context)

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/plain'
        },
        isBase64Encoded: false,
        body: `Сообщение доставлено`
    }
};
