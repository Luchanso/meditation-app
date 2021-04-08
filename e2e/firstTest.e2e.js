const { element, by, device } = require('detox');

beforeAll(async () => {
  await device.launchApp({ newInstance: true });
});

beforeEach(async () => {
  await device.reloadReactNative();
});

// Fake test
test('should have welcome screen', async () => {
  // TODO: fix in https://github.com/wix/Detox/pull/1521 & https://github.com/wix/Detox/issues/1513
  // await device.disableSynchronization();
  // // await device.enableSynchronization();
  await expect(element(by.id('progress'))).toBeVisible();
  await element(by.id('progress')).tap();
  await expect(element(by.text('Hello world'))).toBeVisible();
});

test('should check container when application is start ', async () => {
  await expect(element(by.id('breath-container'))).toBeVisible();
});

// it('should show world screen after tap', async () => {
//   await element(by.id('world_button')).tap();
//   await expect(element(by.text('World!!!'))).toBeVisible();
// });
