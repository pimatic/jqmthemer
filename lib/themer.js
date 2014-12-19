module.exports = {
  themeCss: function(theme, css) {
    var k, replacer, v, _ref;
    _ref = theme.variables;
    for (k in _ref) {
      v = _ref[k];
      replacer = new RegExp("/\\S+(\\s*\\/\\*\\{" + k + "\\}\\*\\/)/", "g");
      css = css.replace(replacer, "v$1");
    }
    return css;
  }
};
