

When the files to watch is in a different file operation system (Vagran, Docker) you need to use polling.
It is not clear from the author's text what he meant, but I think he is talking about the case when we are running webpack in Docker but the file to watch resite in the host computer.  

```

  watchOptions: {
    aggregateTimeout: 300,   // Delay the first rebuild (in ms)
    poll: 1000,              // Poll using interval (in ms or a boolean)
    ignored: /node_modules/, // Ignore to decrease CPU usage
  },
```

Beaware that polling is more resource-intensive than the file watching



