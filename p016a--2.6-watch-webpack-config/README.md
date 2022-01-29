watch for webpack.config.js change.



```
  "scripts": {
    ...
    "start": "wp --mode development",
    "watch": "nodemon --watch \"./webpack.config.js\" --exec \"pnpm start\""
  },
```

This is useful for developmenting webpack configuration.



