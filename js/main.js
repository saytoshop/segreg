var app = new Vue({
    el: '#header',
    created() {
        // this.fetchData();
    },
    data: {
        menuActive: false,
    },
    computed: {
        menuHeight() {
            if (this.menuActive) {
                h = -55 + document.documentElement.clientHeight - document.getElementById('authForm').offsetHeight - document.getElementById('headerTop').offsetHeight;
                console.log(h);
                return h + 'px';
            } else {
                return 'auto';
            }

        }

    },
    methods: {

        toggle() {
            //      console.log(document.getElementById('authForm').offsetHeight);
            this.menuActive = !this.menuActive;
            if (this.menuActive) {
                window.scrollTo(0, document.body.scrollHeight);

            } else {
                window.scrollTo(0, 0);
            }
        }
    }



});

var main = new Vue({
    el: '#main',
    created() {
        // this.fetchData();
    },
    data: {
        menuActive: false,
    },






});