window.addEventListener("DOMContentLoaded", function () {

    $(function () {
        $(".formcarryForm").submit(function (e) {
            e.preventDefault();

            let email = document.getElementsByName("field-email");
            let name = document.getElementsByName("field-fio");
            let number = document.getElementsByName("field-number");
            const checkbox = document.getElementById("formcheck");
            let formcheck = true;
            if (!name[0].value) {
                formcheck = false;
            }
            if (!email[0].value) {
                formcheck = false;
            }
            if (!number[0].value) {
                formcheck = false;
            }
            if (!checkbox.checked) {
                formcheck = false;
            }

            if (formcheck) {
                $.ajax({
                    complete: function () {
                        document.getElementById("myform").reset();
                    },
                    contentType: false,
                    data: new FormData(this),
                    dataType: "json",
                    error: function (jqXHR) {
                        const errorObject = jqXHR.responseJSON;

                        alert("Ошибка: " + errorObject.message);
                    },
                    processData: false,
                    success: function (response) {
                        if (response.status === "success") {
                            alert("Форма отправлена!");
                            document.getElementById("myform").reset();
                        } else {
                            alert("Ошибка");
                            document.getElementById("myform").reset();
                        }
                    },
                    type: "POST",
                    url: "https://formcarry.com/s/5HKia9oLyPf"
                });
            } else {
                alert("Заполните обязательные поля формы");
            }
        });
    });
});
