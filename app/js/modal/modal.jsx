import EggStore from './../stores/eggStore.jsx'

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: 'hidden',
      name: ''
    }
  }
  componentDidMount() {
    this.eggStore = EggStore;
    this.eggStore.addUnlockListener(this.onEggUnlock.bind(this));
  }
  componentWillUnmount() {
    this.eggStore.removeUnlockListener(function() {})
  }
  onEggUnlock(event, egg) {
    this.setState({
      visibility: 'visible',
      name: egg.name
    })
  }
  closeModal() {
    this.setState({
      visibility: 'hidden',
      name: ''
    })
  }
  bodyClick(event) {
    event.stopPropagation();
  }
  render() {
    return (
      <div style={{
        position: 'absolute',
        zIndex: 10,
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        visibility: this.state.visibility,
        display: 'flex',
        justifyContent: 'center'
      }} onMouseDown={this.closeModal.bind(this)}>
        <div style={{
          width: '80%',
          height: '80%',
          margin: '0 auto',
          backgroundColor: 'darkGrey',
          alignSelf: 'center'
        }} onMouseDown={this.bodyClick.bind(this)}>
          <div><span>{this.state.name}</span> <span>X</span></div>
        </div>
      </div>
    )
  }
}

export default Modal;
