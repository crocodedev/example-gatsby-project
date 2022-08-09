# Example Gatsby Project

## Getting started

### Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `yarn setup`.

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API and then import the needed content model into the space you define and write a config file (`./.contentful.json`).

`yarn setup` automates that for you but if you want to do it yourself rename `.contentful.json.sample` to `.contentful.json` and add your configuration in this file.

## Crucial Commands

### `yarn dev`

Run the project locally with live reload in development mode.

### `yarn build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `yarn serve`

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.
