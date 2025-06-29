const Greenlock = require("greenlock");

Greenlock.create({
    server: 'https://acme-v02.api.letsencrypt.org/directory',
    configDir: "~/.config/acme/",
    approveDomains: ['https://my-portfolio-iota-kohl-41.vercel.app/']
}).serve(app);
