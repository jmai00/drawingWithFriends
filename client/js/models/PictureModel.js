//PictureModel

var app = app || {};

app.PictureModel = Backbone.Model.extend({
  //defaults: {
    //container: d3.select('body')
  //},
  selectedColor: '#000000',
  selectedWidth: '4',
  selectedFill: 'none',

  initialize: function() {
    this.set('lines', new app.LineCollection());
  },

  dragStarted: function() {
    //console.log('drag started');
    //this.set('activeLine', new app.LineModel({id: idHash()}));
    this.set('activeLine', new app.LineModel());
    // console.log(this.)
    this.get('activeLine').set('stroke', this.get('selectedColor'));
    this.get('activeLine').set('fill', this.get('selectedFill'));
    this.get('activeLine').set('stroke_width', this.get('selectedWidth'));
    this.get('lines').add(this.get('activeLine'));
  },

  changeColor: function(color) {
    this.set('selectedColor', color);
  },

  changeWidth: function(width) {
    this.set('selectedWidth', width);
  },

  changeFill: function(fill) {
    this.set('selectedFill', fill);
  },

  drag: function(mouseCoord) {
    //console.log('drag');
    this.get('activeLine').updateLine(mouseCoord);
  },

  dragEnded: function() {
    //console.log('dragend');
    this.get('activeLine').endLine();
    this.set('activeLine', null);
  },

});


/*

    Instantiating a PictureModel
    ---------------------------------------------------
    --> Pass in a collection of lines

    var pictureData = new PictureModel({
        lines: new app.LineCollection()
    });

*/
