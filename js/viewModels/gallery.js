/**
 * Gallery ViewModel
 */
define(['../accUtils'],
 function(accUtils) {
    function GalleryViewModel() {
      this.connected = () => {
        accUtils.announce('Gallery page loaded.', 'assertive');
        document.title = "Gallery";
      };
      this.disconnected = () => {};
      this.transitionCompleted = () => {};
    }
    return GalleryViewModel;
  }
);
