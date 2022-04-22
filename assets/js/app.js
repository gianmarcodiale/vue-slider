const app = new Vue(
    {
        el: '#app',
        data: {
            sliderTimerId: null,
            activeImage: 0,
            views: [
                {
                    image: './assets/img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: './assets/img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: './assets/img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: './assets/img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: './assets/img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ]
        },
        methods: {
            prevImg() {
                // console.log('Ciao');
                if (this.activeImage === 0) {
                    this.activeImage = this.views.length - 1;
                } else {
                    this.activeImage -= 1;
                }
            },
            nextImg() {
                if (this.activeImage === this.views.length - 1) {
                    this.activeImage = 0;
                } else {
                    this.activeImage += 1;
                }
            },
            changeImage(index) {
                // console.log(index, 'ciao');
                this.activeImage = index;
            },
            pauseSlider() {
                clearInterval(this.sliderTimerId)
            },
            restartSlider() {
                this.sliderTimerId = setInterval(this.nextImg, 3000)
            }
        },
        mounted() {
            // console.log('mounted');
            this.restartSlider()
        }
    }
)