# Lightbox Gallery JS

Galería con lightbox adaptable a todos los dispositivos.

![Lightbox Responsive](https://github.com/micazoyolli/lightbox-gallery/blob/master/img/screenshot.png)

## Demo
[Lightbox Gallery JS Demo](https://micazoyolli.github.io/lightbox-gallery/)

## Setup

### Descarga de GitHub

Descarga directamente el plugin directo [aquí](https://github.com/micazoyolli/lightbox-gallery/archive/master.zip)

### Incluye archivos CSS y JS

Primero que nada agrega main.css entre las etiquetas `<head>` de tu documento.

```html
<head>
  <link rel="stylesheet" href="css/main.css">
</head>
```

Después incluye `main.js` en tu documento.

```html
<body>
  ...
  <script src="js/main.js"></script>
</body>
```

### Markup

Agrega el siguiente snippet de HTML al cuerpo de tu página web.

```html
<div class="row" id="gallery">
    <ul>
      <li class="col-lg-2 col-md-3 col-sm-4 col-xs-12"><img src="img/gallery/01.jpg" alt="Gallery 1"></li>
      <li class="col-lg-2 col-md-3 col-sm-4 col-xs-12"><img src="img/gallery/02.jpg" alt="Gallery 2"></li>
      <li class="col-lg-2 col-md-3 col-sm-4 col-xs-12"><img src="img/gallery/03.jpg" alt="Gallery 3"></li>
      <li class="col-lg-2 col-md-3 col-sm-4 col-xs-12"><img src="img/gallery/04.jpg" alt="Gallery 4"></li>
    </ul>
</div>
```

### Animation

Al dar click en cada imagen se mostrará un modal. Su animación puede ser de tres tipos (slideLeft, slideTop y fade), el cual podrá configurarse directamente en el `main.js` con solo cambiar la propiedad `animation`.

```html
var p = {
  animation: 'slide'
};
```
