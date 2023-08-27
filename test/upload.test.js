import { uploadFromURL, uploadFromFile } from '../src';

test('Test upload file from URL', async () => {
  const result = await uploadFromURL(
    'test.jpg',
    'https://cdn.discordapp.com/attachments/858938620425404426/1076560199218892902/waifu-animemoeus.jpg'
  );

  expect(result.success).toBe(true);
});

test('Test upload file from path', async () => {
  const result = await uploadFromFile('./test/PXL_20230626_012751339.jpg');
  expect(result.success).toBe(true);

  const emptyResult = await uploadFromFile('file');
  expect(emptyResult.success).toBe(false);
});
