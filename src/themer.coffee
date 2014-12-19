module.exports = {

  themeCss: (theme, css) ->
    for k, v of theme.variables
      # /(\S+)\s*\/\*\{([a-z_-]+)\}\*\//
      replacer = new RegExp("/\\S+(\\s*\\/\\*\\{#{k}\\}\\*\\/)/", "g")
      css = css.replace(replacer, "v$1")
    return css

}