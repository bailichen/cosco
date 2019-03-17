export default {
    props:['value'],
    computed:{
        currentValue:{
            get(){
                return this.value
            },
            set(newValue){
                this.value = newValue
            }
        }
    }

}
