function swapImage(clickedImage) {
      const mainImage = document.getElementById('main');
      const tempSrc = mainImage.src;
      mainImage.src = clickedImage.src;
      clickedImage.src = tempSrc;
    }
