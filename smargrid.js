const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '10px',
    container: {
        maxWidth: '1180px',
        fields: '50px'
    },
    breakPoints: {
        md: {
            width: "992px",
            fields: "20px"
        },
        sm: {
            width: "720px",
            fields: "10px"
        },
        xs: {
            width: "576px",
            fields: "10px"
        },
        xxs: {
            width: "380px",
            fields: "5px"
        }
    },

    oldSizeStyle: false,
    outputStyle: 'scss'
}

smartgrid('./src/precss', settings);