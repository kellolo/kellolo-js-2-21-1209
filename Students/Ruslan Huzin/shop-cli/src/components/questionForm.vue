<template>
    <div ref="container" class="modal-question-form">
      <i class="fas fa-times" ref="crossButton"></i>
      <p>Задайте нам вопрос</p>
      <form action="" v-on:submit.prevent="_setFormValidations">
        <div class="form">
          <p>Имя</p>
          <input type="text" name="name" ref="nameBox">
          <p>Телефон</p>
          <input type="text" name="phone" ref="phoneBox">
          <p>E-mail</p>
          <input type="text" name="mail" ref="mailBox">
          <p>Текст</p>
          <textarea cols="25" rows="4" style="resize: none;" name="text" ref="textBox"></textarea>
        </div>
        <div class="form-buttons">
          <input type="submit" value="Отправить" class="submit-button" ref="submitButton">
          <input type="reset" value="Очистить">
        </div>
      </form>
    </div>
</template>

<script>
export default {
    data() {
        return{
            mailRegExp: new RegExp('^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$'),
            nameRegExp: new RegExp('^[a-z]+$'),
            phoneNumberRegExp: new RegExp('^([+]7)[(]([0-9]){3}[)]([0-9]){3}-([0-9]){4}$'),
            textRegExp: new RegExp('.+'),
            inputs: [this.nameBox, this.phoneBox, this.mailBox, this.textBox],
            messages: ['Имя содержит только латинские буквы','Телефон имеет вид +7(000)000-0000', 'Неправильный E-mail', 'Введите сообщение']
        }
    },
    methods:{
        _formInit(){
            this.inputs = [this.$refs.nameBox, this.$refs.phoneBox, this.$refs.mailBox, this.$refs.textBox]
            this.RegExps = [this.nameRegExp, this.phoneNumberRegExp, this.mailRegExp, this.textRegExp],
            this._formRender();
            this._formHandleActions();
        },
        _formRender() {
            setTimeout(() => {
                this.$refs.container.style.cssText = 'display: flex; animation: slide-in-right 0.5s';
                this.$parent.$refs.modalWindow.style.display = 'block';
            }, 1000);
        },
        _formHandleActions() {
            this.$refs.crossButton.addEventListener('click', () => {
                this.$refs.container.style.animation = 'slide-out-right 0.7s';
                setTimeout(() => {
                    this.$refs.container.style.display = 'none';
                    this.$parent.$refs.modalWindow.style.display = 'none';
                }, 500);
            });
        },
        _setFormValidations(ev) {
            console.log(this.RegExps[0].test(this.inputs[0].value))
            let i = 0;
            this.inputs.forEach(input => {
                if (!this.RegExps[i].test(input.value)) {
                    input.placeholder = this.messages[i];
                    input.classList.add('input-error');
                    ev.preventDefault();
                }
                else{
                    input.classList.remove('input-error');
                }
                i+=1;
            })
        },
    },
    mounted(){
        this._formInit();
    }
}

</script>

<style>

</style>