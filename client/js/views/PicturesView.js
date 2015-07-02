//PicturesView.js
//TODO this file is pretty bad

var app = app || {};

app.PicturesView = Backbone.View.extend({
  //el : $('ul.gallery-list'),
  tagName: 'ul',
  collection : app.PicturesCollection,

  svgLine: d3.svg.line()
  .x(function(d) { return d[0]; })
  .y(function(d) { return d[1]; })
  .interpolate('basis'),

  initialize : function() {
    $('.container').text('loading...');
    this.collection.on('processed', this.render, this);

  },
  render : function () {
    $('.container').empty();

    //var ul = d3.select(el);
    var ul = d3.select('.container'); //TODO eww
    //everything uses container and it's not very encapsulatey-
    //when the 'got lines' is emitted from the server we rerender and the
    //various views hear it (even if it's not the correct view)
    //see Pictureview.js 'backbone history fragment' fix
    var pictures = this.collection.modelData;
    var pic_ids = Object.keys(pictures).reverse();
    _.each(pic_ids, function(pic_id) {
      var li = ul.append('li').attr('class', 'pic');
      li.append('h4').text(new Date());
      var svg = li.append('svg')
      .attr({
        'class': 'canvas',
        width: 500,
        height: 500
      });

      var picture = pictures[pic_id];
      _.each(picture, function(line) {
        //console.log(JSON.parse(line));
        var line = svg.append('path')
        .datum(JSON.parse(line.coordinates))
        .attr('class', 'line')
        .attr('style', 'stroke: ' + line.stroke + '; fill: ' + line.fill + '; stroke-width: ' + line.stroke_width);
        line.attr('d', this.svgLine);
      }, this);
    }, this);

    //$('.container').append($el);
  }
});
