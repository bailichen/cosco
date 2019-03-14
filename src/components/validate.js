export function pass(rule, value, callback) {
    if (!value) {
        callback(new Error('密码不能为空'))
    } else if (value.length < 6 || value.length > 16) {
        callback(new Error('请输入6-16位数字或字母'))
    } else if (!/^[0-9a-zA-Z]*$/g.test(value)) {
        callback(new Error('格式不正确，只能含有数字和字母'))
    }

    callback()
}

export function pass2(rule, value, callback) {
    if (value === '') {
        callback(new Error('请再次输入密码'))
    } else if (value !== this.form.newPassword) {
        callback(new Error('两次输入密码不一致!'))
    }

    callback()
}
