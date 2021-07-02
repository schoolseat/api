module.exports = {
    defaultString: {
        type: String,
        default: ' ',
    },
    defaultArray: {
        type: Array,
        default: [],
    },
    defaultObject: {
        type: Object,
        default: {},
    },
   defaultDate: {
        type: Date,
        required: true,
    },
   defaultId: {
        type: String,
        required: true,
        unique: true,
        default: ' ',
    },
}