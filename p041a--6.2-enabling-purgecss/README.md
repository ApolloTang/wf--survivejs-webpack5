# 6.2-enabling-purgecss



*file: webpack-part--eleminate-unused-css.js*

```
// PurgeCssPlugin will scan files specified in the following
// glob patterns to look for class names. The class names found during
// this scan will not be elimentated from the output bundles.
const ALL_FILES = [
  ...glob.sync( path.resolve(__dirname, '../', 'src/*.html')),
  ...glob.sync( path.resolve(__dirname, '../', 'src/*.js'))
]
```



As an example, in the file `main.css`:

```css
.unused {
  /**
   * this class is not being used in the project, so purgecss-webpack-plugin
   * will eleminated it from the bundle's output.
  */
  color: 'black';
}

.class-in-html {
  /**
   * this class name is being used in 'foo.html', so purgecss-webpack-plugin
   * will not eleminated it from the bundle's output.
  */
  color: 'black';
}
```

the class `.unused` will not be present in the output bundle because it is not in the project; However, `.class-in-html` is preserved in the output because it is present in the file `foo.html`:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Untitled Document</title>
    </head>

    <body class="class-in-html">
    <!--         ^^^^^^^^^^^^^                                                      -->
    <!-- purgecss-webpack-plugin saw the class name "class-in-html" in this html    -->
    <!-- therefore this class name will not be eleminated from the bundle's output. -->

    </body>
</html>
```



