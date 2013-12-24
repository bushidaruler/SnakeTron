(function() {
  define(['jquery', 'underscore', 'backbone', 'hb!/templates/header.hb'], function($, _, Backbone, headerTemplate) {
    var HeaderView;

    return HeaderView = Backbone.View.extend({
      initialize: function() {},
      render: function() {
        return this.$el.html(headerTemplate);
      },
      select: function(name) {
        this.$el.find('.navigation li a').removeClass('selected');
        return this.$el.find('.navigation li a.' + name).addClass('selected');
      }
    });
  });

}).call(this);
