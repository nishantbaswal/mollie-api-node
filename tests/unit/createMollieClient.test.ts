import createMollieClient from '../..';

describe('createMollieClient', () => {
  it('should fail when no credentials are provided', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    expect(() => createMollieClient({})).toThrow('Missing parameter "apiKey" or "accessToken".');
  });

  it('should throw a descriptive error when a apiKey is set to null', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    expect(() => createMollieClient({ apiKey: null })).toThrow('Parameter "apiKey" is null.');
  });

  it('should throw a descriptive error when a apiKey is set to an empty string', () => {
    expect(() => createMollieClient({ apiKey: '' })).toThrow('Parameter "apiKey" is an empty string.');
  });

  it('should throw when apiEndpoint uses HTTP instead of HTTPS', () => {
    expect(() => createMollieClient({ apiKey: 'test_mock', apiEndpoint: 'http://api.mollie.com/v2/' })).toThrow(
      'The API endpoint must use HTTPS to ensure credentials are transmitted securely.',
    );
  });
});
