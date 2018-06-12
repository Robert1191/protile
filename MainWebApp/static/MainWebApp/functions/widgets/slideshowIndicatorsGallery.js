var currentGalleryItemSelected = 1;


    function galleryViewItemBtnChange(n){
            refreshGalleryView(currentGalleryItemSelected += n);
    }


    function refreshGalleryView(n){
        numberOfItem = $( ".galleryList img" ).length;

        if(n > numberOfItem){
            n = 1;
        }

        if (n < 1){
            n = numberOfItem;
        }

        currentGalleryItemSelected = n


        for (i = 1; i <= numberOfItem ; i++) {
            display = "none";
            indicatorItemClassName = "indicatorItem";

           if(i == currentGalleryItemSelected){
                display = "block";
                indicatorItemClassName = "indicatorItemSelected";
           }
           ($( ".galleryList img" )[i - 1]).style.display = display;
           ($( ".indicatorSection span" )[i - 1]).className = indicatorItemClassName;
        }

    }