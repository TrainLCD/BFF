import { withCallable } from './callable';

describe('withCallable', () => {
  it('AI SDK エラーの HTTP 詳細と cause をログへ残す', async () => {
    const cause = Object.assign(new Error('connection reset'), {
      code: 'ECONNRESET',
    });
    const error = Object.assign(new Error('OpenAI request failed'), {
      statusCode: 429,
      responseBody: '{"error":{"message":"rate limit exceeded"}}',
      isRetryable: true,
      cause,
    });
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const response = await withCallable(() => Promise.reject(error));

    expect(response.status).toBe(500);
    expect(consoleError).toHaveBeenCalledTimes(1);
    const log = String(consoleError.mock.calls[0][0]);
    const detail = JSON.parse(
      log.replace('Unhandled error in callable handler: ', '')
    );
    expect(detail).toMatchObject({
      name: 'Error',
      message: 'OpenAI request failed',
      statusCode: 429,
      responseBody: '{"error":{"message":"rate limit exceeded"}}',
      isRetryable: true,
      cause: {
        name: 'Error',
        message: 'connection reset',
      },
    });

    consoleError.mockRestore();
  });
});
