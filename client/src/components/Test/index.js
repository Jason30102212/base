import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextFieldGroup from './components/TextFieldGroup'
import { getTestContents, updateTestContent } from '../../actions/testActions'

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      errors: {}
    }
  }

  componentDidMount() {
    this.props.getTestContents()
  }

  displayContent = () => {
    if(this.props.test[0]) {
      return this.props.test[0].content
    }
  }

  updateContent = () => {
    this.props.updateTestContent(this.state.content)
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault()

    this.props.registerUser(this.state.content)
  }

  render() {
    const { errors } = this.state
    return(
      <div className='test_wrapper card'>
        <div className='test_wrapper__inner'>
          <div className='test_wrapper__left'>
            <h3 className='test_wrapper__heading'>Welcome To Your Demo</h3>
            <div className='test_wrapper__status'>
              <div>
                <p className='test_wrapper__backend-boilerplate-created'>Backend Boilerplate Created.....</p>
              </div>
              <div>
                <p className='test_wrapper__frontend-boilerplate-created'>Frontend Boilerplate Created.....</p>
              </div>
              <div>
                <p className='test_wrapper__sass-implemented'>SASS Implemented.....</p>
              </div>
              <div>
                <p className='test_wrapper__mongodb-initiated'>MongoDB Initiated.....</p>
              </div>
            </div>
          </div>
          <div className='test_wrapper__right'>
            <div className='test_wrapper__mongodb-demo-container'>
              <h3 className='test_wrapper__mongodb-demo-heading'>MongoDB Test:</h3>
              <div className="card-body">
                <p className="test-wrapper__mongodb-demo-explanation card-text">Extracted demo content: </p>
                {this.displayContent()}
              </div>
              <TextFieldGroup
                placeholder="Change content"
                name="content"
                type="content"
                value={this.state.content}
                onChange={this.onChange}
                error={errors.content}
              />
              <button className='btn btn-info btn-block mt-4' onClick={() => this.updateContent()}>Change</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  test: state.test
})

export default connect(mapStateToProps, { getTestContents, updateTestContent })(Test)
