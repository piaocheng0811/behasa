var options = {
    validators: {
        checkbox(value, attrValue, vnode) {
            return value;
        },
        sameas(value, attrValue, vnode) {
            return value == attrValue;
        }
    }
}

export default options;
