import React from 'react'
import {Popover, Form, Icon, DatePicker, InputNumber, Radio, Input, Button, Row, Col, Progress} from 'antd';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {register} from '../../../Actions/RegisterActions'

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const styles = {
    title: {
        "display": 'flex',
        "justifyContent": "space-between",
        "alignItems": "center"
    },
    close: {
        "fontSize": "16px",
        "fontWeight": "900",
        "cursor": "pointer"
    }
}
class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            passwordMeter: 0,
            visible: false
        }

        this.onVisibleChange = this.onVisibleChange.bind(this)
        this.closeDropdown = this.closeDropdown.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.form.validateFields((err, fieldsValue) => {
            const values = {
                ...fieldsValue,
                birthday: fieldsValue['birthday'] ? fieldsValue['birthday'].format('YYYY-MM-DD') : null
            }
            if (!err) {
                this.props.register(values)
                    .then(() => {
                        this.setState({
                            visible: false
                        })
                    })
                    .catch(error => {
                        console.error('Something went wrong!')
                    })
            }
        })
    }

    onVisibleChange(visible) {
        this.setState({visible: true})
    }

    closeDropdown() {
        this.setState({visible: false})
    }

    getErrorBag(fieldName) {
        const opts = {
            hasFeedback: true,
        };
        if (this.props.registerState.error[fieldName]) {
            const errors = {
                validateStatus: "error",
                help: this.props.registerState.error[fieldName]
            }
            Object.assign(opts, errors)
        }
        return opts
    }

    render() {
        const content = (
            <div style={{width: 348}}>
                <div style={styles.title}>
                    <h3 className="mb-3 mt-2">Aileye Katıl</h3>
                    <Icon style={styles.close} onClick={() => {
                        this.setState({visible: false})
                    }} type="close"/>
                </div>
                <Form layout="vertical" onSubmit={this.handleSubmit}>
                    <Row gutter={8}>
                        <Col span="12">
                            <FormItem label="Kullanıcı Adı" {...this.getErrorBag('name')}>
                                {this.props.form.getFieldDecorator('name', {
                                    rules: [{
                                        required: true,
                                        message: 'Lütfen bir kullanıcı adı girin!',
                                        whitespace: false
                                    }],
                                })(
                                    <Input prefix={<Icon type="user" style={{fontSize: 12}}/>}
                                           placeholder="ZarakiKenpachi"/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span="12">
                            <FormItem label="Şifre" {...this.getErrorBag('password')}>
                                {this.props.form.getFieldDecorator('password', {
                                    rules: [{required: true, message: 'Lütfen şifrenizi girin!'}],
                                })(
                                    <Input onChange={this.checkPassword.bind(this)}
                                           prefix={<Icon type="lock" style={{fontSize: 12}}/>} placeholder="Şifreniz"
                                           type="password"/>
                                )}
                            </FormItem>
                            {this.state.passwordMeter > 5 ?
                                <Progress percent={this.state.passwordMeter} strokeWidth={1} status="active"
                                          showInfo={false}/> : null}
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <FormItem label="E-Posta" {...this.getErrorBag('email')}>
                                {this.props.form.getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email', message: 'Geçerli bir e-posta adresi değil!',
                                    }, {
                                        required: true, message: 'Lütfen e-posta adresinizi giriniz!',
                                    }],
                                })(
                                    <Input placeholder="zaraki@soulsociety.com"/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <small>Aşağıdaki yaş ve cinsiyet bilgileri istatistiksel veri olarak saklanmaktadır. Anime
                            Robotu®'nun daha iyi çalışması için doğru girmenizi öneriyoruz.
                        </small>
                    </Row>
                    <Row gutter={8}>
                        <Col span="16">
                            <FormItem
                                label="Cinsiyet"
                            >
                                {this.props.form.getFieldDecorator('sex')(
                                    <RadioGroup>
                                        <RadioButton value="0">Erkek</RadioButton>
                                        <RadioButton value="1">Kadın</RadioButton>
                                        <RadioButton value="2">Diğer</RadioButton>
                                    </RadioGroup>
                                )}
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem
                                label="Yaş"
                            >
                                {this.props.form.getFieldDecorator('birthday')(
                                    <DatePicker/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <FormItem >
                        <Button disabled={this.props.registerState.isLoading} type="primary" htmlType="submit"
                                size="large">Katıl</Button>
                    </FormItem>
                </Form>
            </div>
        )
        return (
            <Popover content={content} trigger="click" visible={this.state.visible}
                     onVisibleChange={this.onVisibleChange}>
                <a href="#">Aileye Katıl</a>
            </Popover>
        )
    }


    checkPassword(event) {
        const strPassword = event.target.value
        const m_strUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const m_strLowerCase = "abcdefghijklmnopqrstuvwxyz";
        const m_strNumber = "0123456789";
        const m_strCharacters = "!@#$%^&*?_~"
        let nScore = 0;
        if (strPassword.length < 5) {
            nScore += 5;
        }
        else if (strPassword.length > 4 && strPassword.length < 8) {
            nScore += 10;
        }
        else if (strPassword.length > 7) {
            nScore += 25;
        }

        const nUpperCount = this.countContain(strPassword, m_strUpperCase);
        const nLowerCount = this.countContain(strPassword, m_strLowerCase);
        const nLowerUpperCount = nUpperCount + nLowerCount;
        if (nUpperCount === 0 && nLowerCount !== 0) {
            nScore += 10;
        }
        else if (nUpperCount !== 0 && nLowerCount !== 0) {
            nScore += 20;
        }
        const nNumberCount = this.countContain(strPassword, m_strNumber);
        if (nNumberCount === 1) {
            nScore += 10;
        }
        if (nNumberCount >= 3) {
            nScore += 20;
        }
        const nCharacterCount = this.countContain(strPassword, m_strCharacters);
        if (nCharacterCount === 1) {
            nScore += 10;
        }
        if (nCharacterCount > 1) {
            nScore += 25;
        }
        if (nNumberCount !== 0 && nLowerUpperCount !== 0) {
            nScore += 2;
        }
        if (nNumberCount !== 0 && nLowerUpperCount !== 0 && nCharacterCount !== 0) {
            nScore += 3;
        }
        if (nNumberCount !== 0 && nUpperCount !== 0 && nLowerCount !== 0 && nCharacterCount !== 0) {
            nScore += 5;
        }

        this.setState({
            passwordMeter: nScore
        })
    }

    countContain(strPassword, strCheck) {
        // Declare variables
        let nCount = 0;

        for (let i = 0; i < strPassword.length; i++) {
            if (strCheck.indexOf(strPassword.charAt(i)) > -1) {
                nCount++;
            }
        }

        return nCount;
    }
}
function mapStateToProps(state) {
    return {
        registerState: state.register
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        register: register
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Register))