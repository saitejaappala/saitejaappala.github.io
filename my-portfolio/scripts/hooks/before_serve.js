/**
  Copyright (c) 2015, 2025, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/
*/

'use strict';

const path = require('path');
const fs   = require('fs');

module.exports = function (configObj) {
  return new Promise((resolve, reject) => {
    console.log('Running before_serve hook — mounting /pictures/ static folder.');

    // Serve my-portfolio/pictures/ as /pictures/ in the dev server
    const picturesDir = path.join(__dirname, '../../pictures');

    const picturesMiddleware = function (req, res, next) {
      if (req.url && req.url.startsWith('/pictures/')) {
        const filename = decodeURIComponent(req.url.slice('/pictures/'.length).split('?')[0]);
        const filePath = path.join(picturesDir, filename);
        if (fs.existsSync(filePath)) {
          return res.sendFile(filePath);
        }
      }
      next();
    };

    configObj['postMiddleware'] = [picturesMiddleware];
    resolve(configObj);
  });
};
