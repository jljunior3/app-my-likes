// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    api_marvel: 'https://gateway.marvel.com:443/v1/public',
    api_starwars: 'https://swapi.co/api',
    api_beers: 'https://api.punkapi.com/v2/beers',
    api_favoritos: 'http://localhost:3000/favoritos',
    key_marvel_public: '',
    key_marvel_private: ''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
