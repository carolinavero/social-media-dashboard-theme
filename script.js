let loading = document.querySelector('.loading-block');
let toggleMode = document.querySelector('#switch');
let page = document.querySelector('main');

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

toggleMode.addEventListener('click', () => {
    console.log("clicou")
    page.classList.toggle('dark-mode');
})