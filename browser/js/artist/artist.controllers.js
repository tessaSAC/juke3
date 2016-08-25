'use strict';

/* ARTIST (SINGULAR) CONTROLLER */

juke.controller('SingleArtistController', function ($scope, $log, $stateParams, ArtistFactory, PlayerFactory, $rootScope) {

  // $scope.$on('viewSwap', function (event, data) {

    // if ($stateParams.name !== 'oneArtist') return $scope.showMe = false;
    // $scope.showMe = true;

    ArtistFactory.fetchById($stateParams.artistId)
    .then(function (artist) {
      $scope.artist = artist;
    })
    .catch($log.error);

  // });

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.artist.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.viewOneAlbum = function (album) {
    $rootScope.$broadcast('viewSwap', { name: 'oneAlbum', id: album.id });
  };

});


/* ARTISTS (PLURAL) CONTROLLER */

juke.controller('MultiArtistController', function ($scope, $log, $rootScope, ArtistFactory) {

  $scope.$on('viewSwap', function (event, data) {
    if (data.name !== 'allArtists') return $scope.showMe = false;
    $scope.showMe = true;
  });

  // $scope.viewOneArtist = function (artist) {
  //   $rootScope.$broadcast('viewSwap', { name: 'oneArtist', id: artist.id });
  // };

  ArtistFactory.fetchAll()
  .then(function (artists) {
    $scope.artists = artists;
  })
  .catch($log.error);

});

