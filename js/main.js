function formOpen (button, form) {
    document.querySelector(`${button}`).addEventListener('click' ,() => {
        document.querySelector(`${form}`).classList.add('active')
    } ) 
}

formOpen('.apartments_button', '.form-offer');
formOpen('.contract_button', '.form-planing');
formOpen('.consult_button', '.form-planing')

document.onclick = (e) => {
    if(e.target === document.querySelector('.form-planing')) {
        e.target.classList.remove('active')
    }

    if(e.target === document.querySelector('.form-offer') || e.target === document.querySelector('.close_input')) {
        document.querySelector('.form-offer').classList.remove('active')
    }

}