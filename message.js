const AWS = require('aws-sdk');

const mq = new AWS.SQS({
    region: 'ru-central1',
    endpoint: 'https://message-queue.api.cloud.yandex.net',
});

async function sendMessage() {
    const params = {
        QueueUrl: "https://message-queue.api.cloud.yandex.net/b1g5ik20auf4ic3fvnl6/dj600000000a9l4g001g/notification",
        MessageBody: JSON.stringify({body: "test email", email: "kamenik1@icloud.com", type: "email", title: "Тестовое письмо"}),
    }

    const result = await mq.sendMessage(params).promise();

    console.log('Message sent, ID: ' + result['MessageId']);
}

async function main() {
    await sendMessage();
}

main()
