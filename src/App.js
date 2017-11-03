import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'redux-zero/react';
import { playSong } from './actions';
import { selectNextSong } from './actions';
import { stopSong } from './actions';
import './App.css';

const Song = ({id ,title, duration}) => (
  <li id={id} className='playlistItem'>{title} <span>{duration}</span></li>
);

const PlaylistAdministration = () => (
  <div>
    <button onClick={playSong}>Play</button>
    <button onClick={selectNextSong}>Next</button>
    <button onClick={stopSong}>Stop</button>
  </div>
);

const App = ({songs}) => {
  const playlist = songs.map(song =>(
    <Song
    key     = {song.id}
    id      = {'song-' + song.id}
    title   = {song.title}
    duration= {song.duration}
    />
  ));

  return (
    <div>
      <h1>Treetunes</h1>
      <ul className='playlist'>{playlist}</ul>
      <PlaylistAdministration />
    </div>
  );
}

const mapToProps = ({songs}) => ({songs});
export default connect(mapToProps)(App);
