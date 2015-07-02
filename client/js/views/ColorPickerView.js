var app = app || {};

app.ColorPickerView = Backbone.View.extend({
  tagName: 'div',
  className: 'toolbar',

  events : {
      "change" :"changed"
  },

  initialize : function() {
    this.render();
  },
  render : function () {
    this.$el.html('<div class="selectBlack"></div><div class="selectWhite"></div><div class="selectGray"></div><div class="selectDarkGray"></div><div class="selectRed"></div><div class="selectDarkRed"></div><div class="selectGreen"></div><div class="selectDarkGreen"></div><div class="selectBlue"></div><div class="selectDarkBlue"></div><div class="selectCyan"></div><div class="selectDarkCyan"></div><div class="selectYellow"></div><div class="selectDarkYellow"></div><div class="selectPurple"></div><div class="selectDarkPurple"></div><div class="selectBrown"></div><div class="selectDarkBrown"></div><div class="selectThicknessWrapper"><div class="selectThicknessInner"><div class="selectThinner"></div></div><div class="selectThicknessInner"><div class="selectThin"></div></div><div class="selectThicknessInner"><div class="selectThick"></div></div><div class="selectThicknessInner"><div class="selectThicker"></div></div></div>');
    return this.$el;
  },
  // changed: function(){
  //   var color= $('select option:selected').val();
  //   $('head').append('<style>.line {stroke:'+color+';}</style>');
  // }
});