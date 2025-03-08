module.exports = {
  apps: [
    {
      name: "conciencia",
      port: "3000",
      cwd: "/var/www/conciencia",
      exec_mode: "cluster",
      instances: "max",
      script: "./server/index.mjs",
    },
  ],
};
