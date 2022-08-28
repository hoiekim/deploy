# What is this script?

It's a tiniest Node.js server that listens to a request to trigger an arbitrary command. It uses built in packages only and requires not even a single package to download!

This script is written with porpose to be useful to put up a server that listens to webhook call and trigger deployment (for example, `docker pull && docker up`) but you can use it for any kind of purpose. :)

# How to use?

3 environment variables used

- COMMAND: Terminal command that you would like to run when the webhook is called.
- SECRET: Your secret key to validate the reqest.
- PORT: (optional) Port number to run the server(defaults to 3002).

Run the Node.js server for example:

```
COMMAND=<your command> SECRET=<your secret> node index.js
```

Trigger the webhook by sending a POST request for example:

```
curl -X POST localhost:3002 -H "Content-Type: application/json" -d '{"secret": "my secret"}'
```
