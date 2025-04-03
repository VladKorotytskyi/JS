const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
// const colorPickerOption = `<button style="backgroundColor: ${color}" class="btn">${label}</button>`;

const createdOption = (option) => {
  return option.map((option) => {
    return `<button style="background-color: ${option.color}" class="btn">${option.label}</button>`
  });
};

document.querySelector('.js-color-picker').insertAdjacentHTML('beforeend', createdOption(colorPickerOptions));

