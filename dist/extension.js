'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const podmanDesktopAPI = require('@podman-desktop/api');

function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
  if (e) {
    for (const k in e) {
      if (k !== 'default') {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}

const podmanDesktopAPI__namespace = /*#__PURE__*/_interopNamespaceDefault(podmanDesktopAPI);

async function activate(extensionContext) {
  const myFirstCommand = podmanDesktopAPI__namespace.commands.registerCommand("my.first.command", async () => {
    const result = await podmanDesktopAPI__namespace.window.showQuickPick(["a", "aa", "aaa"], {
      canPickMany: true
      // user can select more than one choice
    });
    await podmanDesktopAPI__namespace.window.showInformationMessage(`The choice was: ${result}`);
  });
  const item = podmanDesktopAPI__namespace.window.createStatusBarItem(podmanDesktopAPI__namespace.StatusBarAlignLeft, 100);
  item.text = "My first command";
  item.command = "my.first.command";
  item.show();
  extensionContext.subscriptions.push(myFirstCommand);
  extensionContext.subscriptions.push(item);
  console.log("starting hello world extension");
  const panel = podmanDesktopAPI__namespace.window.createWebviewPanel("helloWorld", "Hello World");
  extensionContext.subscriptions.push(panel);
  const exampleWebviewHtml = `
  <html>
    <body>
      <h1>Hello World</h1>
    </body>
  </html>
  `;
  panel.webview.html = exampleWebviewHtml;
}

exports.activate = activate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLmpzIiwic291cmNlcyI6WyIuLi9zcmMvZXh0ZW5zaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBvZG1hbkRlc2t0b3BBUEkgZnJvbSAnQHBvZG1hbi1kZXNrdG9wL2FwaSc7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aXZhdGUoZXh0ZW5zaW9uQ29udGV4dDogcG9kbWFuRGVza3RvcEFQSS5FeHRlbnNpb25Db250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIHJlZ2lzdGVyIHRoZSBjb21tYW5kIHJlZmVyZW5jZWQgaW4gcGFja2FnZS5qc29uIGZpbGVcbiAgY29uc3QgbXlGaXJzdENvbW1hbmQgPSBwb2RtYW5EZXNrdG9wQVBJLmNvbW1hbmRzLnJlZ2lzdGVyQ29tbWFuZCgnbXkuZmlyc3QuY29tbWFuZCcsIGFzeW5jICgpID0+IHtcbiAgICAvLyBkaXNwbGF5IGEgY2hvaWNlIHRvIHRoZSB1c2VyIGZvciBzZWxlY3Rpbmcgc29tZSB2YWx1ZXNcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb2RtYW5EZXNrdG9wQVBJLndpbmRvdy5zaG93UXVpY2tQaWNrKFsnYScsICdhYScsICdhYWEnXSwge1xuICAgICAgY2FuUGlja01hbnk6IHRydWUsIC8vIHVzZXIgY2FuIHNlbGVjdCBtb3JlIHRoYW4gb25lIGNob2ljZVxuICAgIH0pO1xuXG4gICAgLy8gZGlzcGxheSBhbiBpbmZvcm1hdGlvbiBtZXNzYWdlIHdpdGggdGhlIHVzZXIgY2hvaWNlXG4gICAgYXdhaXQgcG9kbWFuRGVza3RvcEFQSS53aW5kb3cuc2hvd0luZm9ybWF0aW9uTWVzc2FnZShgVGhlIGNob2ljZSB3YXM6ICR7cmVzdWx0fWApO1xuICB9KTtcblxuICAvLyBjcmVhdGUgYW4gaXRlbSBpbiB0aGUgc3RhdHVzIGJhciB0byBydW4gb3VyIGNvbW1hbmRcbiAgLy8gaXQgd2lsbCBzdGljayBvbiB0aGUgbGVmdCBvZiB0aGUgc3RhdHVzIGJhclxuICBjb25zdCBpdGVtID0gcG9kbWFuRGVza3RvcEFQSS53aW5kb3cuY3JlYXRlU3RhdHVzQmFySXRlbShwb2RtYW5EZXNrdG9wQVBJLlN0YXR1c0JhckFsaWduTGVmdCwgMTAwKTtcbiAgaXRlbS50ZXh0ID0gJ015IGZpcnN0IGNvbW1hbmQnO1xuICBpdGVtLmNvbW1hbmQgPSAnbXkuZmlyc3QuY29tbWFuZCc7XG4gIGl0ZW0uc2hvdygpO1xuXG4gIC8vIHJlZ2lzdGVyIGRpc3Bvc2FibGUgcmVzb3VyY2VzIHRvIGl0J3MgcmVtb3ZlZCB3aGVuIHlvdSBkZWFjdGl2dGUgdGhlIGV4dGVuc2lvblxuICBleHRlbnNpb25Db250ZXh0LnN1YnNjcmlwdGlvbnMucHVzaChteUZpcnN0Q29tbWFuZCk7XG4gIGV4dGVuc2lvbkNvbnRleHQuc3Vic2NyaXB0aW9ucy5wdXNoKGl0ZW0pO1xuXG4gIGNvbnNvbGUubG9nKCdzdGFydGluZyBoZWxsbyB3b3JsZCBleHRlbnNpb24nKTtcblxuICAvLyBDcmVhdGUgdGhlIHdlYnZpZXcgcGFuZWwgYW5kIHJlZ2lzdGVyIGl0IHdpdGggdGhlIGV4dGVuc2lvbiBjb250ZXh0LlxuICBjb25zdCBwYW5lbCA9IHBvZG1hbkRlc2t0b3BBUEkud2luZG93LmNyZWF0ZVdlYnZpZXdQYW5lbCgnaGVsbG9Xb3JsZCcsICdIZWxsbyBXb3JsZCcpO1xuICBleHRlbnNpb25Db250ZXh0LnN1YnNjcmlwdGlvbnMucHVzaChwYW5lbCk7XG5cbiAgY29uc3QgZXhhbXBsZVdlYnZpZXdIdG1sID0gYFxuICA8aHRtbD5cbiAgICA8Ym9keT5cbiAgICAgIDxoMT5IZWxsbyBXb3JsZDwvaDE+XG4gICAgPC9ib2R5PlxuICA8L2h0bWw+XG4gIGA7XG5cbiAgLy8gQWRkIHRoZSBleGFtcGxlIHdlYnZpZXcgSFRNTCB0byB0aGUgd2VidmlldyBwYW5lbC4gRm9yIG1vcmUgYWR2YW5jZWQgd2VidmlldyB1c2FnZSBzZWUgb3VyIFwiZnVsbFwiIHRlbXBsYXRlOiBodHRwczovL2dpdGh1Yi5jb20vY29udGFpbmVycy9wb2RtYW4tZGVza3RvcC1leHRlbnNpb24tZnVsbC10ZW1wbGF0ZVxuICAvLyBmb3IgYSBtb3JlIGFkdmFuY2VkIGh0bWwgY29uZmlndXJhdGlvbiBzdWNoIGFzIHVzaW5nIFN2ZWx0ZSAvIFRhaWx3aW5kQ1NTIC8gZXRjLlxuICBwYW5lbC53ZWJ2aWV3Lmh0bWwgPSBleGFtcGxlV2Vidmlld0h0bWw7XG59Il0sIm5hbWVzIjpbInBvZG1hbkRlc2t0b3BBUEkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxlQUFzQixTQUFTLGdCQUFvRSxFQUFBO0FBRWpHLEVBQUEsTUFBTSxjQUFpQixHQUFBQSwyQkFBQSxDQUFpQixRQUFTLENBQUEsZUFBQSxDQUFnQixvQkFBb0IsWUFBWTtBQUUvRixJQUFNLE1BQUEsTUFBQSxHQUFTLE1BQU1BLDJCQUFpQixDQUFBLE1BQUEsQ0FBTyxjQUFjLENBQUMsR0FBQSxFQUFLLElBQU0sRUFBQSxLQUFLLENBQUcsRUFBQTtBQUFBLE1BQzdFLFdBQWEsRUFBQTtBQUFBO0FBQUEsS0FDZCxDQUFBO0FBR0QsSUFBQSxNQUFNQSwyQkFBaUIsQ0FBQSxNQUFBLENBQU8sc0JBQXVCLENBQUEsQ0FBQSxnQkFBQSxFQUFtQixNQUFNLENBQUUsQ0FBQSxDQUFBO0FBQUEsR0FDakYsQ0FBQTtBQUlELEVBQUEsTUFBTSxPQUFPQSwyQkFBaUIsQ0FBQSxNQUFBLENBQU8sbUJBQW9CLENBQUFBLDJCQUFBLENBQWlCLG9CQUFvQixHQUFHLENBQUE7QUFDakcsRUFBQSxJQUFBLENBQUssSUFBTyxHQUFBLGtCQUFBO0FBQ1osRUFBQSxJQUFBLENBQUssT0FBVSxHQUFBLGtCQUFBO0FBQ2YsRUFBQSxJQUFBLENBQUssSUFBSyxFQUFBO0FBR1YsRUFBaUIsZ0JBQUEsQ0FBQSxhQUFBLENBQWMsS0FBSyxjQUFjLENBQUE7QUFDbEQsRUFBaUIsZ0JBQUEsQ0FBQSxhQUFBLENBQWMsS0FBSyxJQUFJLENBQUE7QUFFeEMsRUFBQSxPQUFBLENBQVEsSUFBSSxnQ0FBZ0MsQ0FBQTtBQUc1QyxFQUFBLE1BQU0sS0FBUSxHQUFBQSwyQkFBQSxDQUFpQixNQUFPLENBQUEsa0JBQUEsQ0FBbUIsY0FBYyxhQUFhLENBQUE7QUFDcEYsRUFBaUIsZ0JBQUEsQ0FBQSxhQUFBLENBQWMsS0FBSyxLQUFLLENBQUE7QUFFekMsRUFBQSxNQUFNLGtCQUFxQixHQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQUEsQ0FBQTtBQVUzQixFQUFBLEtBQUEsQ0FBTSxRQUFRLElBQU8sR0FBQSxrQkFBQTtBQUN2Qjs7OzsifQ==
