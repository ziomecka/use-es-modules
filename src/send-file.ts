import http from 'http';
import fs from 'fs';
import path from 'path';

const contentType = ['text/html', 'application/javascript'] as const;

export type ContentType = typeof contentType[number];

export function sendFile(
  file: string,
  contentType: ContentType,
  res: http.ServerResponse,
) {
  const filePath = path.resolve(__dirname + file);

  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    return res.end('Not found');
  }

  const { size } = fs.statSync(filePath);

  res.writeHead(200, {
    'Content-Type': contentType,
    'Content-Length': size,
  });

  return fs.createReadStream(filePath).pipe(res);
}
