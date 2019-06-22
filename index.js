#!/usr/bin/env node
var buildRpm = require('rpm-builder');


var options = {
  name: 'test-package',
  version: '0.1.0',
  release: '1',
  buildArch: 'noarch',
  keepTemp: false,
  verbose: true,
  summary: 'vpntech dev package',
  description: 'vpntech dev package desc',
  vendor: 'vpnTech',
  packager: 'vpnTech',
  url: 'https://vpntech.net',
  requires: ["nodejs >= 0.10.22"],
//  buildRequires: ["nodejs >= 0.10.22"],
  files: [
    {cwd: './dev', src: 'GeoLite2-Country.tar.gz', dest: '/etc/vpntech_dev/data/'},
  ],
  postInstallScript : [
    'touch /tmp/test123',
  ],
};

buildRpm(options, function(err, rpm) {
  if (err) {
    throw err;
  }

  console.log(rpm);
  // /path/to/my-project-0.0.0-1.noarch.rpm
});
