exports.handler = async function (event, context) {

    event.messages.map(({details}) => {
        console.log(JSON.parse(details.message.body) )
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
