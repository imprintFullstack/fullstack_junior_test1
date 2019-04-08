import { SongNamePipe } from './song-name.pipe';

describe('SongNamePipe', () => {
  it('create an instance', () => {
    const pipe = new SongNamePipe();
    expect(pipe).toBeTruthy();
  });
});
