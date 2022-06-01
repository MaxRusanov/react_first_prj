import React from 'react';

// import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  // statusInputRef = React.createRef();
  state = {
    editMode: false,
    status: this.props.status,
  }
  componentDidUpdate(prevProps, prevState) {
     if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  activateEditMode = () => {
    // Обычный метод нельзя использовать - потеряется контекст. Нужно использовать через стрелочную функцию
    // debugger;
    // console.log('this: ', this);
    this.setState({
      editMode: true
    });
  }
  deactivateEditMode = () => {
    // Обычный метод нельзя использовать - потеряется контекст. Нужно использовать через стрелочную функцию
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
    // e.currentTarget.value - считанное с input значение
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            {/*<span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>*/}
            <span onDoubleClick={this.activateEditMode}>{this.props.status || '---No-status---'}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input
              // value={this.props.status}
              value={this.state.status}
              onChange={this.onStatusChange}
              type="text"
              // ref={this.statusInputRef}
              // onBlur={this.deactivateEditMode.bind(this)}
              onBlur={this.deactivateEditMode}
              autoFocus={true}
            />
          </div>
        }
      </div>
    );
  }
}

export default ProfileStatus;