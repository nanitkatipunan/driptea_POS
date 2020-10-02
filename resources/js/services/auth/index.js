import axios from 'axios'
import ROUTER from '../../router'
export default {
    url: 'http://localhost:8000/',
    currentPath: false,
    productName: '',
    productPrice: null,
    imageSelected: null,
    token: null,
    user: {
        casherId: null,
        fullname: null,
        userType: null
    },
    authenticateForAll(routes = null) {
        let token = localStorage.getItem('userToken')
        if (token) {
            this.setToken(token)
            axios({
                method: 'post', //you can set what request you want to be
                url: this.url + 'user',
                headers: {
                  Authorization: 'Bearer ' + token
                }
            }).then(res => {
                this.setUser(res.data.user.id, res.data.user.name, res.data.user.account_type)
                if (routes !== null) {
                    ROUTER.push(routes)
                }
            })
            return true
        } else {
            return false
        }
    },
    setUser(casherId, fullname, userType) {
        localStorage.setItem('casherId', casherId)
        this.user.casherId = casherId
        this.user.fullname = fullname
        this.user.userType = userType
    },
    setToken(token){
        this.token = token
        localStorage.setItem('userToken', token)
        if(token){
          setTimeout(() => {
            axios.post(this.url+'tokenRefresh', ).then(response => {
              this.setToken(response['token'])
            }).catch(err => {
                this.deaunthenticate()
            })
          }, 1000 * 60 * 60) // 50min
        }
      },
    deaunthenticate(){
        localStorage.removeItem('userToken')
        localStorage.removeItem('casherId')
        this.setUser(null)
        axios.post(this.url+'deaunthenticate')
        this.token = null
        ROUTER.go('/')
    }
}