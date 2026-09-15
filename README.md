# 🎨 Interactive Scratch Effect

An interactive, canvas-free scratch card simulation built using vanilla HTML, CSS, and JavaScript. As the user moves their cursor across the viewport, it dynamic reveals a hidden high-resolution background image by "scratching" through a patterned foreground overlay.

---

## Features

- **Interactive Scratch-to-Reveal**: Real-time cursor movement creates a persistent trail of reveal circular stamps.
- **Fixed-Coordinate Optical Illusion**: Employs `background-attachment: fixed` on reveal elements, ensuring all circular stamps seamlessly align to form a single continuous image.
- **Geometric Foreground Pattern**: Styled with dual-axis repeating linear gradients and a `difference` blend mode to produce an intricate scratch-off coating.
- **Circular Brush Radius**: 220px circular brush tip (`border-radius: 50%`) centered on mouse offset coordinates.
- **Non-Interfering Pointer Events**: Applies `pointer-events: none` to generated spans so they do not block subsequent cursor tracking.
- **Zero Dependencies**: Pure native web technologies without Canvas APIs, external frameworks, or build dependencies.

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Base viewport skeleton and script linking |
| CSS3 | Dual-axis repeating gradients, blend modes, circular brush styling, and fixed background attachment |
| JavaScript (ES6) | Real-time `mousemove` event tracking and dynamic `<span>` DOM creation |

---

## Project Structure

```
Scratch-Effect/
├── index.html       # Application entry point
├── style.css        # Patterned foreground texture and fixed-background reveal styling
├── script.js        # Cursor movement listener and dynamic DOM injection
└── README.md        # Project documentation
```

---

## How It Works

1. **Foreground Pattern (`style.css`)**: The `<body>` element displays two intersecting repeating linear gradients blended with `background-blend-mode: difference`, creating a patterned scratchable surface.
2. **Cursor Detection (`script.js`)**: A `mousemove` listener captures the cursor's `offsetX` and `offsetY` positions relative to the viewport.
3. **Element Stamping**: On every movement, a new `<span>` element is instantiated, styled with fixed position coordinates matching the cursor, and appended to the body.
4. **Seamless Image Assembly**: Because each circular `<span>` has `background-attachment: fixed`, each stamp acts as a viewing window into the exact corresponding coordinate of the underlying image.

---

## Getting Started

No build configurations, package managers, or server installations are necessary.

### 1. Clone the repository

```bash
git clone https://github.com/Kumar44developer/Scratch-Effect.git
```

### 2. Run the application

Open `index.html` directly in any web browser, or launch it with an extension like VS Code Live Server.

---

## Customization

- **Change the Revealed Image**: Replace the image URL inside `style.css` on line 33:
  ```css
  background: url("YOUR_IMAGE_URL_HERE");
  ```
- **Modify Brush Size**: Update the `width` and `height` properties in the `span` rule in `style.css` to make the scratch trail broader or finer:
  ```css
  width: 150px;
  height: 150px;
  ```
- **Adjust Foreground Coating**: Modify the repeating linear gradient colors or `background-size` in `body` within `style.css` to customize the initial cover pattern.

---

## Author

**Kumar44developer** — [GitHub Profile](https://github.com/Kumar44developer)
