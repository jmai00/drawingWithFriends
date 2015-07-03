//PictureView.js

var app = app || {};

app.PictureView = Backbone.View.extend({
  tagName: 'svg',
  className: 'canvas',

  initialize: function(options){
    this.colorPickerView = new app.ColorPickerView();
    this.render(options);
    //TODO another listener for empty lines = delete all lineview subviews
    //we currently have no way to delete lineviews added
    //and we also only listen to additions of lines
    socket.emit('get lines');
    this.model.get('lines').on('reset', function(options) {
      //TODO tell each line view to remove itself, or mass remove like so:
      //debugger;
      if (Backbone.history.getFragment() !== 'draw') return; //horribleness TODO. only do view rendering stuff is it's the correct view
      this.render(options);
      //this.d3;
    }.bind(this, options));
    this.model.get('lines').on('add', function(line) {
      this.renderLine(line);
    }, this);

    this.colorPickerView.on('selectedColor', function(event) {
      this.model.changeColor(event);
    }, this);

    this.colorPickerView.on('selectedFill', function(event) {
      this.model.changeFill(event);
    }, this);
    this.colorPickerView.on('selectedWidth', function(event) {
      this.model.changeWidth(event);
    }, this);

  },

  renderLine: function(line) {
    //instantiate new LineView 
    //console.log('add event triggered');
    //
    //TODO add a container for all these line subviews
    new app.LineView({
      model: line,
      container: this.d3
    });
  },

  getMouse: function() {
    //pass in the d3 node so that it gets coordinates relative to the
    //SVG element, rather than relative to the entire page
    return d3.mouse(this.d3.node());
  },



  render: function(options) {
    // this.colorPickerView.render()
    var currentColor = '#000000';
    var context = this;
    if (this.toolbar === undefined) {
       this.toolbar = $(options.container[0]).append(this.colorPickerView.$el);
      // $(options.container[0]).find('.toolbar').remove();
      $('.toolbar>div.selectColor').on('click', function () {
        $('*').removeClass('selected');
        $(this).addClass('selected');
        console.log($(this).attr('class'));
        var color = $(this).attr('class').split(" ")[1].replace('select','');
        console.log(color);
        $('.currentColor').attr('class', 'currentColor ' + color);
        console.log($('.currentColor'))
        // console.log(currentColor);
        // context.model.changeColor(currentColor);
      });

    }
   
    //TODO all these d3 elems could probably be refactored to be more like $el--attempted but views didn't render correctly
    //for line reset render: if the svg element is present, remove it
    if (this.d3) {
      //this.d3.remove();
      $(options.container[0]).find('svg').remove();
    }
    // append(this.colorPickerView.el);

    this.d3 = options.container
    .append(this.tagName)
    .attr({
      'class': this.className,
      width: this.model.get('width'),
      height: this.model.get('height')
    })

    .call(d3.behavior.drag()
          .on("dragstart", this.model.dragStarted.bind(this.model))
          .on("drag", function() {
            this.model.drag(this.getMouse());
          }.bind(this))
          .on("dragend", this.model.dragEnded.bind(this.model)));
          //like 'events' hash
  }

});


/*
TODO update this
   Instantiating a PictureView
   ---------------------------------------------------
   --> Pass in a PictureModel, the DOM element it will be appended to, 
   width, and height

   var picture = new app.PictureView({
model: pictureData, 
container: d3.select('body'),
width: '500px', 
height: '500px'
});

*/
