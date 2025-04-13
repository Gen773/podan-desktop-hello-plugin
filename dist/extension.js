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
}

exports.activate = activate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLmpzIiwic291cmNlcyI6WyIuLi9zcmMvZXh0ZW5zaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBvZG1hbkRlc2t0b3BBUEkgZnJvbSAnQHBvZG1hbi1kZXNrdG9wL2FwaSc7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aXZhdGUoZXh0ZW5zaW9uQ29udGV4dDogcG9kbWFuRGVza3RvcEFQSS5FeHRlbnNpb25Db250ZXh0KTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIHJlZ2lzdGVyIHRoZSBjb21tYW5kIHJlZmVyZW5jZWQgaW4gcGFja2FnZS5qc29uIGZpbGVcbiAgY29uc3QgbXlGaXJzdENvbW1hbmQgPSBwb2RtYW5EZXNrdG9wQVBJLmNvbW1hbmRzLnJlZ2lzdGVyQ29tbWFuZCgnbXkuZmlyc3QuY29tbWFuZCcsIGFzeW5jICgpID0+IHtcbiAgICAvLyBkaXNwbGF5IGEgY2hvaWNlIHRvIHRoZSB1c2VyIGZvciBzZWxlY3Rpbmcgc29tZSB2YWx1ZXNcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb2RtYW5EZXNrdG9wQVBJLndpbmRvdy5zaG93UXVpY2tQaWNrKFsnYScsICdhYScsICdhYWEnXSwge1xuICAgICAgY2FuUGlja01hbnk6IHRydWUsIC8vIHVzZXIgY2FuIHNlbGVjdCBtb3JlIHRoYW4gb25lIGNob2ljZVxuICAgIH0pO1xuXG4gICAgLy8gZGlzcGxheSBhbiBpbmZvcm1hdGlvbiBtZXNzYWdlIHdpdGggdGhlIHVzZXIgY2hvaWNlXG4gICAgYXdhaXQgcG9kbWFuRGVza3RvcEFQSS53aW5kb3cuc2hvd0luZm9ybWF0aW9uTWVzc2FnZShgVGhlIGNob2ljZSB3YXM6ICR7cmVzdWx0fWApO1xuICB9KTtcblxuICAvLyBjcmVhdGUgYW4gaXRlbSBpbiB0aGUgc3RhdHVzIGJhciB0byBydW4gb3VyIGNvbW1hbmRcbiAgLy8gaXQgd2lsbCBzdGljayBvbiB0aGUgbGVmdCBvZiB0aGUgc3RhdHVzIGJhclxuICBjb25zdCBpdGVtID0gcG9kbWFuRGVza3RvcEFQSS53aW5kb3cuY3JlYXRlU3RhdHVzQmFySXRlbShwb2RtYW5EZXNrdG9wQVBJLlN0YXR1c0JhckFsaWduTGVmdCwgMTAwKTtcbiAgaXRlbS50ZXh0ID0gJ015IGZpcnN0IGNvbW1hbmQnO1xuICBpdGVtLmNvbW1hbmQgPSAnbXkuZmlyc3QuY29tbWFuZCc7XG4gIGl0ZW0uc2hvdygpO1xuXG4gIC8vIHJlZ2lzdGVyIGRpc3Bvc2FibGUgcmVzb3VyY2VzIHRvIGl0J3MgcmVtb3ZlZCB3aGVuIHlvdSBkZWFjdGl2dGUgdGhlIGV4dGVuc2lvblxuICBleHRlbnNpb25Db250ZXh0LnN1YnNjcmlwdGlvbnMucHVzaChteUZpcnN0Q29tbWFuZCk7XG4gIGV4dGVuc2lvbkNvbnRleHQuc3Vic2NyaXB0aW9ucy5wdXNoKGl0ZW0pO1xufSJdLCJuYW1lcyI6WyJwb2RtYW5EZXNrdG9wQVBJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZUFBc0IsU0FBUyxnQkFBb0UsRUFBQTtBQUVqRyxFQUFBLE1BQU0sY0FBaUIsR0FBQUEsMkJBQUEsQ0FBaUIsUUFBUyxDQUFBLGVBQUEsQ0FBZ0Isb0JBQW9CLFlBQVk7QUFFL0YsSUFBTSxNQUFBLE1BQUEsR0FBUyxNQUFNQSwyQkFBaUIsQ0FBQSxNQUFBLENBQU8sY0FBYyxDQUFDLEdBQUEsRUFBSyxJQUFNLEVBQUEsS0FBSyxDQUFHLEVBQUE7QUFBQSxNQUM3RSxXQUFhLEVBQUE7QUFBQTtBQUFBLEtBQ2QsQ0FBQTtBQUdELElBQUEsTUFBTUEsMkJBQWlCLENBQUEsTUFBQSxDQUFPLHNCQUF1QixDQUFBLENBQUEsZ0JBQUEsRUFBbUIsTUFBTSxDQUFFLENBQUEsQ0FBQTtBQUFBLEdBQ2pGLENBQUE7QUFJRCxFQUFBLE1BQU0sT0FBT0EsMkJBQWlCLENBQUEsTUFBQSxDQUFPLG1CQUFvQixDQUFBQSwyQkFBQSxDQUFpQixvQkFBb0IsR0FBRyxDQUFBO0FBQ2pHLEVBQUEsSUFBQSxDQUFLLElBQU8sR0FBQSxrQkFBQTtBQUNaLEVBQUEsSUFBQSxDQUFLLE9BQVUsR0FBQSxrQkFBQTtBQUNmLEVBQUEsSUFBQSxDQUFLLElBQUssRUFBQTtBQUdWLEVBQWlCLGdCQUFBLENBQUEsYUFBQSxDQUFjLEtBQUssY0FBYyxDQUFBO0FBQ2xELEVBQWlCLGdCQUFBLENBQUEsYUFBQSxDQUFjLEtBQUssSUFBSSxDQUFBO0FBQzFDOzs7OyJ9
