export async function handle(event) {
    return {
        statusCode: event,
        body: JSON.stringify({
            hello: 'Hello World'
        })
    }
}