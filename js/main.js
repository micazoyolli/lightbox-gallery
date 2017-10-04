// Properties

var p = {
  animation: 'fade',
  bodyDom: document.querySelector('body'),
  imgGallery: document.querySelectorAll('#gallery ul li img'),
  lightbox: null,
  modal: null,
  routeImage: null
};

// Methods

var m = {
  getImage: function(img) { // Get source image
    p.routeImage = img.target;

    m.lightbox(p.routeImage);
  },

  init: function() { // Initial Function
    for (var i = 0; i < p.imgGallery.length; i++) {
      p.imgGallery[i].addEventListener('click', m.getImage);
    }
  },

  leaveGallery: function() { // Close image
    p.lightbox.parentNode.removeChild(p.lightbox);
  },

  lightbox: function(img) { // Create Lightbox
    // Adding div opacity
    p.bodyDom.appendChild(document.createElement('DIV')).setAttribute('id',
      'lightbox');
    p.lightbox = document.querySelector('#lightbox');

    // Adding styles overlay
    p.lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
    p.lightbox.style.height = '100%';
    p.lightbox.style.left = '0';
    p.lightbox.style.position = 'fixed';
    p.lightbox.style.top = '0';
    p.lightbox.style.width = '100%';
    p.lightbox.style.zIndex = '10';

    // Adding modal
    p.lightbox.appendChild(document.createElement('DIV')).setAttribute('id',
      'modal');
    p.modal = document.querySelector('#modal');

    // Get content, capsule (image) and add close
    p.modal.innerHTML = img.outerHTML + "<div>x</div>";

    // Adding styles modal
    p.modal.style.display = 'block';
    p.modal.style.position = 'relative';

    // Adding styles image
    p.modal.childNodes[0].style.border = "15px solid white";
    p.modal.childNodes[0].style.width = "100%";

    // Responsive width modal (media queries js)
    if (window.matchMedia("(max-width:1000px)").matches) {
      p.modal.style.width = '90%';
    } else {
      p.modal.style.width = '60%';
    }

    // Animation to appear modal
    if (p.animation == 'slideLeft') {
      p.modal.style.left = 0;
      p.modal.style.opacity = 0;
      p.modal.style.top = '50%';

      setTimeout(function() {
        p.modal.style.left = '50%';
        p.modal.style.opacity = 1;
        p.modal.style.transition = '.5s left ease';

        // Calculate width screen and center modal
        p.modal.style.marginLeft = -p.modal.childNodes[0].width / 2 +
          'px';
        p.modal.style.marginTop = -p.modal.childNodes[0].height / 2 +
          'px';
      }, 50);
    }

    if (p.animation == 'slideTop') {
      p.modal.style.left = '50%';
      p.modal.style.opacity = 0;
      p.modal.style.top = '-100%';

      setTimeout(function() {
        p.modal.style.opacity = 1;
        p.modal.style.top = '50%';
        p.modal.style.transition = '.5s top ease';

        // Calculate width screen and center modal
        p.modal.style.marginLeft = -p.modal.childNodes[0].width / 2 +
          'px';
        p.modal.style.marginTop = -p.modal.childNodes[0].height / 2 +
          'px';
      }, 50);
    }

    if (p.animation == 'fade') {
      p.modal.style.left = '50%';
      p.modal.style.opacity = 0;
      p.modal.style.top = '50%';

      setTimeout(function() {
        p.modal.style.opacity = 1;
        p.modal.style.transition = '.5s opacity ease';

        // Calculate width screen and center modal
        p.modal.style.marginLeft = -p.modal.childNodes[0].width / 2 +
          'px';
        p.modal.style.marginTop = -p.modal.childNodes[0].height / 2 +
          'px';
      }, 50);
    }

    // Adding styles close
    p.modal.childNodes[1].style.background = 'white';
    p.modal.childNodes[1].style.borderRadius = '0 0 0 5px';
    p.modal.childNodes[1].style.color = 'silver';
    p.modal.childNodes[1].style.cursor = 'pointer';
    p.modal.childNodes[1].style.fontSize = '30px';
    p.modal.childNodes[1].style.height = '40px';
    p.modal.childNodes[1].style.position = 'absolute';
    p.modal.childNodes[1].style.right = '5px';
    p.modal.childNodes[1].style.textAlign = 'center';
    p.modal.childNodes[1].style.top = '5px';
    p.modal.childNodes[1].style.width = '40px';

    // Click close
    p.modal.childNodes[1].addEventListener('click', m.leaveGallery);
  }
};

m.init();
