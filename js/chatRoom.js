new Vue({
    el: '#app',
    data() {
        return {
            dialogFormVisible: false,
            form: {},
            // formLabelWidth: '120px',
            radio: 2,
        }
    },
    methods: {
        applyMsgClick(){    
            $(".apply-group").show();
        }
    },
    mounted() {

    }
})