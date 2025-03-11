"use strict";

(function init100vh() {
  function setHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  }
  setHeight();
  window.addEventListener('resize', setHeight);
})();
window.addEventListener('orientationchange', function () {
  location.reload(true);
});

// padding no-ios
// document.addEventListener('DOMContentLoaded', function () {
//   let pink = document.querySelector('.pink');
//   if (!/iPad|iPhone|iPod|Mac/.test(navigator.userAgent)) {
//     console.log('if');
//     pink.classList.add('noios-padding');
//   }
// });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaW5pdDEwMHZoIiwic2V0SGVpZ2h0IiwidmgiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImNvbmNhdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFNBQVNBLFNBQVNBLENBQUEsRUFBRztFQUNwQixTQUFTQyxTQUFTQSxDQUFBLEVBQUc7SUFDbkIsSUFBSUMsRUFBRSxHQUFHQyxNQUFNLENBQUNDLFdBQVcsR0FBRyxJQUFJO0lBQ2xDQyxRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQUMsTUFBTSxLQUFBQyxNQUFBLENBQUtQLEVBQUUsT0FBSSxDQUFDO0VBQy9EO0VBQ0FELFNBQVMsQ0FBQyxDQUFDO0VBQ1hFLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsUUFBUSxFQUFFVCxTQUFTLENBQUM7QUFDOUMsQ0FBQyxFQUFFLENBQUM7QUFFSkUsTUFBTSxDQUFDTyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxZQUFNO0VBQ2pEQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdkIsQ0FBQyxDQUFDOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBpbml0MTAwdmgoKSB7XG4gIGZ1bmN0aW9uIHNldEhlaWdodCgpIHtcbiAgICBsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YCk7XG4gIH1cbiAgc2V0SGVpZ2h0KCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRIZWlnaHQpO1xufSkoKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgKCkgPT4ge1xuICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG59KTtcblxuLy8gcGFkZGluZyBuby1pb3Ncbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4vLyAgIGxldCBwaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBpbmsnKTtcbi8vICAgaWYgKCEvaVBhZHxpUGhvbmV8aVBvZHxNYWMvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbi8vICAgICBjb25zb2xlLmxvZygnaWYnKTtcbi8vICAgICBwaW5rLmNsYXNzTGlzdC5hZGQoJ25vaW9zLXBhZGRpbmcnKTtcbi8vICAgfVxuLy8gfSk7XG4iXX0=
