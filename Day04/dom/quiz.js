const container = document.createElement("div");
container.classList.add("container");

// const box = document.createElement("div");
// box.classList.add("box");
// box.style.backgroundColor = "red";
// container.appendChild(box);

// const box1 = document.createElement("div");
// box1.classList.add("box");
// box1.style.backgroundColor = "yellow";

// arr[1~2000];

const color = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "darkblue",
    "purple",
];

Array(2000).fill(0).forEach((x, i) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = color[i % color.length];
    container.appendChild(box);
});

document.body.appendChild(container);