# CSS loader end notes:



The **css-loader** evaluates the `@import` and `url()`, and the **style-loader** converts it to JavaScript and implements webpack’s Hot Module Replacement interface.



Not all path work with **css-loader** .  The following works

- path does not starts with `./` or `../` or `/` (also called non relative url)

- path starts with `./` or `../ `(also called relative url)

The following does not work: 

- path starts with `/ ` (also called **absolute** or **root relative imports**) 



**PostCSS** allows you to inject functionality into CSS through its plugin system.



If you are using **Bootstrap** with webpack, there is a Bootstrap loader for more customization options.