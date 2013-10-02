$.extend(KhanUtil, {

    doInteraction: function(func) {
        var graph = KhanUtil.currentGraph;

        var directrixLine = KhanUtil.bogusShape;
        var highlighted = false;

        // Attach an onMove handler that gets called whenever the mouse hovers over
        // the parabola
        func.onMove = function(coordX, coordY) {
            directrixLine.remove();
            graph.style({ strokeWidth: 1.5, stroke: KhanUtil.ORANGE, opacity: 0.0 });

            // Draw a line from the vertex to the highlighted point on the parabola
            // Draw the horizontal line from the highlighted point on the parabola towards the directrix
            directrixLine = graph.line([coordX, -1000], [coordX, 1000]);
            directrixLine.toBack();
            if (!highlighted) {
                directrixLine.animate({opacity: 1.0}, 100);
            } else {
                directrixLine.attr({ opacity: 1.0 });
            }
            highlighted = true;
        };

        // Attach an onLeave handler that gets called whenever the mouse moves away
        // from the parabola
        func.onLeave = function(coordX, coordY) {
            directrixLine.animate({opacity: 0.0}, 100);
            highlighted = false;
        };

    }

});
