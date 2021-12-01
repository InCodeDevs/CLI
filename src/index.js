#!/usr/bin/env node

/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

const fs = require('fs');
const path = require('path');
const {program} = require('commander');
const chalk = require('chalk');

program.name("incode")

program.version(JSON.parse(fs.readFileSync(path.join(__dirname, "..", "package.json")).toString()).version);

program.parse();