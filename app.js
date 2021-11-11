var app = new Vue({
    el: '#root',
    data: {
        els: [
            {nome: 'secondo', icona: 'fas fa-pizza-slice'},
            {nome: 'dolce', icona: 'fas fa-ice-cream'},
            {nome: 'caffe', icona: 'fas fa-coffee'},
            {nome: 'conto', icona: 'fas fa-euro-sign'},
            {nome: 'amaro', icona: 'fas fa-cocktail'},
            {nome: 'primo piatto sostanzioso', icona: 'fas fa-fish'}, 
        ],

        cachedIndex: null,
        index2: null,
        swappin: false,
        clientY: null,
        t: -1
    },

    methods: {
    shuffle() {
        this.els.sort((a, b) => 0.5 - Math.random())
    },

    reorder() {
        clearTimeout(this.t)

        if (!this.swappin) return;
        if (null === this.index2) {
            this.swappin = false
            this.cachedIndex= null
            this.index2 = null
            return;}

        this.els = [...this.els.slice(0, this.index2 + 1).filter(i => i != this.els[this.cachedIndex]), this.els[this.cachedIndex], ...this.els.slice(this.index2 + 1, this.els.length).filter(i => i != this.els[this.cachedIndex])]
        this.swappin = false
        this.cachedIndex= null
        this.index2 = null
    },

    swapping(index, pos) {
        clearTimeout(this.t)
        this.clientY=pos.clientY
        this.t = setTimeout(()=>{
            this.cachedIndex = index;
            this.swappin = true;
            
        },250)
    },

    changeIndex(index) {
        if (this.swappin && index !== this.cachedIndex) this.index2 = index;
    },

    mouseMove(event) {
        const Y = event.layerY > event.clientY ? event.layerY : event.clientY
        this.clientY = Y
    }
},

}

)