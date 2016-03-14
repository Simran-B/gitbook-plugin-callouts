var CLASSES = {
    note:'info',
    tip:'success',
    warning:'danger',
    working:'warning'
};

function makeIcon(name) {
    return '<i class="octicon octicon-'+name+'"></i>';
}
var ICONS = {
    note: '',
    tip: makeIcon('mortar-board'), // Diploma hat
    warning: makeIcon('issue-opened'),
    working: makeIcon('tools')
};

module.exports = {
    blocks: {
        hint: {
            process: function (block) {
                // Available styles: note, warning, tip, working
                var style = block.kwargs.style || 'note';
                return '<div class="alert alert-'+CLASSES[style]+'">'
                    + ICONS[style]
                    + block.body
                    + '</div>';
            }
        }
    }
};
