exports.handler = async function (event, context) {
    name = event.queryStringParameters.name

    console.log("event and context", event, context)
    console.log('env debug', process.env.DEBUG)
    console.log('env FOO', process.env.FOO)


    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'text/plain'
        },
        'isBase64Encoded': false,
        'body': `Hello, ${name}!`
    }
};
