# Payment Estimator 

This application estimates automotive finance/lease offers based on area and vehicle model. It is targeted to live inside an iframe of a parent site, and post message is the medium between the two applications.

## Application flow

1. Zip code search (Landing page)
A zip code search module, which uses the DIS service to find the region code. Region code will then be used for OAT and EFC purposes to fetch data

2. Vehicle Selection
This module will list the year/series to select based on the region that was selected.

3. Estimator
The main module that uses EFC to fetch vehicle data, OAT to fetch offers, and PEWS to estimate payments.

4. Parent application interaction
The parent application and this application must communicate changes such as zip code change, vehicle change, responsive UI changes, etc.

## Build & development

Run `npm install` to install everything from package.json locally.
Run `bower install` to install all bower components locally.
Run `grunt serve:local` where local specifies the local environment.
Run `grunt build:test1` for deploying. Adds specific URL path to base href tag in index.html.

## Configuration

### Setting the brand to toyota or lexus

1. Go to app/global_services/brandService.js
2. Go to initialize function
3. Set value to brand as desired ('toyota or lexus')

### Environment URLs

We can manage the URLs of external services through envConfig.json.
The grunt task, `ng-constant`, generates a file called `envVar.js` in the root app directory.

## Parent frame

### PEM.js `app/src/parent_frame/js/pem.js`

This is a library created to make the iframe implementation easier. Usage notes are in the file.

### Toyota `app/src/parent_frame/toyota`

The toyota parent frame to mock the official look and feel.

## Bower/Node versions:

bower 1.8.0
node 4.4.2
npm 2.15.0

## Issues

### Proxy produces error 'Fatal error: The header content contains invalid characters'
This error is produced by the node_module `http-proxy` under the `grunt-connect-proxy` module. To fix,
go to `web-outgoing.js` and look for the `writeHeaders` function. Now change the loop to look like this,

  Object.keys(proxyRes.headers).forEach(function(key) {
    if (key && key.toLowerCase() == "set-cookie") {
      res.setHeader('set-cookie', 'a=b');
    } else {
      res.setHeader(key, proxyRes.headers[key]);
    }
  });


# ngjs-checkbox
