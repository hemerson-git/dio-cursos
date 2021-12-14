const os = require("os");
let lastFreeRAM;

setInterval(() => {
  const { totalmem, arch, platform, freemem } = os;
  const tRam = totalmem() / 1024 / 1024;
  const fRam = freemem() / 1024 / 1024;
  const usage = 100 - (fRam / tRam) * 100;

  const stats = {
    os: platform(),
    arch: arch(),
    totalRAM: `${parseInt(tRam)} MB`,
    freeRAM: `${parseInt(fRam)} MB`,
    usage: `${usage.toFixed(2)} %`,
  };

  if (stats.freeRAM !== lastFreeRAM) {
    lastFreeRAM = stats.freeRAM;
    // console.clear();
    // console.table(stats);
  }

  exports.module = stats;
}, 1000);
