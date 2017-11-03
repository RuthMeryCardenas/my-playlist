import store from './store';

export const selectNextSong = () => {
  const songs = store.getState().songs;
  const currentSong = (songs.filter(song => song.isSelected === true))[0];
  let nextSong;

  if (currentSong.id === (songs.length - 1)) {
    nextSong = (songs.filter(song => song.id === 0))[0];
  }else {
    nextSong = (songs.filter(song => song.id === currentSong.id + 1))[0];
  }

  stopSong();
  currentSong.isSelected = false;

  nextSong.isSelected = true;

  store.setState({songs:songs});

  document.getElementById('song-' + currentSong.id).classList.remove('App-current-song');
  document.getElementById('song-' + nextSong.id).classList.add('App-current-song');
};

export const playSong = () => {
  const songs = store.getState().songs;
  const selectedSong = (songs.filter(song => song.isSelected === true))[0];

  selectedSong.isPlaying = true;

  store.setState({songs:songs});

  document.getElementById('song-' + selectedSong.id).classList.add('App-play-song');
};

export const stopSong = () => {
  const songs = store.getState().songs;
  const selectedSong = (songs.filter(song => song.isSelected === true))[0];

  selectedSong.isPlaying = false;

  store.setState({songs:songs});

  document.getElementById('song-' + selectedSong.id).classList.remove('App-play-song');
};
