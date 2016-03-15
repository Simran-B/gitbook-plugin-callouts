var CLASSES = {
    info:'info',
    tip:'success',
    danger:'danger',
    working:'warning'
};

function makeIcon(name) {
    return '<i class="octicon octicon-'+name+'" style=""></i>';
}
var ICONS = {
    info: makeIcon('info'),
    tip: makeIcon('mortar-board'), // Diploma hat
    danger: makeIcon('issue-opened'),
    working: makeIcon('tools')
};

module.exports = {
    blocks: {
        hint: {
            process: function (block) {
                // Available styles: info, danger, tip, working
                var style = block.kwargs.style || 'info';

                return '<div class="alert alert-'+CLASSES[style]+'">'
                    + ICONS[style]
                    + block.body
                    + '</div>';
            }
        }
    }
};
