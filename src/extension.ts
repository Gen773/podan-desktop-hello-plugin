import * as podmanDesktopAPI from '@podman-desktop/api';
export async function activate(extensionContext: podmanDesktopAPI.ExtensionContext): Promise<void> {
  // register the command referenced in package.json file
  const myFirstCommand = podmanDesktopAPI.commands.registerCommand('my.first.command', async () => {
    // display a choice to the user for selecting some values
    const result = await podmanDesktopAPI.window.showQuickPick(['a', 'aa', 'aaa'], {
      canPickMany: true, // user can select more than one choice
    });

    // display an information message with the user choice
    await podmanDesktopAPI.window.showInformationMessage(`The choice was: ${result}`);
  });

  // create an item in the status bar to run our command
  // it will stick on the left of the status bar
  const item = podmanDesktopAPI.window.createStatusBarItem(podmanDesktopAPI.StatusBarAlignLeft, 100);
  item.text = 'My first command';
  item.command = 'my.first.command';
  item.show();

  // register disposable resources to it's removed when you deactivte the extension
  extensionContext.subscriptions.push(myFirstCommand);
  extensionContext.subscriptions.push(item);
}