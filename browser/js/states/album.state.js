// DON'T FORGET TO LINK IN INDEX.HTML -- WITH RELATIVE *URL*

juke.config(function ($stateProvider) {
  $stateProvider.state('listAlbums', {
    url: '/albums',
    templateUrl: '/templates/albums.template.html', // Probably? does NOT assume HTML file
    controller: 'MultiAlbumController'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('aSingleAlbum', {
    url: '/albums/:albumId',
    templateUrl: '/templates/aSingleAlbum.template.html', // Probably? does NOT assume HTML file
    controller: 'SingleAlbumController'
  });
});

