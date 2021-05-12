let loading = document.querySelector('.loading-block');

function hideLoading () {
    console.log('DOM loaded')
    loading.classList.add('d-none');
}

if(document.readyState === 'loading') {
    console.log('loading')
    document.addEventListener("DOMContentLoaded", hideLoading);
} else {
    hideLoading();
}