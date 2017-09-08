const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

const shapes = [];

const rect = new Shape();
rect.color.copy(Colors.PURPLE);
rect.size.set(200, 60);
rect.position.set(20, 10);
shapes.push(rect);

shapes.forEach(shape => {
    shape.draw(context);
});
