# auth0-yargs-issue

Demonstrating functionality conflict with the auth0 cli deployer and yargs
## How to run

```bash
docker build . -t auth0-yargs-issue
docker run auth0-yargs-issue
```

Output:

```bash
Auth0 Deploy CLI

Commands:
  index.js import  Deploy Configuration  [aliases: deploy]
  index.js export  Export Auth0 Tenant Configuration  [aliases: dump]

Options:
  --help           Show help  [boolean]
  --version        Show version number  [boolean]
  --debug, -d      Dump extra debug information.  [string] [default: false]
  --proxy_url, -p  A url for proxying requests, only set this if you are behind a proxy.  [string]

Examples:
  index.js export -c config.json -f yaml -o path/to/export       Dump Auth0 config to folder in YAML format
  index.js export -c config.json -f directory -o path/to/export  Dump Auth0 config to folder in directory format
  index.js import -c config.json -i tenant.yaml                  Deploy Auth0 via YAML
  index.js import -c config.json -i path/to/files                Deploy Auth0 via Path
  index.js dump -c config.json -f yaml -o path/to/export         Dump Auth0 config to folder in YAML format
  index.js dump -c config.json -f directory -o path/to/export    Dump Auth0 config to folder in directory format
  index.js deploy -c config.json -i tenant.yaml                  Deploy Auth0 via YAML
  index.js deploy -c config.json -i path/to/files                Deploy Auth0 via Path

See README (https://github.com/auth0/auth0-deploy-cli) for more in-depth information on configuration and setup.

A command is required
```