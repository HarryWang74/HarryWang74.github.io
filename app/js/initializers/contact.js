(function() {
  $(function() {
    return $('[data-anchor-href]').each(function() {
      return LinkHelper.convert(this);
    });
  });

}).call(this);
