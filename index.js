exports.handler = async function (event, context) {

    event.messages.map(({details}) => {
        console.log(JSON.parse(details.body) )
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
