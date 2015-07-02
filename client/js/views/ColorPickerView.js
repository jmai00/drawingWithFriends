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
    this.$el.html('<div class="selectColor selectBlack"></div><div class="selectColor selectWhite"></div><div class="selectColor selectGray"></div><div class="selectColor selectDarkGray"></div><div class="selectColor selectRed"></div><div class="selectColor selectDarkRed"></div><div class="selectColor selectGreen"></div><div class="selectColor selectDarkGreen"></div><div class="selectColor selectBlue"></div><div class="selectColor selectDarkBlue"></div><div class="selectColor selectCyan"></div><div class="selectColor selectDarkCyan"></div><div class="selectColor selectYellow"></div><div class="selectColor selectDarkYellow"></div><div class="selectColor selectPurple"></div><div class="selectColor selectDarkPurple"></div><div class="selectColor selectBrown"></div><div class="selectColor selectDarkBrown"></div><div class="selectThicknessWrapper"><div class="selectThicknessInner"><div class="selectThinner"></div></div><div class="selectThicknessInner"><div class="selectThin"></div></div><div class="selectThicknessInner"><div class="selectThick"></div></div><div class="selectThicknessInner"><div class="selectThicker"></div></div></div>');
    return this.$el;
  },
  // changed: function(){
  //   var color= $('select option:selected').val();
  //   $('head').append('<style>.line {stroke:'+color+';}</style>');
  // }
});