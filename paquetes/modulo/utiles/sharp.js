const sharp = require('sharp');

sharp('rick-morty.png')
.resize(80)
.toFile('resized.png')