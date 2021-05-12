let loading = document.querySelector('.loading-block');


function hideLoading () {
    console.log('DOM carregado')

}

if(document.readyState === 'loading') {
    console.log('carregando')
    document.addEventListener("DOMContentLoaded", hideLoading);
} else {
    hideLoading();
}