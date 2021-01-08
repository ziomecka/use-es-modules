import http from 'http';
import { sendFile } from './send-file';

const PORT = 8000;

http
  .createServer(requestListener)
  .listen(PORT, () => console.log(`Server listens on ${PORT}`));

function requestListener(...args: Parameters<http.RequestListener>) {
  const [req, res] = args;
  const { url = '' } = req;

  if (/module/.test(url)) {
    return sendFile('/assets' + url, 'application/javascript', res);
  }

  return sendFile('/index.html', 'text/html', res);
}
