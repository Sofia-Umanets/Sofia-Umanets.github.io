
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.getElementById("closeModal");
    const feedbackForm = document.getElementById("form");
    const responseMessage = document.getElementById("responseMessage");
    // Открытие модального окна
    openModal.onclick = function () {
        modal.style.display = "grid";
        history.pushState({modalOpen: true}, "", "?modal=true");
        loadFormData();
        responseMessage.textContent = "";
    };

    // Закрытие модального окна
    closeModal.onclick = function () {
        closeModalHandler();
    };

    // Закрытие модального окна при нажатии "Назад"
    window.onpopstate = function (event) {
        if (event.state && event.state.modalOpen) {
            closeModalHandler();
        }
    };

    function closeModalHandler() {
        modal.style.display = "none";
        history.pushState(null, "", window.location.pathname);
    }

    // Загрузка данных из LocalStorage
    function loadFormData() {
        const fields = ["fullName", "email", "phone",
            "organization", "message"];
        fields.forEach(function (field) {
            const value = localStorage.getItem(field);
            if (value) {
                document.getElementById(field).value = value;
            }
        });
    }

    // Сохранение данных в LocalStorage
    feedbackForm.addEventListener("input", function () {
        const fields = ["fullName", "email", "phone",
            "organization", "message"];
        fields.forEach(function (field) {
            localStorage.setItem(field, document.getElementById(field).value);
        });
    });

    // Отправка формы
    $(".formcarryForm").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            url: href,
            data: new FormData(this),
            dataType: "json",
            processData: false,
            contentType: false,
            success: function(response){
                if(response.status === "success"){
                    alert("We received your submission, thank you!");
                }
                else if(response.code === 422){
                    alert("Field validation failed");
                    $.each(response.errors, function(key) {
                        $('[name="' + key + '"]').addClass('formcarry-field-error');
                    });
                }
                else{
                    alert("An error occured: " + response.message);
                }
            },
            error: function(jqXHR, textStatus){
                const errorObject = jqXHR.responseJSON

                alert("Request failed, " + errorObject.title + ": " + errorObject.message);
            }
        });
    });
});