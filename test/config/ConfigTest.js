import config from 'config';

describe('Application Environment', () => {

  it('should load app config file depending on current --env', () => {
    expect(config.appEnv).to.equal('test');
  });
});
