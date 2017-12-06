function makeIcon(name) {
    return '<i class="fa fa-'+name+'" style="float: left; padding: 5px"></i>';
}
var types = {
    note: ['', makeIcon('comment-o')],
    quote: ['', makeIcon('quote-left')],
    info: ['alert-info', makeIcon('info-circle')],
    tip: ['alert-success', makeIcon('check')],
    warning: ['alert-warning', makeIcon('exclamation-triangle')],
    danger: ['alert-danger', makeIcon('times-circle')]
};

module.exports = {
    blocks: {
        hint: {
            process: function (block) {
                var type = types[block.args[0]] || types['info'];

                return this.renderBlock('markdown', block.body).then(function (html) {
                    return '<div class="alert '+type[0]+'">'
                        + type[1]
                        + '<div style="margin-left: 32px">' + html + '</div>'
                        + '</div>';
                });
            }
        }
    }
};
