(function() {
  var HamburgerMenu;

  HamburgerMenu = (function() {
    function HamburgerMenu(button, options) {
      var defaultOptions;
      defaultOptions = {
        activeClass: 'active'
      };
      this.options = $.extend({}, defaultOptions, options);
      this.button = $(button);
      this.button.click((function(_this) {
        return function() {
          return _this.toggle();
        };
      })(this));
    }

    HamburgerMenu.prototype.toggle = function() {
      if (this.expanded) {
        return this.collapse();
      } else {
        return this.expand();
      }
    };

    HamburgerMenu.prototype.expand = function() {
      var _ref;
      this.expanded = true;
      return (_ref = this.button.attr('aria-expanded', true).attr('aria-label', 'Close menu').parent()) != null ? _ref.addClass(this.options.activeClass) : void 0;
    };

    HamburgerMenu.prototype.collapse = function() {
      var _ref;
      this.expanded = false;
      return (_ref = this.button.attr('aria-expanded', false).attr('aria-label', 'Open menu').parent()) != null ? _ref.removeClass(this.options.activeClass) : void 0;
    };

    return HamburgerMenu;

  })();

  window.HamburgerMenu = HamburgerMenu;

  return new HamburgerMenu('#navicon-button', {
    activeClass: 'global-navigation--active'
  });


}).call(this);
