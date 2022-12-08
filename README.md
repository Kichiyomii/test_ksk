Тут лежит тест, что могу сказать:

Постарался максимально декомпозировать разделил по папкам, жаль не поддерживает глобальные scss и что бы его юзать пришлось бы импортировать, что не очень удобно

Решил использовать momentJs, что бы не городить такие конструкции:

    function dateFormat(inputDate, format) {
    //parse the input date
    const date = new Date(inputDate);

    //extract the parts of the date
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();    

    //replace the month
    format = format.replace("MM", month.toString().padStart(2,"0"));        

    //replace the year
    if (format.indexOf("yyyy") > -1) {
        format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
        format = format.replace("yy", year.toString().substr(2,2));
    }

    //replace the day
    format = format.replace("dd", day.toString().padStart(2,"0"));

    return format;



Решил сделать сортировку и фильтрация вне самого стора, что бы не трогать глобальное хранилище

Немного застрял на vue-router, т.к. давно с ним не работал (в Nuxt под капотом встроен)

Так же решил не создавать глобальные переменные, т.к. проект не самый большой, в таком количестве применений нет особого смысла что бы создавать переменные для цветов
