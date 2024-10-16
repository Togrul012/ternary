let user = prompt('İstifadəçi adınızı daxil edin qeyd edin:')
let kod = prompt('Parolu daxil edin:')
let netice;

switch (true) {
    case user == 'erlams' && kod == '123456':
        netice = 'Erlams, sayta xoş gəlmisiniz'
        break;
    case user == 'Elsen' && kod == '123456':
        netice = 'Elsen, sayta xoş gəlmisiniz'
        break;
    case user == 'Aysel' && kod == '123456':
        netice = 'Aysel, sayta xoş gəlmisiniz'
        break;
    case user == 'Togrul' && kod == '123456':
        netice = 'Togrul, sayta xoş gəlmisiniz'
        break;
    case user == 'Huriyye' && kod == '123456':
        netice = 'Huriyye, sayta xoş gəlmisiniz'
        break;
    case user == 'Fexriyye' && kod == '123456':
        netice = 'Fexriyye, sayta xoş gəlmisiniz'
        break;
    case user == 'İlkin' && kod == '123456':
        netice = 'İlkin, sayta xoş gəlmisiniz'
        break;
    default:
        netice = 'siz bu sayti istifade ede bilmersiniz'
        break;
}

document.getElementById('user').innerHTML = netice