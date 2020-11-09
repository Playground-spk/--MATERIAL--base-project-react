const { default: AccessPermisson } = require("../views/pages/AccessPermisson");
const { default: Main } = require("../views/pages/Main");

const components = {
    accessPermisson : {
       component : AccessPermisson,
       url : '/access/via/:token',
       name: 'access'
    },
    main: {
      component : Main,
      url : '/main',
      name:'main'
    }
}

const allowPages = {
  guest : {
    routes : [components.accessPermisson],
  },
  user : {
    routes : [components.main],
    redirect : '/main'
  }
}

export default allowPages;