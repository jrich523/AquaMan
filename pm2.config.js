module.exports = {
  apps : [{
    name: 'AquaMan',
    script: './src/server/server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: '',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'debian',
      host : '0.0.0.0',
      ref  : 'origin/master',
      repo : 'https://github.com/jrich523/AquaMan.git',
      path : '/opt/apps/aquaman',
      'post-deploy' : 'npm install && pm2 reload pm2.config.js --env production'
    },
    development : {
      user : 'debian',
      host : '0.0.0.0',
      ref  : 'origin/master',
      repo : 'https://github.com/jrich523/AquaMan.git',
      path : '/opt/apps/aquaman',
      'post-deploy' : 'npm install && pm2 reload pm2.config.js --env production'
    }
  }
};
