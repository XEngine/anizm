import React from 'react'
import {Popover, Form, Icon, Input, Button, Checkbox, Modal} from 'antd';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {login} from '../../../Actions/LoginActions'

const FormItem = Form.Item;
const style = {
    loginButton: {
        width: '100%'
    },
    forgotPassword: {
        float: 'right'
    }
}

class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.login(values).catch(()=>{
                    Modal.error({
                        title: 'Bir sorun var!',
                        content: (
                            <div>
                                <p>Kullanıcı adını veya şifreni yanlış girmiş olabilirsin.</p>
                            </div>
                        ),
                        okText : 'Pardon..'
                    })
                })
            }
        })
    }

    render() {
        const content = (
            <div>
                <h3 className="mb-3 mt-2">Giriş Yap</h3>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {this.props.form.getFieldDecorator('username', {
                            rules: [{required: true, message: 'Kullanıcı adınızı boş bıraktınız :('}],
                        })(
                            <Input prefix={<Icon type="user" style={{fontSize: 12}}/>} placeholder="Kurosaki Ichigo"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {this.props.form.getFieldDecorator('password', {
                            rules: [{required: true, message: 'Şifreyi de girsene!'}],
                        })(
                            <Input type="password" placeholder="Şifre"/>
                        )}
                    </FormItem>
                    <FormItem>
                        <a style={style.forgotPassword} className="login-form-forgot" href="">Şifremi unutmuş
                            olabilirim</a>
                        <Button type="primary" htmlType="submit" style={style.loginButton}
                                className="login-form-button">
                            Giriş Yab
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )

        return (
            <Popover content={content} trigger="click">
                <a href="#">Giriş Yap</a>
            </Popover>
        )
    }
}

function mapStateToProps(state) {
    return {
        loginState: state.register
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login: login
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login))