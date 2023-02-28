Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    getMouseXCoordinate(event) {
      this.x = event.clientX;
    },
    getMouseYCoordinate(event) {
      this.y = event.clientY;
    },
    removeFromList(fruit) {
      this.fruitBasket = this.fruitBasket.filter((element) => {
        return element !== fruit;
      });
    },
  },
}).mount("#app");
