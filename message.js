const AWS = require('aws-sdk');

const mq = new AWS.SQS({
    region: 'ru-central1',
    endpoint: 'https://message-queue.api.cloud.yandex.net',
});

async function createQueue() {
    const params = {
        'QueueName': 'mq_example_nodejs_sdk',
    }

    const result = await mq.createQueue(params).promise();
    const queueUrl = result['QueueUrl'];

    console.log('Queue created, URL: ' + queueUrl);

    return queueUrl;
}

async function sendMessage() {
    const params = {
        QueueUrl: "https://message-queue.api.cloud.yandex.net/b1g5ik20auf4ic3fvnl6/dj600000000a9l4g001g/notification",
        MessageBody: JSON.stringify({body: "test email", email: "kamenik1@mail.ru", type: "email"}),
    }

    const result = await mq.sendMessage(params).promise();

    console.log('Message sent, ID: ' + result['MessageId']);
}

async function receiveMessage() {
    const params = {
        'QueueUrl': queueUrl,
        'WaitTimeSeconds': 10,
    }

    let result = await mq.receiveMessage(params).promise();

    for (const msg of result['Messages']) {
        console.log('Message received')
        console.log('ID: ' + msg['MessageId'])
        console.log('Body: ' + msg['Body'])

        const deleteParams = {
            'QueueUrl': queueUrl,
            'ReceiptHandle': msg['ReceiptHandle'],
        }

        await mq.deleteMessage(deleteParams).promise()
    }
}

async function deleteQueue() {
    const params = {
        'QueueUrl': queueUrl,
    }

    const result = await mq.deleteQueue(params).promise();

    console.log('Queue deleted')
}

async function main() {
    // queueUrl = await createQueue();
    await sendMessage();
    // await receiveMessage(queueUrl);
    // await deleteQueue(queueUrl);
}

main()
