document.addEventListener('DOMContentLoaded', function () {
    const getStartedWrapper = document.getElementById('getStartedBtnWrapper');
    
    const token = localStorage.getItem("authToken");

    if (token && getStartedWrapper) {
      getStartedWrapper.style.display = "none";
    } else {
      getStartedWrapper.style.display = "block";
    }
  });