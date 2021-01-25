# phonos

Phono audio on your Sonos (among other input sources). This small script uses the [`node-sonos`](https://github.com/bencevans/node-sonos/) library to make your Sonos box switch to its line-in source. It's an adapted, standalone version of the script referred in [this comment](https://github.com/bencevans/node-sonos/issues/155#issuecomment-355000227). You'll need a recent [Node.js runtime](https://nodejs.org/en/). Usage:

`SONOS_HOST=<ip> node index.js`

