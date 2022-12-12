function forms(){
    const form = document.querySelector('.popup__login-form');
    const messages = {
        loading: 'Загрузка',
        success: 'Вы успешно авторизовались',
        failure: 'Что-то пошло не так...'
    }
    
    function postData(form){
        form.addEventListener('submit', (e) =>{
            e.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = messages.loading;
            form.append(statusMessage);
    
            const formData = new FormData(form);
    
            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });
            fetch('../../server.php', {
                method: "POST",
                // mode: 'cors',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(object)
            })
            .then(data =>data.text())
            .then(data =>{
                console.log(data);
                statusMessage.textContent = messages.success;
                setTimeout(() =>{
                    statusMessage.remove();
                }, 5000);
            })
            .catch(() =>{
                statusMessage.textContent = messages.failure;
            })
            .finally(() =>{
                form.reset();
            })
        });
    }
    postData(form);
}

export default forms;
