function leap(year) {
    if (year % 400 == 0) {
        return 'leap year'
    } else if (year % 100 == 0 && year % 400 != 0) {
        return 'not a leap year'
    } else if (year % 4 == 0 && year % 100 != 0){
        return 'leap year'
    }
}