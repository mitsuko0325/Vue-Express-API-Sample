import api from './index'

export default {
    testPosting(){
        const item = {text: 'Success'}
        return api().post('/test', item)
    }

    
}