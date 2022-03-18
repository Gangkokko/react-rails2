import client from './client';

// 動作確認用
const execTest = () => {
  return client.get('/test');
};

export default execTest;
