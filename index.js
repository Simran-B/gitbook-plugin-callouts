var classes = {
    note:'info',
    tip:'success',
    warning:'danger',
    working:'warning'
};

module.exports = {
    blocks: {
        hint: {
            process: function (block) {
                // Available styles: note, warning, tip, working
                var style = block.kwargs.style || 'note';
                return '<div class="alert alert-'+classes[style]+'">'
                    + block.body
                    + '</div>';
            }
        }
    }
};
