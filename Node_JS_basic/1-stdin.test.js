const { expect } = require('chai');
const { exec } = require('child_process');

describe('main', () => {
  it('the user is entering a name', (done) => {
    const childProcess = exec('node 1-stdin.js');
    childProcess.stdin.write('Guillaume\n');
    childProcess.stdin.end();

    childProcess.stdout.on('data', (output) => {
      try {
        expect(output).to.include('Your name is: Guillaume');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
