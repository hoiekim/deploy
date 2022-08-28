const http = require("http");
const { exec } = require("child_process");
const { COMMAND, SECRET, PORT } = process.env;

http
  .createServer(async (req, res) => {
    try {
      const buffers = [];
      for await (const chunk of req) {
        buffers.push(chunk);
      }

      const data = Buffer.concat(buffers).toString();
      const { secret } = JSON.parse(data);

      if (secret === SECRET) {
        exec(COMMAND);
      }
    } catch (error) {
      console.warn(new Date());
      console.warn(`Recieved invalid request. (${error.message})`);
    }

    res.end();
  })
  .listen(PORT || 3002);
