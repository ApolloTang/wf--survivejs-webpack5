
Polling is mandatory when using Vagrant, Docker, or any
 other solution that doesn't forward events for changes on a file
 located in a folder shared with the virtualized machine where
 webpack is running.

```

  watchOptions: {
    aggregateTimeout: 300,   // Delay the first rebuild (in ms)
    poll: 1000,              // Poll using interval (in ms or a boolean)
    ignored: /node_modules/, // Ignore to decrease CPU usage
  },
```

Beaware that polling is more resource-intensive than the file watching



