const { default: axios } = require('axios')
const apiPort = 'http://localhost:3333/users'
const moment = require("jalali-moment")

exports.persianType = date => {
  switch (date) {
    case 'forest':
      return 'طبیعت گردی';

    case 'sea':
      return 'دریا';

    case 'offroad':
      return 'آفرود';

    case 'desert':
      return 'کویرگردی';

    case 'historical':
      return 'تاریخی';

    case 'mountain':
      return 'کوهنوردی';

    default:
      return 'طبیعت گردی';
  }
};
exports.persianDuration = date => {
  switch (date) {
    case 0:
      return 'یک روز';
    case 1:
      return 'یک روز';

    case 2:
      return 'دو روز';

    case 3:
      return 'سه روز';

    case 4:
      return 'چهار روز';

    case 5:
      return 'پنج روز';

    case 6:
      return 'شش روز';

    case 7:
      return 'یک هفته';

    case 10:
      return 'ده روز';

    case 12:
      return 'دوازده روز';

    case 14:
      return 'دو هفته';

    case 21:
      return 'سه هفته';

    case 1:
      return 'یک روز';

    case 30:
      return 'یک ماه';

    default:
      return 'یک روز';
  }
};
exports.acceptOrNot = date => {
  switch (date) {
    case date.isAccept = 'accept':
      return 'تایید شده';
    case date.isAccept = 'waiting':
      return 'در حال انتظار...';
    default:
      return 'در حال انتظار...';

  }
};
exports.truncate = (str, len) => {
  if (str.length > len && str.length > 0) {
    let new_str = str + ' '
    new_str = str.substr(0, len)
    new_str = str.substr(0, new_str.lastIndexOf(' '))
    new_str = new_str.length > 0 ? new_str : str.substr(0, len)
    return new_str + '...'
  }
  return str
}
exports.formDate = date => {
  return moment(date).locale("fa").format("D MMM YYYY")
}
exports.isAuth = (token) => {
  const res = axios
    .get(`${apiPort}/isAuth`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err.response
    })
  return res
}
