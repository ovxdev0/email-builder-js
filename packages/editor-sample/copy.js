import {copyFileSync, cpSync, rmSync} from "fs";

const indexHtml = './dist/index.html';
const builderViewFile = "../../../resources/views/bulk-mails/builder.blade.php";

// copy index.html content to builder.php
copyFileSync(indexHtml, builderViewFile);

const assetsDir = './dist/assets';
const publicAssetsDir = "../../../public/email-builder-js/assets";

// remove public/email-builder-js/assets directory
rmSync(publicAssetsDir, {recursive: true, force: true});

// copy assetsDir to public/email-builder-js
cpSync(assetsDir, publicAssetsDir, {recursive: true});
