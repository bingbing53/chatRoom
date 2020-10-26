new Vue({
    el: '#app',
    data() {
        return {
            topStatus: '',
            pageList: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了 
            scrollMode: "auto" //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动

        }
    },
    methods: {
        handleClick: function () {
            this.$toast('Hello world!')
        },
        // handleTopChange(status) {
        //     this.topStatus = status;
        // },
        loadTop() { //组件提供的下拉触发方法 
            //下拉加载 
            setTimeout(() => {
                this.$refs.loadmore.onTopLoaded(); // 固定方法，查询完要调用一次，用于重新定位
            }, 2000)
        },
        loadBottom() {
            // 上拉加载 
            this.allLoaded = false;
            setTimeout(() => {
                this.$refs.loadmore.onBottomLoaded(); // 固定方法，查询完要调用一次，用于重新定位
            }, 2000)
        },
    },
    mounted() {

    }
})