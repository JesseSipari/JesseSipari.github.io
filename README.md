# HTML support in i18n (InnerHTML Rendering)

This feature branch adds support for **HTML content in i18n JSON files**.  
It allows translated text strings to include basic HTML formatting (e.g. `<strong>`, `<em>`, `<a>`, `<ul>`), which are rendered using `innerHTML`.

---

## ✅ What's included

- `script.js` updated to use `el.innerHTML` instead of `textContent`
- JSON language files can now contain valid HTML tags inside translation strings
- Supports bold text, italics, links, lists, and more

---

## 📄 Example usage

### `lang/en.json`

```json
{
  "intro": "I'm a <strong>developer</strong> interested in <em>AI</em> and <a href='https://example.com' target='_blank'>web tech</a>."
}
```

### HTML

```html
<p data-i18n="intro"></p>
```

➡ This will render as:

> I'm a **developer** interested in *AI* and [web tech](https://example.com)

---

## ⚠️ Security Warning

Using `innerHTML` comes with **XSS (cross-site scripting)** risk.

> ✔ You should **only include trusted content** in your language files.  
> ✖ Do **not allow user input** to be directly written into language JSONs.

---

## 💡 Why use this?

- Allows expressive and styled content in multilingual projects
- Makes it easier to manage emphasis, links, and lists without editing HTML manually
- Keeps structure flexible and easier to extend (e.g. add icons or badges)

---

## 📁 Related files

- `script.js` – updated rendering logic using `innerHTML`
- `lang/en.json`, `lang/fi.json` – example language files using HTML

---
