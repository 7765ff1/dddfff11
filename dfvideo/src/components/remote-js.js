export default {
    render(createElement) {
        return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});
    },
    props: {
        src: { type: String, required: true },
    },
}