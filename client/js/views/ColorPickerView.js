var app = app || {};

app.ColorPickerView = Backbone.View.extend({
  tagName: 'div',
  className: 'toolbar',
  colors:  {
    selectBlack: '#000000',
    selectWhite: '#FFFFFF',
    selectGray: '#AAAAAA',
    selectDarkGray: '#555555',
    selectRed: '#FF0000',
    selectDarkRed: '#8B0000',
    selectGreen: '#00FF00',
    selectDarkGreen: '#008B00',
    selectBlue: '#0000FF',
    selectDarkBlue: '#00008B',
    selectCyan: '#00FFFF',
    selectDarkCyan: '#008B8B',
    selectYellow: '#FFFF00',
    selectDarkYellow: '#8B8B00',
    selectPurple: '#FF00FF',
    selectDarkPurple: '#8B008B',
    selectBrown: '#FFDAB9',
    selectDarkBrown: '#8B4513'
  },
  thicknesses: {
    selectThinner: '2',
    selectThin: '4',
    selectThick: '8',
    selectThicker: '16'
  },
  events : {
      'click' : function(event) {
        if (event.target.classList[0] === 'selectColor') {
          this.trigger("selectedColor", this.colors[event.target.classList[1]]);
        }
        else if (event.target.classList[0] === 'selectThickness') {
          this.trigger("selectedWidth", this.thicknesses[event.target.classList[1]]);
        }
        else if (event.target.classList[0] === 'selectFillColor') {
          this.trigger("selectedFill", this.colors[event.target.classList[0]]);
        }
      }
  },

  initialize : function() {
    this.render();
  },
  render : function () {
    this.$el.html('<div class="selectColor selectBlack"></div><div class="selectColor selectWhite"></div><div class="selectColor selectGray"></div><div class="selectColor selectDarkGray"></div><div class="selectColor selectRed"></div><div class="selectColor selectDarkRed"></div><div class="selectColor selectGreen"></div><div class="selectColor selectDarkGreen"></div><div class="selectColor selectBlue"></div><div class="selectColor selectDarkBlue"></div><div class="selectColor selectCyan"></div><div class="selectColor selectDarkCyan"></div><div class="selectColor selectYellow"></div><div class="selectColor selectDarkYellow"></div><div class="selectColor selectPurple"></div><div class="selectColor selectDarkPurple"></div><div class="selectColor selectBrown"></div><div class="selectColor selectDarkBrown"></div><div class="selectThicknessWrapper"><div class="selectThicknessInner"><div class="selectThickness selectThinner"></div></div><div class="selectThicknessInner"><div class="selectThickness selectThin"></div></div><div class="selectThicknessInner"><div class="selectThickness selectThick"></div></div><div class="selectThicknessInner"><div class="selectThickness selectThicker"></div></div></div>');
    return this.$el;
  },
  // changed: function(){
  //   var color= $('select option:selected').val();
  //   $('head').append('<style>.line {stroke:'+color+';}</style>');
  // }
});
