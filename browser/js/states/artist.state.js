// DON'T FORGET TO LINK IN INDEX.HTML -- WITH RELATIVE *URL*

juke.config(function ($stateProvider) {
  $stateProvider.state('listArtists', {
    url: '/artists',
    templateUrl: '/templates/artists.template.html', // Probably? does NOT assume HTML file
    controller: 'MultiArtistController'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('aSingleArtist', {
    url: '/artists/:artistId',
    templateUrl: '/templates/aSingleArtist.template.html', // Probably? does NOT assume HTML file
    controller: 'SingleArtistController'
  });
});